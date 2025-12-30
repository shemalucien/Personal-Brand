// import { cookies } from "next/headers"
// import { SignJWT, jwtVerify } from "jose"

// const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-this")

// export interface Session {
//   user: {
//     id: string
//     email: string
//     name: string
//     role: string
//   }
//   expires: string
// }

// export async function createSession(userId: string, email: string, name: string, role: string) {
//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
//   const session: Session = {
//     user: { id: userId, email, name, role },
//     expires: expires.toISOString(),
//   }

//   const token = await new SignJWT(session).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(SECRET)

//   const cookieStore = await cookies()
//   cookieStore.set("session", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     expires,
//     sameSite: "lax",
//     path: "/",
//   })

//   return session
// }

// export async function getSession(): Promise<Session | null> {
//   const cookieStore = await cookies()
//   const token = cookieStore.get("session")

//   if (!token) return null

//   try {
//     const { payload } = await jwtVerify(token.value, SECRET)
//     return payload as Session
//   } catch (error) {
//     return null
//   }
// }

// export async function destroySession() {
//   const cookieStore = await cookies()
//   cookieStore.delete("session")
// }

// export async function hashPassword(password: string): Promise<string> {
//   // Simple hash for demo - use bcrypt in production
//   return `hashed_${password}`
// }

// export async function verifyPassword(password: string, hash: string): Promise<boolean> {
//   // Simple verification for demo - use bcrypt in production
//   return hash === `hashed_${password}`
// }


import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"
import bcrypt from "bcryptjs"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-this")

export interface Session {
  user: {
    id: string
    email: string
    name: string
    role: string
  }
  expires: string
}

export async function createSession(userId: string, email: string, name: string, role: string) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  const session: Session = {
    user: { id: userId, email, name, role },
    expires: expires.toISOString(),
  }

  const token = await new SignJWT(session).setProtectedHeader({ alg: "HS256" }).setExpirationTime("7d").sign(SECRET)

  const cookieStore = await cookies()
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires,
    sameSite: "lax",
    path: "/",
  })

  return session
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("session")

  if (!token) return null

  try {
    const { payload } = await jwtVerify(token.value, SECRET)
    return payload as Session
  } catch (error) {
    return null
  }
}

export async function destroySession() {
  const cookieStore = await cookies()
  cookieStore.delete("session")
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10
  return await bcrypt.hash(password, saltRounds)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash)
}

// Generate hash for "admin123"
// Run this once to get the hash, then store it in your database
// Example usage:
// const hash = await hashPassword("admin123")
// console.log("Hash to store in DB:", hash)
// Result: $2a$10$... (varies each time due to salt)