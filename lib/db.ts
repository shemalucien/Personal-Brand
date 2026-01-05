// // Database connection utility
// // NOTE: This uses mock data since no database integration is connected
// // Replace with actual database client when ready

// export interface User {
//   id: string
//   email: string
//   password_hash: string
//   full_name: string
//   role: string
//   created_at: string
// }

// // Mock database - replace with actual DB queries
// const mockUsers: User[] = [
//   {
//     id: "1",
//     email: "luciens@alumni.cmu.edu",
//     password_hash: "$2a$10$rWvZvNhKvM8z4YKY7z4z4e", // Mock hash
//     full_name: "Lucien Shema",
//     role: "admin",
//     created_at: new Date().toISOString(),
//   },
// ]

// export async function getUserByEmail(email: string): Promise<User | null> {
//   // TODO: Replace with actual DB query
//   // Example: const result = await sql`SELECT * FROM users WHERE email = ${email}`
//   return mockUsers.find((u) => u.email === email) || null
// }

// export async function createUser(email: string, passwordHash: string, fullName: string): Promise<User> {
//   // TODO: Replace with actual DB insert
//   const user: User = {
//     id: Date.now().toString(),
//     email,
//     password_hash: passwordHash,
//     full_name: fullName,
//     role: "admin",
//     created_at: new Date().toISOString(),
//   }
//   mockUsers.push(user)
//   return user
// }

import { neon } from '@neondatabase/serverless'

// import postgres from 'postgres'

// // Initialize Neon SQL client
const sql = neon(process.env.DATABASE_URL!)

// const sql = postgres(process.env.DATABASE_URL!)

// User types and functions
export interface User {
  id: string
  email: string
  password_hash: string
  full_name: string
  role: string
  created_at: string
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await sql`SELECT * FROM users WHERE email = ${email} LIMIT 1`
  return result[0] as User || null
}

export async function getUserById(id: string): Promise<User | null> {
  const result = await sql`SELECT * FROM users WHERE id = ${id} LIMIT 1`
  return result[0] as User || null
}

export async function createUser(email: string, passwordHash: string, fullName: string): Promise<User> {
  const result = await sql`
    INSERT INTO users (email, password_hash, full_name, role)
    VALUES (${email}, ${passwordHash}, ${fullName}, 'admin')
    RETURNING *
  `
  return result[0] as User
}

// Profile types and functions
export interface Profile {
  id: string
  user_id: string
  title: string | null
  bio: string | null
  avatar_url: string | null
  github_url: string | null
  linkedin_url: string | null
  email: string | null
  phone: string | null
  location: string | null
  resume_url: string | null
  created_at: string
  updated_at: string
}

export async function getProfile(): Promise<Profile | null> {
  const result = await sql`SELECT * FROM profile LIMIT 1`
  return result[0] as Profile || null
}

export async function updateProfile(data: Partial<Profile>): Promise<Profile> {
  const result = await sql`
    UPDATE profile
    SET 
      title = COALESCE(${data.title}, title),
      bio = COALESCE(${data.bio}, bio),
      avatar_url = COALESCE(${data.avatar_url}, avatar_url),
      github_url = COALESCE(${data.github_url}, github_url),
      linkedin_url = COALESCE(${data.linkedin_url}, linkedin_url),
      email = COALESCE(${data.email}, email),
      phone = COALESCE(${data.phone}, phone),
      location = COALESCE(${data.location}, location),
      resume_url = COALESCE(${data.resume_url}, resume_url),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ${data.id}
    RETURNING *
  `
  return result[0] as Profile
}

// Experience types and functions
export interface Experience {
  id: string
  company: string
  position: string
  location: string | null
  start_date: string
  end_date: string | null
  is_current: boolean
  description: string | null
  technologies: string[]
  order_index: number
  created_at: string
  updated_at: string
}

export async function getExperiences(): Promise<Experience[]> {
  const result = await sql`
    SELECT * FROM experiences
    ORDER BY start_date DESC
  `
  return result as Experience[]
}

export async function createExperience(data: Omit<Experience, 'id' | 'created_at' | 'updated_at'>): Promise<Experience> {
  const result = await sql`
    INSERT INTO experiences (company, position, location, start_date, end_date, is_current, description, technologies, order_index)
    VALUES (${data.company}, ${data.position}, ${data.location}, ${data.start_date}, ${data.end_date}, ${data.is_current}, ${data.description}, ${data.technologies}, ${data.order_index})
    RETURNING *
  `
  return result[0] as Experience
}

export async function updateExperience(id: string, data: Partial<Experience>): Promise<Experience> {
  const result = await sql`
    UPDATE experiences
    SET 
      company = COALESCE(${data.company}, company),
      position = COALESCE(${data.position}, position),
      location = COALESCE(${data.location}, location),
      start_date = COALESCE(${data.start_date}, start_date),
      end_date = COALESCE(${data.end_date}, end_date),
      is_current = COALESCE(${data.is_current}, is_current),
      description = COALESCE(${data.description}, description),
      technologies = COALESCE(${data.technologies}, technologies),
      order_index = COALESCE(${data.order_index}, order_index),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
    RETURNING *
  `
  return result[0] as Experience
}

export async function deleteExperience(id: string): Promise<void> {
  await sql`DELETE FROM experiences WHERE id = ${id}`
}

// Skills types and functions
export interface Skill {
  id: string
  category: string
  name: string
  proficiency: number
  order_index: number
  created_at: string
  updated_at: string
}

export async function getSkills(): Promise<Skill[]> {
  const result = await sql`
    SELECT * FROM skills
    ORDER BY category, order_index
  `
  return result as Skill[]
}

export async function getSkillsByCategory(): Promise<Record<string, Skill[]>> {
  const skills = await getSkills()
  return skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)
}

export async function createSkill(data: Omit<Skill, 'id' | 'created_at' | 'updated_at'>): Promise<Skill> {
  const result = await sql`
    INSERT INTO skills (category, name, proficiency, order_index)
    VALUES (${data.category}, ${data.name}, ${data.proficiency}, ${data.order_index})
    RETURNING *
  `
  return result[0] as Skill
}

export async function updateSkill(id: string, data: Partial<Skill>): Promise<Skill> {
  const result = await sql`
    UPDATE skills
    SET 
      category = COALESCE(${data.category}, category),
      name = COALESCE(${data.name}, name),
      proficiency = COALESCE(${data.proficiency}, proficiency),
      order_index = COALESCE(${data.order_index}, order_index),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
    RETURNING *
  `
  return result[0] as Skill
}

export async function deleteSkill(id: string): Promise<void> {
  await sql`DELETE FROM skills WHERE id = ${id}`
}

// Projects types and functions
export interface Project {
  id: string
  title: string
  description: string
  image_url: string | null
  demo_url: string | null
  category : string | null
  github_url: string | null
  technologies: string[]
  featured: boolean
  order_index: number
  published: boolean
  created_at: string
  updated_at: string
}

export async function getProjects(includeUnpublished = false): Promise<Project[]> {
  const result = includeUnpublished
    ? await sql`SELECT * FROM projects ORDER BY order_index, created_at DESC`
    : await sql`SELECT * FROM projects WHERE published = true ORDER BY order_index, created_at DESC`
  return result as Project[]
}

export async function getProjectById(id: string): Promise<Project | null> {
  const result = await sql`SELECT * FROM projects WHERE id = ${id} LIMIT 1`
  return result[0] as Project || null
}

export async function createProject(data: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<Project> {
  const result = await sql`
    INSERT INTO projects (title, description, image_url, demo_url, github_url, technologies, featured, order_index, published)
    VALUES (${data.title}, ${data.description}, ${data.image_url}, ${data.demo_url}, ${data.github_url}, ${data.technologies}, ${data.featured}, ${data.order_index}, ${data.published})
    RETURNING *
  `
  return result[0] as Project
}

export async function updateProject(id: string, data: Partial<Project>): Promise<Project> {
  const result = await sql`
    UPDATE projects
    SET 
      title = COALESCE(${data.title}, title),
      description = COALESCE(${data.description}, description),
      image_url = COALESCE(${data.image_url}, image_url),
      demo_url = COALESCE(${data.demo_url}, demo_url),
      github_url = COALESCE(${data.github_url}, github_url),
      technologies = COALESCE(${data.technologies}, technologies),
      featured = COALESCE(${data.featured}, featured),
      order_index = COALESCE(${data.order_index}, order_index),
      published = COALESCE(${data.published}, published),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
    RETURNING *
  `
  return result[0] as Project
}

export async function deleteProject(id: string): Promise<void> {
  await sql`DELETE FROM projects WHERE id = ${id}`
}

// Blog types and functions
export interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  cover_image_url: string | null
  author_id: string | null
  published: boolean
  views: number
  reading_time: number | null
  tags: string[]
  created_at: string
  updated_at: string
  published_at: string | null
}

export async function getBlogs(includeUnpublished = false): Promise<Blog[]> {
  const result = includeUnpublished
    ? await sql`SELECT * FROM blogs ORDER BY created_at DESC`
    : await sql`SELECT * FROM blogs WHERE published = true ORDER BY published_at DESC`
  return result as Blog[]
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const result = await sql`SELECT * FROM blogs WHERE slug = ${slug} LIMIT 1`
  if (result[0]) {
    // Increment views
    await sql`UPDATE blogs SET views = views + 1 WHERE slug = ${slug}`
  }
  return result[0] as Blog || null
}

export async function getBlogById(id: string): Promise<Blog | null> {
  const result = await sql`SELECT * FROM blogs WHERE id = ${id} LIMIT 1`
  return result[0] as Blog || null
}

export async function createBlog(data: Omit<Blog, 'id' | 'views' | 'created_at' | 'updated_at'>): Promise<Blog> {
  const result = await sql`
    INSERT INTO blogs (title, slug, content, excerpt, cover_image_url, author_id, published, reading_time, tags, published_at)
    VALUES (${data.title}, ${data.slug}, ${data.content}, ${data.excerpt}, ${data.cover_image_url}, ${data.author_id}, ${data.published}, ${data.reading_time}, ${data.tags}, ${data.published_at})
    RETURNING *
  `
  return result[0] as Blog
}

export async function updateBlog(id: string, data: Partial<Blog>): Promise<Blog> {
  const result = await sql`
    UPDATE blogs
    SET 
      title = COALESCE(${data.title}, title),
      slug = COALESCE(${data.slug}, slug),
      content = COALESCE(${data.content}, content),
      excerpt = COALESCE(${data.excerpt}, excerpt),
      cover_image_url = COALESCE(${data.cover_image_url}, cover_image_url),
      published = COALESCE(${data.published}, published),
      reading_time = COALESCE(${data.reading_time}, reading_time),
      tags = COALESCE(${data.tags}, tags),
      published_at = COALESCE(${data.published_at}, published_at),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ${id}
    RETURNING *
  `
  return result[0] as Blog
}

export async function deleteBlog(id: string): Promise<void> {
  await sql`DELETE FROM blogs WHERE id = ${id}`
}

// Comments types and functions
export interface Comment {
  id: string
  blog_id: string
  author_name: string
  author_email: string
  content: string
  approved: boolean
  created_at: string
}

export async function getCommentsByBlogId(blogId: string, includeUnapproved = false): Promise<Comment[]> {
  const result = includeUnapproved
    ? await sql`SELECT * FROM comments WHERE blog_id = ${blogId} ORDER BY created_at DESC`
    : await sql`SELECT * FROM comments WHERE blog_id = ${blogId} AND approved = true ORDER BY created_at DESC`
  return result as Comment[]
}

export async function getAllComments(): Promise<Comment[]> {
  const result = await sql`SELECT * FROM comments ORDER BY created_at DESC`
  return result as Comment[]
}

export async function createComment(data: Omit<Comment, 'id' | 'created_at'>): Promise<Comment> {
  const result = await sql`
    INSERT INTO comments (blog_id, author_name, author_email, content, approved)
    VALUES (${data.blog_id}, ${data.author_name}, ${data.author_email}, ${data.content}, ${data.approved})
    RETURNING *
  `
  return result[0] as Comment
}

export async function updateCommentApproval(id: string, approved: boolean): Promise<Comment> {
  const result = await sql`
    UPDATE comments
    SET approved = ${approved}
    WHERE id = ${id}
    RETURNING *
  `
  return result[0] as Comment
}

export async function deleteComment(id: string): Promise<void> {
  await sql`DELETE FROM comments WHERE id = ${id}`
}

// Newsletter types and functions
export interface NewsletterSubscriber {
  id: string
  email: string
  subscribed: boolean
  verification_token: string | null
  verified: boolean
  subscribed_at: string
  unsubscribed_at: string | null
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  const result = await sql`
    SELECT * FROM newsletter_subscribers 
    WHERE subscribed = true 
    ORDER BY subscribed_at DESC
  `
  return result as NewsletterSubscriber[]
}

export async function createNewsletterSubscriber(email: string): Promise<NewsletterSubscriber> {
  const result = await sql`
    INSERT INTO newsletter_subscribers (email, subscribed, verified)
    VALUES (${email}, true, true)
    ON CONFLICT (email) 
    DO UPDATE SET subscribed = true, unsubscribed_at = NULL
    RETURNING *
  `
  return result[0] as NewsletterSubscriber
}

export async function unsubscribeNewsletter(email: string): Promise<void> {
  await sql`
    UPDATE newsletter_subscribers
    SET subscribed = false, unsubscribed_at = CURRENT_TIMESTAMP
    WHERE email = ${email}
  `
}

export interface Education {
  id: string
  institution: string
  degree: string
  field_of_study: string | null
  location: string | null
  start_date: string // DATE → string in JS
  end_date: string | null
  is_current: boolean
  description: string | null
  grade: string | null
  order_index: number
  created_at: string
  updated_at: string
}
export async function getEducation() {
  const result = await sql`
    SELECT * FROM education 
    ORDER BY start_date DESC
  `
  return result as Education[]
}