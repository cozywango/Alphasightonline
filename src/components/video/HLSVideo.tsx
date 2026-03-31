import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps {
  src: string;
  poster?: string;
  className?: string;
  overlayClassName?: string;
  fadeTop?: boolean;
  fadeBottom?: boolean;
}

export const HLSVideo: React.FC<HLSVideoProps> = ({
  src,
  poster,
  className = "",
  overlayClassName = "",
  fadeTop = false,
  fadeBottom = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    } else {
      video.src = src;
    }
  }, [src]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Darken overlay to match theme */}
      <div className={`absolute inset-0 bg-background/40 z-[1] ${overlayClassName}`} />

      {/* Optional top fade */}
      {fadeTop && (
        <div 
          className="absolute top-0 left-0 right-0 z-[2]" 
          style={{ 
            height: '200px', 
            background: 'linear-gradient(to bottom, hsl(var(--background)), transparent)' 
          }} 
        />
      )}

      {/* Optional bottom fade */}
      {fadeBottom && (
        <div 
          className="absolute bottom-0 left-0 right-0 z-[2]" 
          style={{ 
            height: '200px', 
            background: 'linear-gradient(to top, hsl(var(--background)), transparent)' 
          }} 
        />
      )}
    </div>
  );
};
