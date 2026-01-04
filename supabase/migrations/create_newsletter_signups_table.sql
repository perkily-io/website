-- Create newsletter_signups table
CREATE TABLE IF NOT EXISTS newsletter_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT, -- Where they signed up from (e.g., 'homepage', 'blog', 'contact')
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_signups_email ON newsletter_signups(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_signups_subscribed ON newsletter_signups(subscribed);

-- Enable RLS (Row Level Security)
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (sign up)
CREATE POLICY "Anyone can sign up for newsletter"
  ON newsletter_signups
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can read (admin access)
CREATE POLICY "Authenticated users can read newsletter signups"
  ON newsletter_signups
  FOR SELECT
  USING (true);  -- Adjust based on your auth setup

