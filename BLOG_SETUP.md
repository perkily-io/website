# Blog Publishing System Setup

## Overview
The blog system is now fully integrated with Supabase. Blog posts are stored in a database and can be published or saved as drafts.

## Setup Instructions

### 1. Run the Database Migration

You need to create the `blog_posts` table in your Supabase database. You can do this in two ways:

#### Option A: Using Supabase Dashboard (Recommended)
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase/migrations/create_blog_posts_table.sql`
4. Run the migration

#### Option B: Using Supabase CLI
```bash
supabase migration new create_blog_posts_table
# Copy the SQL from supabase/migrations/create_blog_posts_table.sql
supabase db push
```

### 2. Configure RLS Policies

The migration creates Row Level Security (RLS) policies. For the admin interface to work, you may need to adjust the policies based on your authentication setup:

- **Current setup**: Allows anyone to read published posts (public access)
- **Admin access**: Currently set to allow all authenticated users. Adjust this in Supabase dashboard > Authentication > Policies if you need more restrictive access.

### 3. Environment Variables

Make sure your `.env` file has:
```
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

The Supabase URL is already configured in `src/lib/supabase.ts`.

## How It Works

### Publishing Posts
1. Go to `/admin/blog` and enter the password: `PerkilyBlog2026#`
2. Fill out the blog post form:
   - Title (auto-generates slug)
   - Category (Product, Design, or Platform)
   - Excerpt
   - Content (supports markdown formatting)
   - Cover image URL
   - SEO settings (optional, auto-filled from title/excerpt)
3. Click "Save as Draft" to save without publishing
4. Click "Publish Post" to make it live immediately

### Post Status
- **Draft**: Saved but not visible on the blog
- **Published**: Visible to all visitors on `/blog`

### Display
- Published posts appear on `/blog` sorted by date (newest first)
- Individual posts are accessible at `/blog/{slug}`
- The system falls back to static data in `blogData.tsx` if database fetch fails

## Database Schema

```sql
blog_posts (
  id UUID PRIMARY KEY
  slug TEXT UNIQUE
  title TEXT
  tag TEXT (Product, Design, or Platform)
  excerpt TEXT
  content TEXT
  date DATE
  display_date TEXT
  reading_time TEXT
  cover_image TEXT
  meta_title TEXT
  meta_description TEXT
  keywords TEXT
  og_image TEXT
  status TEXT (draft or published)
  created_at TIMESTAMPTZ
  updated_at TIMESTAMPTZ
)
```

## Features

✅ Password-protected admin interface
✅ Draft and published status
✅ Auto-generates slug from title
✅ Auto-fills SEO fields
✅ Real-time preview
✅ Fallback to static data if database unavailable
✅ Loading states and error handling

## Future Enhancements

- [ ] Markdown rendering with `react-markdown`
- [ ] Image upload to Supabase Storage
- [ ] Edit existing posts
- [ ] Delete posts
- [ ] Categories/tags management
- [ ] Post scheduling

