"use client"

import { Button } from "@/components/ui/button"
import { LogOut, User } from "lucide-react"
import { useRouter } from "next/navigation"

interface AdminHeaderProps {
  user: {
    name: string
    email: string
  }
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
    router.refresh()
  }

  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center justify-between px-8">
        <div>
          <h2 className="text-lg font-semibold">Admin Panel</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <User className="h-4 w-4" />
            <span className="font-medium">{user.name}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
