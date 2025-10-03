-- PostgreSQL Migration Script

BEGIN;

-- 1. Create the Posts table
-- SERIAL is the PostgreSQL equivalent of INTEGER PRIMARY KEY AUTOINCREMENT
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title TEXT,
    slug TEXT UNIQUE,
    date TEXT,
    excerpt TEXT,
    content TEXT,
    tags TEXT,
    category TEXT, -- Will be dropped later after migration
    image TEXT,
    -- Placeholder for the new category_id column, added in the migration step
    category_id INTEGER
);

-- 2. Insert Test Data (Only keeping the first few records for speed)
-- Removed 'content' data for brevity.
INSERT INTO posts (title, slug, date, excerpt, tags, category, image) VALUES
('AI & ML Intro', 'ai-ml-intro', 'Sun Feb 02 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'High-level ML concepts for developers.', '["ai","ml"]', 'AI & Machine Learning', 'https://picsum.photos/seed/ai-ml-intro/800/400'),
('ML Tooling', 'ml-tooling', 'Sun Mar 02 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Tools and libraries to start with ML tasks.', '["ml","tools"]', 'AI & Machine Learning', 'https://picsum.photos/seed/ml-tooling/800/400'),
('APIs and RESTful Services', 'apis-and-restful-services', 'Wed Jul 09 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'A beginner''s guide to building and consuming RESTful APIs.', '[]', NULL, 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'),
('Architecture Guides', 'architecture-guides', 'Wed Mar 12 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Concise guides for common architectural decisions.', '["architecture","guides"]', 'Architecture & Patterns', 'https://picsum.photos/seed/architecture-guides/800/400'),
('Software Architecture Basics', 'architecture-basics', 'Sun Feb 16 2025 21:00:00 GMT-0300 (hora estándar de Argentina)', 'Intro to common architecture patterns.', '["architecture","patterns"]', 'Architecture & Patterns', 'https://picsum.photos/seed/architecture-basics/800/400');
-- All other INSERT statements were removed as requested to keep the script quick.

COMMIT;

---------------------------------------------------

-- Migration: Create categories table and link posts
BEGIN;

-- 3. Create categories table
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    slug TEXT UNIQUE
);

-- 4. Insert distinct categories from posts
-- ON CONFLICT DO NOTHING replaces SQLite's INSERT OR IGNORE
INSERT INTO categories (name, slug)
SELECT DISTINCT category,
       LOWER(REPLACE(TRIM(category), ' ', '-'))
FROM posts
WHERE category IS NOT NULL AND TRIM(category) != ''
ON CONFLICT DO NOTHING;

-- 5. Add a Foreign Key constraint to posts
-- We add the column first, as it was in the original script,
-- but then we add the foreign key constraint.

-- The category_id column was added in the initial CREATE TABLE,
-- but in a real-world migration, you'd add it here if it wasn't.
-- Example of adding it if it wasn't already there:
-- ALTER TABLE posts ADD COLUMN category_id INTEGER;

-- 6. Populate category_id by matching category name
UPDATE posts
SET category_id = categories.id
FROM categories
WHERE categories.name = posts.category
  AND posts.category IS NOT NULL;

-- 7. Add Foreign Key Constraint (Best practice in PostgreSQL)
ALTER TABLE posts
ADD CONSTRAINT fk_category
FOREIGN KEY (category_id)
REFERENCES categories(id);

-- 8. Optional index for faster lookups (already present in the original)
CREATE INDEX IF NOT EXISTS idx_posts_category_id ON posts(category_id);

-- 9. (Optional Cleanup) Drop the redundant category column
ALTER TABLE posts DROP COLUMN category;

COMMIT;