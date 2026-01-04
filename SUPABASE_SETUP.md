# Supabase Integration Setup

## Overview
This website uses Supabase for data storage and management. Multiple tables are set up to handle various data collection needs.

## Database Tables

### 1. `blog_posts`
Stores blog posts with draft/published status.
- **Migration**: `supabase/migrations/create_blog_posts_table.sql`
- **Usage**: Blog publishing system
- **Access**: Public read for published posts, admin write

### 2. `contact_submissions`
Stores contact form submissions.
- **Migration**: `supabase/migrations/create_contact_submissions_table.sql`
- **Usage**: Contact page form submissions
- **Access**: Public insert, admin read

### 3. `partner_applications`
Stores partner application submissions.
- **Migration**: `supabase/migrations/create_partner_applications_table.sql`
- **Usage**: Partners page form submissions
- **Access**: Public insert, admin read

### 4. `newsletter_signups`
Stores newsletter email signups.
- **Migration**: `supabase/migrations/create_newsletter_signups_table.sql`
- **Usage**: Newsletter subscription management
- **Access**: Public insert, admin read

### 5. `waitlist_signups`
Stores waitlist/early access signups.
- **Migration**: `supabase/migrations/create_waitlist_signups_table.sql`
- **Usage**: Early access, beta program signups
- **Access**: Public insert, admin read

## Setup Instructions

### 1. Run All Migrations

You can run all migrations in your Supabase SQL Editor:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run each migration file in order:
   - `create_blog_posts_table.sql`
   - `create_contact_submissions_table.sql`
   - `create_partner_applications_table.sql`
   - `create_newsletter_signups_table.sql`
   - `create_waitlist_signups_table.sql`

Or run them all at once by copying all SQL into one query.

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Then update:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

**Note**: This project uses Vite, so environment variables must be prefixed with `VITE_` and are accessed via `import.meta.env`, not `process.env`.

### 3. Adjust RLS Policies (Optional)

The migrations create permissive policies for development. For production, you may want to:

1. Go to **Authentication > Policies** in Supabase dashboard
2. Review and adjust policies based on your authentication setup
3. Consider adding:
   - Service role key for admin operations
   - User authentication for admin access
   - Rate limiting for public inserts

## Features by Table

### Contact Submissions
- Tracks user type (patient, professional, company)
- Status tracking (new, read, replied, archived)
- Automatic timestamps

### Partner Applications
- Company and contact information
- Partnership type tracking
- Status workflow (pending → reviewed → approved/rejected)

### Newsletter Signups
- Email uniqueness enforcement
- Source tracking
- Unsubscribe capability

### Waitlist Signups
- Role-based signups
- Invitation tracking
- Source attribution

## Admin Access

Currently, all tables allow authenticated users to read data. To set up proper admin access:

1. **Option A**: Use service role key in a backend API
2. **Option B**: Set up Supabase Auth and restrict policies
3. **Option C**: Create a simple admin dashboard with password protection (like blog admin)

## Data Management

### Viewing Submissions
You can view all submissions in Supabase dashboard:
- Go to **Table Editor**
- Select the table you want to view
- Filter and sort as needed

### Exporting Data
- Use Supabase dashboard export feature
- Or query via SQL Editor
- Or use Supabase API in your admin tools

## Future Enhancements

- [ ] Admin dashboard for managing submissions
- [ ] Email notifications on new submissions
- [ ] Automated responses
- [ ] Analytics and reporting
- [ ] Integration with email service (SendGrid, Mailgun, etc.)

