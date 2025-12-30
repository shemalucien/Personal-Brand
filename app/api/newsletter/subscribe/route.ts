import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // TODO: Replace with actual database insert
    // Example: await sql`INSERT INTO newsletter_subscribers (email, verified) VALUES (${email}, false)`

    console.log("[v0] Newsletter subscription:", email)

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to newsletter!",
    })
  } catch (error) {
    console.error("[v0] Newsletter subscription error:", error)
    return NextResponse.json({ error: "An error occurred" }, { status: 500 })
  }
}
