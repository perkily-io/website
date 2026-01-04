# Environment Variables Setup

## Quick Start

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Supabase credentials from your project dashboard:
   - Go to https://app.supabase.com/project/_/settings/api
   - Copy your Project URL and anon/public key

3. Update `.env` with your values:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```
   
   **Note**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in client code via `import.meta.env`.

## Required Variables

### Supabase (Required)
- `VITE_SUPABASE_URL` - https://oqwfrvjkhrsdsnifyyfd.supabase.co
- `VITE_SUPABASE_ANON_KEY` - sb_publishable_cBZAB0q4FSC0CylhRYI3-g_SiRmBk6t

**Important**: This project uses Vite, which requires the `VITE_` prefix for environment variables exposed to the client.

### Optional
- `SUPABASE_SERVICE_ROLE_KEY` - For admin operations (server-side only, never expose to client)
- `NODE_ENV` - Set to `production` for production builds

## Security Notes

⚠️ **Never commit `.env` to version control!**

- `.env` is already in `.gitignore`
- Only commit `.env.example` as a template
- Use environment variables in your deployment platform (Vercel, Netlify, etc.)

## Getting Your Supabase Keys

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **API**
3. Find:
   - **Project URL** → Use for `VITE_SUPABASE_URL`
   - **anon public** key → Use for `VITE_SUPABASE_ANON_KEY`
   - **service_role** key → Use for `SUPABASE_SERVICE_ROLE_KEY` (optional, server-side only)

## Vite Environment Variables

This project uses **Vite** as the build tool. In Vite:

- Environment variables must be prefixed with `VITE_` to be exposed to client code
- Access them via `import.meta.env.VITE_VARIABLE_NAME` (not `process.env`)
- Variables without `VITE_` prefix are only available in server-side code
- After changing `.env`, restart your dev server (`npm run dev`)

