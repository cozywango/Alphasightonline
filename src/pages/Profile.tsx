import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader, User, LogOut, Save, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import ShaderBackground from '@/components/ui/shader-background';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Profile = () => {
    const { user, signOut, loading } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            navigate('/auth');
        } else if (user) {
            setUsername(user.user_metadata?.username || '');
        }
    }, [user, loading, navigate]);

    const handleSave = async () => {
        if (!user) return;
        setIsSaving(true);
        try {
            const { error } = await supabase.auth.updateUser({
                data: { username },
            });

            if (error) throw error;

            toast.success('Profile updated successfully!');
        } catch (error: any) {
            toast.error(error.message || 'Failed to update profile');
        } finally {
            setIsSaving(false);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate('/');
        } catch (error) {
            toast.error('Failed to sign out');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Loader className="w-8 h-8 text-primary animate-spin" />
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background Shader */}
            <ShaderBackground className="absolute inset-0 h-full w-full z-0 pointer-events-none opacity-30" />

            <div className="container max-w-md mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative"
                >
                    <GlowingEffect
                        disabled={false}
                        glow
                        className="pointer-events-none rounded-2xl absolute inset-0 z-[-1]"
                    />

                    <div className="flex flex-col items-center mb-8">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                            <User className="w-10 h-10 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">Your Profile</h1>
                        <p className="text-muted-foreground">Manage your account settings</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> Email
                            </Label>
                            <Input
                                id="email"
                                value={user.email}
                                disabled
                                className="bg-white/5 border-white/10 text-muted-foreground cursor-not-allowed"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="username" className="flex items-center gap-2">
                                <User className="w-4 h-4" /> Username
                            </Label>
                            <Input
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                            />
                        </div>

                        <div className="pt-4 flex flex-col gap-3">
                            <Button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                            >
                                {isSaving ? (
                                    <Loader className="w-4 h-4 animate-spin mr-2" />
                                ) : (
                                    <Save className="w-4 h-4 mr-2" />
                                )}
                                Save Changes
                            </Button>

                            <Button
                                variant="destructive"
                                onClick={handleSignOut}
                                className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
