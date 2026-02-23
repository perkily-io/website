-- Add phone/contact number column to contact_submissions
ALTER TABLE contact_submissions
ADD COLUMN IF NOT EXISTS phone TEXT;
