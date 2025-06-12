# Supabase Setup Guide for Coffee Recipe Manager

This application uses Supabase as its primary database. Follow these steps to set up your Supabase project:

## 1. Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or sign in to your account
3. Click "New Project"
4. Choose your organization
5. Enter a project name (e.g., "coffee-recipe-manager")
6. Enter a database password
7. Choose your region
8. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to Settings → API
2. Copy your Project URL and Project API Key (anon, public)
3. Update the `.env.local` file in your project root:

```
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

## 3. Set Up Database Tables

Run the following SQL commands in your Supabase SQL editor (Database → SQL Editor):

### Create Recipes Table
```sql
create table recipes (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  bean_name text not null,
  bean_quantity_g integer not null,
  water_temp_c integer not null,
  grind_setting text not null,
  brewing_method text not null,
  brew_time_seconds integer,
  water_ratio text,
  pressure_bar integer,
  shot_time_seconds integer,
  tamping_pressure text,
  steeping_time_seconds integer,
  plunge_technique text,
  pour_pattern text,
  bloom_time_seconds integer,
  rating integer default 0,
  notes text default '',
  tags text[] default '{}',
  roast_level text,
  coffee_bean_id uuid,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Create Coffee Beans Table
```sql
create table coffee_beans (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  origin text,
  roaster text,
  roast_date date,
  roast_level text,
  processing_method text,
  variety text,
  altitude text,
  tasting_notes text,
  quantity_g integer,
  price_per_bag numeric,
  bag_size_g integer,
  purchase_date date,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Enable Row Level Security (Optional but Recommended)
```sql
alter table recipes enable row level security;
alter table coffee_beans enable row level security;

-- Allow all operations for authenticated users
create policy "Allow all for authenticated users" on recipes
  for all using (true);

create policy "Allow all for authenticated users" on coffee_beans
  for all using (true);
```

## 4. Start the Application

1. Make sure your `.env.local` file has the correct Supabase credentials
2. Restart your development server:
   ```bash
   npm run dev
   ```

## 5. Verify Setup

- The application should now load without errors
- You can create recipes and coffee beans
- Data will be stored in your Supabase database
- Check your Supabase dashboard to see the data being created

## Troubleshooting

- If you see "supabaseUrl is required" errors, check your `.env.local` file
- Make sure your Supabase URL starts with `https://`
- Ensure your API key is the "anon" key, not the service role key
- Check the browser console for any additional error messages
