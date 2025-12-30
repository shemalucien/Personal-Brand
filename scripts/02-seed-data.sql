-- Seed initial admin user (password: admin123 - CHANGE THIS!)
INSERT INTO users (email, password_hash, full_name, role) 
VALUES (
  'luciens@alumni.cmu.edu',
  '$2a$10$rWvZvNhKvM8z4YKY7z4z4eZvZvZvZvZvZvZvZvZvZvZvZvZvZvZv', -- You'll need to hash this properly
  'Lucien Shema',
  'admin'
) ON CONFLICT (email) DO NOTHING;

-- Seed profile data
INSERT INTO profile (user_id, title, bio, github_url, linkedin_url, email, phone, location)
SELECT 
  id,
  'Full Stack Developer & ML Engineer',
  'Passionate about leveraging technology to solve real-world problems. Specializing in machine learning, geospatial AI, and IoT solutions.',
  'https://github.com/shemalucien',
  'https://www.linkedin.com/in/shemalucien',
  'luciens@alumni.cmu.edu',
  '+250 788 851 398',
  'Kigali, Rwanda'
FROM users WHERE email = 'luciens@alumni.cmu.edu'
ON CONFLICT DO NOTHING;

-- Seed experiences
INSERT INTO experiences (company, position, location, start_date, end_date, is_current, description, technologies, order_index)
VALUES
  ('TechnoServe', 'Full Stack Developer', 'Kigali, Rwanda', '2024-01-01', NULL, TRUE, 
   'Leading development of agricultural technology solutions including TerraTrac and CafeTrac apps for EUDR compliance.',
   ARRAY['Kotlin', 'Android', 'Next.js', 'React', 'Django', 'PostgreSQL'], 1),
  ('Carnegie Mellon University Africa', 'Research Assistant', 'Kigali, Rwanda', '2022-08-01', '2023-12-01', FALSE,
   'Developed ML models for agricultural applications and conducted research in computer vision.',
   ARRAY['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'], 2),
  ('TechnoServe', 'Software Engineer', 'Kigali, Rwanda', '2020-01-01', '2022-07-01', FALSE,
   'Built mobile and web applications for agricultural impact projects.',
   ARRAY['Flutter', 'React', 'Node.js', 'MongoDB'], 3)
ON CONFLICT DO NOTHING;

-- Seed skills
INSERT INTO skills (category, name, proficiency, order_index)
VALUES
  ('Programming Languages', 'Python', 95, 1),
  ('Programming Languages', 'JavaScript/TypeScript', 90, 2),
  ('Programming Languages', 'Kotlin', 85, 3),
  ('Programming Languages', 'Java', 80, 4),
  ('Web Development', 'React', 90, 1),
  ('Web Development', 'Next.js', 90, 2),
  ('Web Development', 'Node.js', 85, 3),
  ('Web Development', 'Django', 85, 4),
  ('Mobile Development', 'Android', 90, 1),
  ('Mobile Development', 'Flutter', 85, 2),
  ('Machine Learning', 'TensorFlow', 85, 1),
  ('Machine Learning', 'PyTorch', 85, 2),
  ('Machine Learning', 'Computer Vision', 80, 3),
  ('Database', 'PostgreSQL', 85, 1),
  ('Database', 'MongoDB', 80, 2),
  ('DevOps', 'Docker', 75, 1),
  ('DevOps', 'Git', 90, 2)
ON CONFLICT DO NOTHING;

-- Seed projects (using existing project data)
INSERT INTO projects (title, description, technologies, demo_url, featured, order_index, published)
VALUES
  ('TerraTrac', 'Open-source Android app designed for buyers to list farms in compliance with EUDR. Globally available on the Google Play Store.',
   ARRAY['Kotlin', 'Android', 'GPS', 'Open Source'], 'https://play.google.com/store/apps/details?id=org.technoserve.cafetrac', TRUE, 1, TRUE),
  ('CafeTrac', 'Android application for coffee cherry buyers facilitating farm listing and management in compliance with EUDR.',
   ARRAY['Kotlin', 'Android', 'Farm Mapping', 'Offline-First'], 'https://play.google.com/store/apps/details?id=org.technoserve.cafetrac', TRUE, 2, TRUE),
  ('TerraTrac Validation Portal', 'Web application enabling suppliers to validate farm information against a global database of deforestation zones.',
   ARRAY['Next.js', 'React', 'RESTful APIs', 'Geospatial Data'], 'https://terratrac.org', TRUE, 3, TRUE),
  ('Caju Dashboard', 'Satellite imagery platform for monitoring cashew crop health and performance using machine learning.',
   ARRAY['Google Earth Engine', 'Machine Learning', 'Satellite Imagery', 'Django'], NULL, TRUE, 4, TRUE),
  ('Farmer Agrochemical Advisory Tool', 'WhatsApp-based chatbot enabling farmers to identify agricultural chemicals by sending photos.',
   ARRAY['Twilio API', 'WhatsApp API', 'OCR', 'Python'], NULL, FALSE, 5, TRUE),
  ('Coffee Bean Defects Analyzer', 'ML model to detect and classify coffee bean defects through image analysis.',
   ARRAY['TensorFlow', 'Computer Vision', 'Image Classification'], NULL, FALSE, 6, TRUE),
  ('ModAnalytic', 'IoT-based logistics monitoring system with GPS, cameras, sensors, and ML for real-time vehicle tracking.',
   ARRAY['IoT', 'GPS Tracking', 'Machine Learning'], NULL, FALSE, 7, TRUE),
  ('Aqua Site ML Model', 'Scalable ML model to detect and map aquaculture pond locations from satellite imagery.',
   ARRAY['PyTorch', 'Satellite Imagery', 'Object Detection'], NULL, FALSE, 8, TRUE),
  ('Chat Analysis App', 'Mobile app using LLaMA 3.1 to help business advisors analyze WhatsApp chats.',
   ARRAY['Flutter', 'LLaMA 3.1', 'NLP', 'Sentiment Analysis'], NULL, FALSE, 9, TRUE),
  ('Switch Off Drinks', 'E-commerce website for a beverage vendor with online ordering and appointment scheduling.',
   ARRAY['Next.js', 'E-commerce', 'React'], 'https://switchoffdrinks.com', FALSE, 10, TRUE)
ON CONFLICT DO NOTHING;
