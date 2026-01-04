-- Create partner_applications table
CREATE TABLE IF NOT EXISTS partner_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  website TEXT,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  partnership_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'rejected', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_partner_applications_status ON partner_applications(status);
CREATE INDEX IF NOT EXISTS idx_partner_applications_created_at ON partner_applications(created_at DESC);

-- Enable RLS (Row Level Security)
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (submit applications)
CREATE POLICY "Anyone can submit partner applications"
  ON partner_applications
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can read (admin access)
CREATE POLICY "Authenticated users can read partner applications"
  ON partner_applications
  FOR SELECT
  USING (true);  -- Adjust based on your auth setup

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_partner_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_partner_applications_updated_at
  BEFORE UPDATE ON partner_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_partner_updated_at_column();

