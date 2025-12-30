import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { blog_id, author_name, author_email, content } = await request.json()

    if (!blog_id || !author_name || !author_email || !content) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(author_email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // TODO: Replace with actual database insert
    // Example: await sql`INSERT INTO comments (blog_id, author_name, author_email, content, approved)
    //                    VALUES (${blog_id}, ${author_name}, ${author_email}, ${content}, false)`

    console.log("[v0] New comment submitted:", { blog_id, author_name, author_email, content })

    return NextResponse.json({
      success: true,
      message: "Comment submitted for review",
    })
  } catch (error) {
    console.error("[v0] Comment submission error:", error)
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // TODO: Replace with actual database query
    // Example: const comments = await sql`SELECT * FROM comments ORDER BY created_at DESC`

    const mockComments = [
      {
        id: "1",
        blog_id: "1",
        author_name: "Jane Smith",
        author_email: "jane@example.com",
        content: "Great article! Very insightful approach to using ML in agriculture.",
        approved: true,
        created_at: "2024-01-16T10:30:00Z",
      },
      {
        id: "2",
        blog_id: "1",
        author_name: "John Doe",
        author_email: "john@example.com",
        content: "This is exactly what we need in our region. How can we implement something similar?",
        approved: false,
        created_at: "2024-01-17T14:20:00Z",
      },
    ]

    return NextResponse.json({ comments: mockComments })
  } catch (error) {
    console.error("[v0] Get comments error:", error)
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
