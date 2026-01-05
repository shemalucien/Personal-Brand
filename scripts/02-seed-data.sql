-- Seed initial admin user (password: admin123 - CHANGE THIS!)
INSERT INTO users (email, password_hash, full_name, role) 
VALUES (
  'luciens@alumni.cmu.edu',
  '$2b$10$L5w.HLGmLzFvipYf5u.hp.iaDeLiIOA5wg1FR5GL1f44F4Iyvj3D.', -- You'll need to hash this properly
  'Lucien Shema',
  'admin'
) ON CONFLICT (email) DO NOTHING;

-- -- Seed profile data
-- INSERT INTO profile (user_id, title, bio, github_url, linkedin_url, email, phone, location)
-- SELECT 
--   id,
--   'Full Stack Developer & ML Engineer',
--   'Passionate about leveraging technology to solve real-world problems. Specializing in machine learning, geospatial AI, and IoT solutions.',
--   'https://github.com/shemalucien',
--   'https://www.linkedin.com/in/shemalucien',
--   'luciens@alumni.cmu.edu',
--   '+250 788 851 398',
--   'Kigali, Rwanda'
-- FROM users WHERE email = 'luciens@alumni.cmu.edu'
-- ON CONFLICT DO NOTHING;

-- -- Seed experiences
-- INSERT INTO experiences (company, position, location, start_date, end_date, is_current, description, technologies, order_index)
-- VALUES
--   ('TechnoServe', 'Full Stack Developer', 'Kigali, Rwanda', '2024-01-01', NULL, TRUE, 
--    'Leading development of agricultural technology solutions including TerraTrac and CafeTrac apps for EUDR compliance.',
--    ARRAY['Kotlin', 'Android', 'Next.js', 'React', 'Django', 'PostgreSQL'], 1),
--   ('Carnegie Mellon University Africa', 'Research Assistant', 'Kigali, Rwanda', '2022-08-01', '2023-12-01', FALSE,
--    'Developed ML models for agricultural applications and conducted research in computer vision.',
--    ARRAY['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'], 2),
--   ('TechnoServe', 'Software Engineer', 'Kigali, Rwanda', '2020-01-01', '2022-07-01', FALSE,
--    'Built mobile and web applications for agricultural impact projects.',
--    ARRAY['Flutter', 'React', 'Node.js', 'MongoDB'], 3)
-- ON CONFLICT DO NOTHING;

-- -- Seed skills
-- INSERT INTO skills (category, name, proficiency, order_index)
-- VALUES
--   ('Programming Languages', 'Python', 95, 1),
--   ('Programming Languages', 'JavaScript/TypeScript', 90, 2),
--   ('Programming Languages', 'Kotlin', 85, 3),
--   ('Programming Languages', 'Java', 80, 4),
--   ('Web Development', 'React', 90, 1),
--   ('Web Development', 'Next.js', 90, 2),
--   ('Web Development', 'Node.js', 85, 3),
--   ('Web Development', 'Django', 85, 4),
--   ('Mobile Development', 'Android', 90, 1),
--   ('Mobile Development', 'Flutter', 85, 2),
--   ('Machine Learning', 'TensorFlow', 85, 1),
--   ('Machine Learning', 'PyTorch', 85, 2),
--   ('Machine Learning', 'Computer Vision', 80, 3),
--   ('Database', 'PostgreSQL', 85, 1),
--   ('Database', 'MongoDB', 80, 2),
--   ('DevOps', 'Docker', 75, 1),
--   ('DevOps', 'Git', 90, 2)
-- ON CONFLICT DO NOTHING;

-- -- Seed projects (using existing project data)
-- INSERT INTO projects (title, description, technologies, demo_url, featured, order_index, published)
-- VALUES
--   ('TerraTrac', 'Open-source Android app designed for buyers to list farms in compliance with EUDR. Globally available on the Google Play Store.',
--    ARRAY['Kotlin', 'Android', 'GPS', 'Open Source'], 'https://play.google.com/store/apps/details?id=org.technoserve.cafetrac', TRUE, 1, TRUE),
--   ('CafeTrac', 'Android application for coffee cherry buyers facilitating farm listing and management in compliance with EUDR.',
--    ARRAY['Kotlin', 'Android', 'Farm Mapping', 'Offline-First'], 'https://play.google.com/store/apps/details?id=org.technoserve.cafetrac', TRUE, 2, TRUE),
--   ('TerraTrac Validation Portal', 'Web application enabling suppliers to validate farm information against a global database of deforestation zones.',
--    ARRAY['Next.js', 'React', 'RESTful APIs', 'Geospatial Data'], 'https://terratrac.org', TRUE, 3, TRUE),
--   ('Caju Dashboard', 'Satellite imagery platform for monitoring cashew crop health and performance using machine learning.',
--    ARRAY['Google Earth Engine', 'Machine Learning', 'Satellite Imagery', 'Django'], NULL, TRUE, 4, TRUE),
--   ('Farmer Agrochemical Advisory Tool', 'WhatsApp-based chatbot enabling farmers to identify agricultural chemicals by sending photos.',
--    ARRAY['Twilio API', 'WhatsApp API', 'OCR', 'Python'], NULL, FALSE, 5, TRUE),
--   ('Coffee Bean Defects Analyzer', 'ML model to detect and classify coffee bean defects through image analysis.',
--    ARRAY['TensorFlow', 'Computer Vision', 'Image Classification'], NULL, FALSE, 6, TRUE),
--   ('ModAnalytic', 'IoT-based logistics monitoring system with GPS, cameras, sensors, and ML for real-time vehicle tracking.',
--    ARRAY['IoT', 'GPS Tracking', 'Machine Learning'], NULL, FALSE, 7, TRUE),
--   ('Aqua Site ML Model', 'Scalable ML model to detect and map aquaculture pond locations from satellite imagery.',
--    ARRAY['PyTorch', 'Satellite Imagery', 'Object Detection'], NULL, FALSE, 8, TRUE),
--   ('Chat Analysis App', 'Mobile app using LLaMA 3.1 to help business advisors analyze WhatsApp chats.',
--    ARRAY['Flutter', 'LLaMA 3.1', 'NLP', 'Sentiment Analysis'], NULL, FALSE, 9, TRUE),
--   ('Switch Off Drinks', 'E-commerce website for a beverage vendor with online ordering and appointment scheduling.',
--    ARRAY['Next.js', 'E-commerce', 'React'], 'https://switchoffdrinks.com', FALSE, 10, TRUE)
-- ON CONFLICT DO NOTHING;


-- Seed profile data
INSERT INTO profile (user_id, title, bio, github_url, linkedin_url, email, phone, location)
SELECT 
  id,
  'Full Stack Developer',
  'Full Stack Developer with a Master of Science in Information Technology from Carnegie Mellon University. Proven experience in developing mobile and web applications, implementing machine learning models for data analysis, and designing IoT-based solutions. Expertise in geospatial data analysis, cloud deployment, and continuous integration/continuous delivery (CI/CD). Passionate about leveraging technology to solve real-world problems and drive innovation.',
  'https://github.com/shemalucien',
  'https://www.linkedin.com/in/shemalucien',
  'luciens@alumni.cmu.edu',
  '+250 788 392 932',
  'Kigali, Rwanda'
FROM users WHERE email = 'luciens@alumni.cmu.edu'
ON CONFLICT DO NOTHING;

-- Seed experiences
INSERT INTO experiences (company, position, location, start_date, end_date, is_current, description, technologies, order_index)
VALUES
  ('TechnoServe', 'Machine Learning & Full Stack Developer', 'Kigali, Rwanda', '2024-06-01', NULL, TRUE, 
   'Developed mobile and web applications for traceability, deforestation-free practices, and business activity monitoring. Lead the completion of the traceability/EUDR mobile application. Contributed to the Cherie app for coffee cherry quality prediction using ML. Built apps for mango pest monitoring, aquaculture pond detection, and multiple coffee industry tools including Coffee Economic App, CPQI, and CoopTrac.',
   ARRAY['Kotlin', 'Android', 'Next.js', 'React', 'Django', 'Python', 'Machine Learning', 'TensorFlow', 'Google Earth Engine', 'PostgreSQL'], 1),
  
  ('Carnegie Mellon University Africa', 'Graduate Teaching Assistant', 'Kigali, Rwanda', '2023-09-01', '2024-05-01', FALSE,
   'Assisted in laboratory activities for technical courses. Monitored and supervised students progress in technical experiments and projects. Supervised and guided student group projects and assisted students in making informed choices for project approaches.',
   ARRAY['Teaching', 'Technical Supervision', 'Project Guidance'], 2),
  
  ('Defence Research Development - Ministry of Defence', 'Software Developer', 'Kigali, Rwanda', '2023-09-01', '2023-12-01', FALSE,
   'Designed and developed an IoT-based logistics monitoring system for real-time vehicle tracking. Integrated GPS, camera, GSM, and Wi-Fi modules and various sensors to gather and analyze data. Implemented machine learning models to process data and generate proactive recommendations. Created a user-friendly web dashboard for real-time insights and analytics.',
   ARRAY['IoT', 'GPS Integration', 'GSM', 'Wi-Fi', 'Machine Learning', 'Python', 'JavaScript'], 3),
  
  ('CyLab-Africa/Upanzi Network', 'Software Developer Intern', 'Kigali, Rwanda', '2023-05-01', '2023-08-01', FALSE,
   'Developed an open-source OpenCRVS Stack Health & Performance web application using NextJS with seamless API integrations. Designed and implemented a user-friendly companion application to assist OpenCRVS IT staff. Developed functionality to display crucial server and application metrics. Implemented a client request latency monitoring system.',
   ARRAY['Next.js', 'React', 'API Integration', 'Performance Monitoring'], 4),
  
  ('TechnoServe', 'Software Developer Intern', 'Kigali, Rwanda', '2023-05-01', '2023-08-01', FALSE,
   'Developed and refined the Cashew Satellite Dashboard using Django, addressing user feedback and resolving bugs. Completed a visualization dashboard for satellite imagery using machine learning cashew predictions and implemented access controls. Deployed the dashboard to AWS for enhanced accessibility and scalability.',
   ARRAY['Django', 'Python', 'Machine Learning', 'AWS', 'Google Earth Engine', 'Satellite Imagery'], 5)
ON CONFLICT DO NOTHING;

-- Seed education
INSERT INTO education (institution, degree, field_of_study, location, start_date, end_date, description, order_index)
VALUES
  ('Carnegie Mellon University', 'Master of Science', 'Information Technology', 'Kigali, Rwanda', '2022-07-01', '2024-05-01',
   'Advanced studies in software engineering, machine learning, and information systems.',
   1),
  ('University of Rwanda', 'Bachelor of Science with Honor', 'Computer and Software Engineering', 'Kigali, Rwanda', '2017-11-01', '2021-12-01',
   'Graduated with honors, focusing on software development and computer systems.',
   2)
ON CONFLICT DO NOTHING;

-- Seed skills
INSERT INTO skills (category, name, proficiency, order_index)
VALUES
  -- Programming Languages
  ('Programming Languages', 'Python', 95, 1),
  ('Programming Languages', 'JavaScript', 90, 2),
  ('Programming Languages', 'TypeScript', 90, 3),
  ('Programming Languages', 'Kotlin', 90, 4),
  ('Programming Languages', 'Dart', 80, 5),
  
  -- Web Development
  ('Web Development', 'React.js', 90, 1),
  ('Web Development', 'Next.js', 90, 2),
  ('Web Development', 'Node.js', 85, 3),
  ('Web Development', 'Django', 85, 4),
  ('Web Development', 'HTML5', 95, 5),
  ('Web Development', 'CSS3', 90, 6),
  ('Web Development', 'Tailwind CSS', 90, 7),
  ('Web Development', 'RESTful APIs', 90, 8),
  
  -- Mobile Development
  ('Mobile Development', 'Android (Kotlin)', 90, 1),
  ('Mobile Development', 'Flutter (Dart)', 85, 2),
  ('Mobile Development', 'Cross-Platform Development', 85, 3),
  
  -- Database
  ('Database', 'PostgreSQL', 85, 1),
  ('Database', 'MongoDB', 85, 2),
  ('Database', 'MySQL', 80, 3),
  ('Database', 'Firebase', 80, 4),
  ('Database', 'SQLite', 85, 5),
  ('Database', 'Room Persistence Library', 85, 6),
  
  -- Cloud & DevOps
  ('Cloud & DevOps', 'Google Cloud Platform', 85, 1),
  ('Cloud & DevOps', 'Amazon Web Services', 80, 2),
  ('Cloud & DevOps', 'Docker', 80, 3),
  ('Cloud & DevOps', 'Kubernetes', 75, 4),
  ('Cloud & DevOps', 'GitHub Actions', 85, 5),
  ('Cloud & DevOps', 'Git', 95, 6),
  
  -- Machine Learning & AI
  ('Machine Learning', 'TensorFlow', 85, 1),
  ('Machine Learning', 'PyTorch', 85, 2),
  ('Machine Learning', 'Vertex AI', 80, 3),
  ('Machine Learning', 'Computer Vision', 85, 4),
  ('Machine Learning', 'Image Classification', 85, 5),
  ('Machine Learning', 'Object Detection', 85, 6),
  ('Machine Learning', 'NLP', 80, 7),
  ('Machine Learning', 'LLaMA 3.1', 75, 8),
  
  -- Geospatial AI
  ('Geospatial AI', 'Google Earth Engine', 85, 1),
  ('Geospatial AI', 'Satellite Data Analysis', 85, 2),
  ('Geospatial AI', 'Remote Sensing', 85, 3),
  ('Geospatial AI', 'GIS Data Modeling', 80, 4),
  ('Geospatial AI', 'QGIS', 75, 5),
  
  -- IoT & Embedded Systems
  ('IoT', 'GPS Integration', 85, 1),
  ('IoT', 'GSM Integration', 80, 2),
  ('IoT', 'Wi-Fi Integration', 80, 3),
  ('IoT', 'Sensor Data Analysis', 85, 4),
  
  -- Messaging & Bots
  ('Messaging', 'WhatsApp API', 85, 1),
  ('Messaging', 'Twilio API', 85, 2),
  ('Messaging', 'Chatbot Development', 85, 3),
  
  -- Other
  ('Design', 'Figma', 75, 1),
  ('Security', 'Penetration Testing', 70, 1),
  ('Security', 'Network Security', 70, 2)
ON CONFLICT DO NOTHING;

-- Seed projects
INSERT INTO projects (title, description, technologies, demo_url, github_url, featured, order_index, published, category)
VALUES
  -- Featured TechnoServe AgriTech Projects
  ('TerraTrac Ecosystem', 'Comprehensive EUDR compliance platform comprising an open-source Android app for farm mapping and a web validation portal. TerraTrac enables buyers to register farms with GPS polygon mapping while the validation portal cross-references against global deforestation databases. Used by agricultural suppliers across multiple countries for sustainability compliance.',
   ARRAY['Kotlin', 'Android', 'Next.js', 'React', 'GPS Integration', 'EUDR Compliance', 'Geospatial Processing', 'Open Source'], 
   'https://play.google.com/store/apps/details?id=org.technoserve.terratrac', 'https://testterratrac.tnslabs.org/', TRUE, 1, TRUE, 'AgriTech'),
  
  ('CafeTrac - Coffee Traceability Suite', 'End-to-end coffee traceability solution combining farm management, transaction tracking, and quality control. Features offline-first architecture, polygon farm mapping, collector management, and supports both direct farmer purchases and intermediary transactions. Enables complete supply chain transparency from cherry collection to export.',
   ARRAY['Kotlin', 'Android', 'EUDR Compliance', 'Offline-First', 'Transaction Management', 'Polygon Mapping', 'CSV/GeoJSON Export'], 
   'https://play.google.com/store/apps/details?id=org.technoserve.cafetrac', NULL, TRUE, 2, TRUE, 'AgriTech'),
  
  ('Coffee Value Chain Management Tools', 'Suite of three Android applications for coffee industry optimization: (1) Coffee Economic App - Financial management tool for cost tracking, profit analysis, and margin calculation; (2) CPQI - Daily processing audits with automated quality scoring; (3) CoopTrac - Cooperative health evaluation with multi-survey management and performance analytics.',
   ARRAY['Kotlin', 'Android', 'Financial Modeling', 'Quality Management', 'Survey Systems', 'Data Analytics', 'SQLite', 'Room Database'], 
   'https://play.google.com/store/apps/details?id=org.technoserve.coffeeeconomic', NULL, TRUE, 3, TRUE, 'AgriTech'),
  
  -- Machine Learning & AI Projects
  ('Agricultural ML Models Suite', 'Collection of production-grade machine learning models for agriculture: Coffee Bean Defect Detection (classifies broken beans, insect damage, discoloration), Aquaculture Pond Mapping (satellite-based pond detection for sustainable farming), and Coffee Cherry Quality Prediction (ripeness classification using computer vision). Models integrated into mobile apps for real-time field use.',
   ARRAY['TensorFlow', 'PyTorch', 'Computer Vision', 'Object Detection', 'Satellite Imagery', 'Google Earth Engine', 'Mobile ML'], 
   NULL, NULL, TRUE, 4, TRUE, 'Machine Learning'),
  
  ('Caju Dashboard - Cashew Monitoring Platform', 'Satellite-based platform leveraging Google Earth Engine for cashew crop health monitoring. Integrates machine learning predictions with geospatial visualization to track crop performance, identify stress zones, and support data-driven agricultural decisions for stakeholders.',
   ARRAY['Django', 'Google Earth Engine', 'Satellite Imagery', 'Machine Learning', 'Geospatial Visualization', 'Remote Sensing'], 
   'https://www.technoserve.org/tns-labs/geospatial-technology', NULL, TRUE, 5, TRUE, 'Geospatial AI'),
  
  -- Communication & Analytics Tools
  ('Farmer Agrochemical Advisory Chatbot', 'WhatsApp-based AI assistant enabling farmers to identify agricultural chemicals through photo uploads. Features multi-language OCR (English, Swahili, Kikuyu), comprehensive safety database, proper usage guidelines, and real-time analytics dashboard for monitoring adoption patterns in rural areas.',
   ARRAY['Python', 'Twilio API', 'WhatsApp API', 'OCR', 'Multi-language NLP', 'Image Recognition', 'Real-time Analytics'], 
   'https://kahawasafi.tnslabs.org', NULL, FALSE, 6, TRUE, 'AI/Chatbots'),
  
  ('WhatsApp Chat Analysis Tool', 'Internal NLP-powered mobile app built with LLaMA 3.1 to analyze WhatsApp group conversations between TechnoServe advisors and beneficiaries. Extracts trends, recurring issues, and sentiment analysis to support data-driven program decisions and standardize insights across regions.',
   ARRAY['Flutter', 'Kotlin', 'LLaMA 3.1', 'NLP', 'Sentiment Analysis', 'Text Mining'], 
   NULL, NULL, FALSE, 7, TRUE, 'AI/NLP'),
  
  -- Field Data Collection
  ('Mango Pest & Disease Monitoring System', 'Android field data collection app for agricultural workers to log and track pest and disease outbreaks in mango orchards. Includes offline-first architecture, GPS-tagged observations, and photo documentation for improved crop management and early intervention.',
   ARRAY['Kotlin', 'Android', 'SQLite', 'Room', 'Offline-First', 'GPS Integration', 'Agricultural Data'], 
   NULL, NULL, FALSE, 8, TRUE, 'AgriTech'),
  
  -- IoT & Hardware Integration
  ('ModAnalytic - IoT Logistics Platform', 'Real-time vehicle tracking and logistics monitoring system integrating GPS, cameras, GSM, Wi-Fi modules, and environmental sensors. Features machine learning-based analytics for predictive maintenance, route optimization, and a web dashboard for fleet management insights.',
   ARRAY['IoT', 'GPS', 'GSM', 'Machine Learning', 'Python', 'Real-time Analytics', 'Sensor Integration'], 
   NULL, NULL, FALSE, 9, TRUE, 'IoT'),
  
  -- Web Development
  ('Switch Off Drinks E-commerce', 'Full-featured e-commerce and branding website for beverage vendor with online ordering, payment processing, appointment scheduling, and customer engagement tools. Streamlines sales operations and digital marketing efforts.',
   ARRAY['Next.js', 'React', 'E-commerce', 'Payment Integration', 'Responsive Design'], 
   'https://switchoffdrinks.com', NULL, FALSE, 10, TRUE, 'Web Development')
ON CONFLICT DO NOTHING;