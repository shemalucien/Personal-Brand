import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getSession } from "@/lib/auth"

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Protect admin routes
  if (path.startsWith("/admin")) {
    const session = await getSession()

    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Redirect to admin if already logged in and trying to access login
  if (path === "/login") {
    const session = await getSession()
    if (session) {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
}
