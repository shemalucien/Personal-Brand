// import { type NextRequest, NextResponse } from "next/server"
// import { getUserByEmail } from "@/lib/db"
// import { createSession, verifyPassword } from "@/lib/auth"

// export async function POST(request: NextRequest) {
//   try {
//     const { email, password } = await request.json()

//     if (!email || !password) {
//       return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
//     }

//     const user = await getUserByEmail(email)

//     if (!user || !(await verifyPassword(password, user.password_hash))) {
//       return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
//     }

//     await createSession(user.id, user.email, user.full_name, user.role)

//     return NextResponse.json({
//       success: true,
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.full_name,
//         role: user.role,
//       },
//     })
//   } catch (error) {
//     console.error("[v0] Login error:", error)
//     return NextResponse.json({ error: "An error occurred during login" }, { status: 500 })
//   }
// }

import { type NextRequest, NextResponse } from "next/server"
import { getUserByEmail } from "@/lib/db"
import { createSession, verifyPassword } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" }, 
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" }, 
        { status: 400 }
      )
    }

    // Get user from database
    const user = await getUserByEmail(email)

    // Check if user exists and password is correct
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" }, 
        { status: 401 }
      )
    }

    const isPasswordValid = await verifyPassword(password, user.password_hash)
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" }, 
        { status: 401 }
      )
    }

    // Create session
    await createSession(user.id, user.email, user.full_name, user.role)

    // Return success response
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.full_name,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    
    // Handle specific error types
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid request format" }, 
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "An error occurred during login" }, 
      { status: 500 }
    )
  }
}
