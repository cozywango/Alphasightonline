-- Create a table for user profiles
create table profiles (
  id uuid references auth.users not null,
  email text,
  role text default 'user', -- 'hunter', 'admin', 'user'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Establish Row Level Security (RLS) for profiles
alter table profiles enable row level security;

create policy "Users can view their own profile" on profiles
  for select using (auth.uid() = id);

create policy "Admins can view all profiles" on profiles
  for select using (
    exists (
      select 1 from profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Create a table for hunter orders
create table hunter_orders (
  id uuid default uuid_generate_v4() primary key,
  hunter_id uuid references profiles(id) not null,
  target_name text not null,
  bounty_amount numeric,
  status text default 'pending', -- 'pending', 'completed', 'failed'
  details text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Establish Row Level Security (RLS) for hunter_orders
alter table hunter_orders enable row level security;

-- Hunters can only see their own orders
create policy "Hunters can view their own orders" on hunter_orders
  for select using (auth.uid() = hunter_id);

-- Hunters can create their own orders
create policy "Hunters can create orders" on hunter_orders
  for insert with check (auth.uid() = hunter_id);

-- Admins can view all orders
create policy "Admins can view all orders" on hunter_orders
  for select using (
    exists (
      select 1 from profiles
      where id = auth.uid() and role = 'admin'
    )
  );
