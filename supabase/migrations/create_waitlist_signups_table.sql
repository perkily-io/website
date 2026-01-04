-- Create waitlist_signups table (for early access, beta, etc.)
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT, -- e.g., 'clinician', 'patient', 'practice_admin'
  source TEXT, -- Where they signed up from
  invited BOOLEAN DEFAULT false,
  invited_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_email ON waitlist_signups(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_invited ON waitlist_signups(invited);
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_created_at ON waitlist_signups(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (join waitlist)
CREATE POLICY "Anyone can join waitlist"
  ON waitlist_signups
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can read (admin access)
CREATE POLICY "Authenticated users can read waitlist"
  ON waitlist_signups
  FOR SELECT
  USING (true);  -- Adjust based on your auth setup

