// generate-hash.ts
// Run this script to generate the hash for admin123
import bcrypt from "bcryptjs"

async function generateHash() {
  const password = "admin123"
  const saltRounds = 10
  
  const hash = await bcrypt.hash(password, saltRounds)
  
  console.log("Password:", password)
  console.log("Hash to store in database:", hash)
  console.log("\nSQL Query to insert user:")
  console.log(`
INSERT INTO users (email, password_hash, full_name, role)
VALUES ('admin@example.com', '${hash}', 'Admin User', 'admin');
  `)
}

generateHash().catch(console.error)

// Example output (hash will be different each time):
// $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy