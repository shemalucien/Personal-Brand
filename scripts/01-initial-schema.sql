-- -- Enable UUID extension
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- -- Create users table for authentication
-- CREATE TABLE IF NOT EXISTS users (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   email VARCHAR(255) UNIQUE NOT NULL,
--   password_hash VARCHAR(255) NOT NULL,
--   full_name VARCHAR(255) NOT NULL,
--   role VARCHAR(50) DEFAULT 'admin',
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create profile table
-- CREATE TABLE IF NOT EXISTS profile (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   user_id UUID REFERENCES users(id) ON DELETE CASCADE,
--   title VARCHAR(255),
--   bio TEXT,
--   avatar_url TEXT,
--   github_url VARCHAR(255),
--   linkedin_url VARCHAR(255),
--   email VARCHAR(255),
--   phone VARCHAR(50),
--   location VARCHAR(255),
--   resume_url TEXT,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create experiences table
-- CREATE TABLE IF NOT EXISTS experiences (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   company VARCHAR(255) NOT NULL,
--   position VARCHAR(255) NOT NULL,
--   location VARCHAR(255),
--   start_date DATE NOT NULL,
--   end_date DATE,
--   is_current BOOLEAN DEFAULT FALSE,
--   description TEXT,
--   technologies TEXT[], -- Array of technologies used
--   order_index INTEGER DEFAULT 0,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create skills table
-- CREATE TABLE IF NOT EXISTS skills (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   category VARCHAR(100) NOT NULL,
--   name VARCHAR(100) NOT NULL,
--   proficiency INTEGER DEFAULT 0, -- 0-100
--   order_index INTEGER DEFAULT 0,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create projects table
-- CREATE TABLE IF NOT EXISTS projects (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   title VARCHAR(255) NOT NULL,
--   description TEXT NOT NULL,
--   image_url TEXT,
--   demo_url VARCHAR(500),
--   github_url VARCHAR(500),
--   technologies TEXT[], -- Array of technologies
--   featured BOOLEAN DEFAULT FALSE,
--   order_index INTEGER DEFAULT 0,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   published BOOLEAN DEFAULT TRUE
-- );

-- -- Create blogs table
-- CREATE TABLE IF NOT EXISTS blogs (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   title VARCHAR(255) NOT NULL,
--   slug VARCHAR(255) UNIQUE NOT NULL,
--   content TEXT NOT NULL,
--   excerpt TEXT,
--   cover_image_url TEXT,
--   author_id UUID REFERENCES users(id) ON DELETE SET NULL,
--   published BOOLEAN DEFAULT FALSE,
--   views INTEGER DEFAULT 0,
--   reading_time INTEGER, -- in minutes
--   tags TEXT[],
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   published_at TIMESTAMP
-- );

-- -- Create comments table
-- CREATE TABLE IF NOT EXISTS comments (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
--   author_name VARCHAR(255) NOT NULL,
--   author_email VARCHAR(255) NOT NULL,
--   content TEXT NOT NULL,
--   approved BOOLEAN DEFAULT FALSE,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create newsletter_subscribers table
-- CREATE TABLE IF NOT EXISTS newsletter_subscribers (
--    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
--   email VARCHAR(255) UNIQUE NOT NULL,
--   subscribed BOOLEAN DEFAULT TRUE,
--   verification_token VARCHAR(255),
--   verified BOOLEAN DEFAULT FALSE,
--   subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   unsubscribed_at TIMESTAMP
-- );

-- -- Create indexes for better performance
-- CREATE INDEX IF NOT EXISTS idx_experiences_dates ON experiences(start_date DESC, end_date DESC);
-- CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured, order_index);
-- CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published, published_at DESC);
-- CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
-- CREATE INDEX IF NOT EXISTS idx_comments_blog ON comments(blog_id, created_at DESC);
-- CREATE INDEX IF NOT EXISTS idx_comments_approved ON comments(approved);
-- CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);


-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table for authentication
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create profile table
CREATE TABLE IF NOT EXISTS profile (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  bio TEXT,
  avatar_url TEXT,
  github_url VARCHAR(255),
  linkedin_url VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(50),
  location VARCHAR(255),
  resume_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  start_date DATE NOT NULL,
  end_date DATE,
  is_current BOOLEAN DEFAULT FALSE,
  description TEXT,
  technologies TEXT[], -- Array of technologies used
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create education table
CREATE TABLE IF NOT EXISTS education (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  institution VARCHAR(255) NOT NULL,
  degree VARCHAR(255) NOT NULL,
  field_of_study VARCHAR(255),
  location VARCHAR(255),
  start_date DATE NOT NULL,
  end_date DATE,
  is_current BOOLEAN DEFAULT FALSE,
  description TEXT,
  grade VARCHAR(100), -- e.g., "With Honor", "GPA: 3.8/4.0"
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  proficiency INTEGER DEFAULT 0, -- 0-100
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  demo_url VARCHAR(500),
  github_url VARCHAR(500),
  technologies TEXT[], -- Array of technologies
  category VARCHAR(100), -- Project category (e.g., 'AgriTech', 'Machine Learning', 'Web Development')
  featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published BOOLEAN DEFAULT TRUE
);

-- Create blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  cover_image_url TEXT,
  author_id UUID REFERENCES users(id) ON DELETE SET NULL,
  published BOOLEAN DEFAULT FALSE,
  views INTEGER DEFAULT 0,
  reading_time INTEGER, -- in minutes
  tags TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
  author_name VARCHAR(255) NOT NULL,
  author_email VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT TRUE,
  verification_token VARCHAR(255),
  verified BOOLEAN DEFAULT FALSE,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_experiences_dates ON experiences(start_date DESC, end_date DESC);
CREATE INDEX IF NOT EXISTS idx_education_dates ON education(start_date DESC, end_date DESC);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category, order_index);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured, order_index);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON blogs(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON blogs(slug);
CREATE INDEX IF NOT EXISTS idx_comments_blog ON comments(blog_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_comments_approved ON comments(approved);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);