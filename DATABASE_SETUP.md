# Database Setup Guide

This guide will help you set up the PostgreSQL database for your personal brand website.

## Prerequisites

- Neon database integration connected (already configured in your v0 project)
- Access to run SQL scripts

## Database Schema Overview

The application uses the following tables:

### Core Tables

1. **users** - Admin user accounts for authentication
2. **profile** - Personal information displayed on the website
3. **experiences** - Work experience entries
4. **skills** - Technical skills organized by category
5. **projects** - Portfolio projects
6. **blogs** - Blog posts
7. **comments** - Blog post comments (with moderation)
8. **newsletter_subscribers** - Email newsletter subscribers

## Setup Instructions

### Step 1: Run Schema Migration

Execute the SQL script `scripts/01-initial-schema.sql` to create all tables and indexes.

**Option A: Using v0 (Recommended)**

The SQL script is already in your project. v0 can execute it directly:
1. The script file is located at `scripts/01-initial-schema.sql`
2. v0 will automatically run it when you start the project

**Option B: Using Neon Dashboard**

1. Go to your [Neon Console](https://console.neon.tech)
2. Select your project
3. Navigate to SQL Editor
4. Copy the contents of `scripts/01-initial-schema.sql`
5. Paste and execute

**Option C: Using PostgreSQL Client**

```bash
psql $DATABASE_URL -f scripts/01-initial-schema.sql
```

### Step 2: Seed Initial Data

Execute `scripts/02-seed-data.sql` to add sample data.

This script will create:
- Default admin user (email: luciens@alumni.cmu.edu, password: admin123)
- Sample profile information
- Example projects based on your CV
- Sample skills across different categories
- Example work experiences

**To run the seed script:**

Use the same method as Step 1 (v0, Neon Dashboard, or psql client).

### Step 3: Verify Database Setup

Check that all tables were created successfully:

```sql
-- List all tables
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public';

-- Check row counts
SELECT 'users' as table_name, COUNT(*) as count FROM users
UNION ALL
SELECT 'profile', COUNT(*) FROM profile
UNION ALL
SELECT 'experiences', COUNT(*) FROM experiences
UNION ALL
SELECT 'skills', COUNT(*) FROM skills
UNION ALL
SELECT 'projects', COUNT(*) FROM projects
UNION ALL
SELECT 'blogs', COUNT(*) FROM blogs
UNION ALL
SELECT 'comments', COUNT(*) FROM comments
UNION ALL
SELECT 'newsletter_subscribers', COUNT(*) FROM newsletter_subscribers;
```

Expected results:
- 8 tables created
- 1 user, 1 profile, multiple experiences, skills, and projects
- 0 blogs, comments, and subscribers (add these through the admin dashboard)

## Table Structures

### users
Stores admin user credentials for dashboard access.

```sql
- id: UUID (primary key)
- email: VARCHAR(255) (unique)
- password_hash: VARCHAR(255)
- full_name: VARCHAR(255)
- role: VARCHAR(50)
- created_at, updated_at: TIMESTAMP
```

### profile
Stores personal information displayed on the website.

```sql
- id: UUID (primary key)
- user_id: UUID (foreign key to users)
- title: VARCHAR(255)
- bio: TEXT
- avatar_url: TEXT
- github_url, linkedin_url, email, phone: VARCHAR
- location: VARCHAR(255)
- resume_url: TEXT
- created_at, updated_at: TIMESTAMP
```

### experiences
Work experience entries displayed on the homepage.

```sql
- id: UUID (primary key)
- company, position: VARCHAR(255)
- location: VARCHAR(255)
- start_date, end_date: DATE
- is_current: BOOLEAN
- description: TEXT
- technologies: TEXT[] (array)
- order_index: INTEGER
- created_at, updated_at: TIMESTAMP
```

### skills
Technical skills organized by category.

```sql
- id: UUID (primary key)
- category: VARCHAR(100)
- name: VARCHAR(100)
- proficiency: INTEGER (0-100)
- order_index: INTEGER
- created_at, updated_at: TIMESTAMP
```

### projects
Portfolio projects with images and links.

```sql
- id: UUID (primary key)
- title, description: VARCHAR/TEXT
- image_url, demo_url, github_url: TEXT/VARCHAR
- technologies: TEXT[] (array)
- featured: BOOLEAN
- order_index: INTEGER
- published: BOOLEAN
- created_at, updated_at: TIMESTAMP
```

### blogs
Blog posts with rich content.

```sql
- id: UUID (primary key)
- title, slug: VARCHAR(255)
- content: TEXT
- excerpt: TEXT
- cover_image_url: TEXT
- author_id: UUID (foreign key to users)
- published: BOOLEAN
- views: INTEGER
- reading_time: INTEGER (minutes)
- tags: TEXT[] (array)
- created_at, updated_at, published_at: TIMESTAMP
```

### comments
Blog post comments with moderation.

```sql
- id: UUID (primary key)
- blog_id: UUID (foreign key to blogs)
- author_name, author_email: VARCHAR(255)
- content: TEXT
- approved: BOOLEAN (for moderation)
- created_at: TIMESTAMP
```

### newsletter_subscribers
Email subscribers for newsletter.

```sql
- id: UUID (primary key)
- email: VARCHAR(255) (unique)
- subscribed: BOOLEAN
- verification_token: VARCHAR(255)
- verified: BOOLEAN
- subscribed_at, unsubscribed_at: TIMESTAMP
```

## Security Considerations

### Password Hashing
User passwords are hashed using bcrypt with 10 salt rounds. Never store plain text passwords.

### JWT Authentication
The application uses JWT tokens for admin authentication. Set a strong `JWT_SECRET` environment variable.

### Input Validation
All user inputs are validated and sanitized to prevent SQL injection and XSS attacks.

### Moderation
Comments are set to `approved = false` by default and require admin approval before appearing on the site.

## Common Operations

### Change Admin Password

```sql
-- First, generate a new hash using bcrypt (do this in your app or Node.js)
-- Then update:
UPDATE users 
SET password_hash = '<new-bcrypt-hash>'
WHERE email = 'luciens@alumni.cmu.edu';
```

### Add a New Blog Post

Use the admin dashboard at `/admin/blogs/new` or insert directly:

```sql
INSERT INTO blogs (title, slug, content, excerpt, published, author_id, tags, reading_time)
VALUES (
  'My First Blog Post',
  'my-first-blog-post',
  '<p>Content here...</p>',
  'This is an excerpt',
  true,
  (SELECT id FROM users WHERE email = 'luciens@alumni.cmu.edu'),
  ARRAY['Tech', 'Tutorial'],
  5
);
```

### Approve Comments

```sql
UPDATE comments 
SET approved = true 
WHERE id = '<comment-id>';
```

### Export Newsletter Subscribers

```sql
COPY (
  SELECT email, subscribed_at 
  FROM newsletter_subscribers 
  WHERE subscribed = true
) TO '/tmp/subscribers.csv' WITH CSV HEADER;
```

## Backup and Restore

### Create Backup

```bash
pg_dump $DATABASE_URL > backup.sql
```

### Restore from Backup

```bash
psql $DATABASE_URL < backup.sql
```

## Troubleshooting

### Connection Issues

If you can't connect to the database:
1. Check that `DATABASE_URL` environment variable is set
2. Verify your Neon project is active
3. Check IP allowlist settings in Neon dashboard

### Migration Errors

If tables already exist:
```sql
-- Drop all tables (WARNING: This deletes all data!)
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS blogs CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS skills CASCADE;
DROP TABLE IF EXISTS experiences CASCADE;
DROP TABLE IF EXISTS profile CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Then re-run the migration script
```

### Performance Issues

If queries are slow:
1. Check that indexes are created (automatically created by schema script)
2. Run `ANALYZE` to update statistics
3. Monitor slow queries in Neon dashboard

## Next Steps

After setting up the database:

1. **Log in to admin dashboard** at `/login`
2. **Update your profile** with your actual information
3. **Add your projects** through the admin panel
4. **Create your first blog post**
5. **Customize the content** to match your brand

## Support

If you encounter any issues:
- Check Neon status: [status.neon.tech](https://status.neon.tech)
- Review Neon documentation: [neon.tech/docs](https://neon.tech/docs)
- Contact support: luciens@alumni.cmu.edu
