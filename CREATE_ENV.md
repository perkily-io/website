# Create Your .env File

## Quick Setup

Create a `.env` file in the root of your project with the following content:

```env
VITE_SUPABASE_URL=https://oqwfrvjkhrsdsnifyyfd.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_cBZAB0q4FSC0CylhRYI3-g_SiRmBk6t
```

## Steps

1. **Create the file** in your project root:
   ```bash
   touch .env
   ```

2. **Add the variables** (copy the block above into the file)

3. **Restart your dev server**:
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

## Important Notes

- The `.env` file is in `.gitignore` and won't be committed to git
- After creating/updating `.env`, you **must restart** your dev server
- In Vite, only variables prefixed with `VITE_` are exposed to client code
- The code currently uses fallback values, but creating `.env` is recommended

## Verify It's Working

After creating `.env` and restarting, you should:
- Not see the warning in the console
- See Supabase features working (contact form, blog, etc.)

