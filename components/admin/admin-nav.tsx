"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Code, Briefcase, Layers, FileText, Mail, User, Settings, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/projects", label: "Projects", icon: Code },
  { href: "/admin/experience", label: "Experience", icon: Briefcase },
  { href: "/admin/skills", label: "Skills", icon: Layers },
  { href: "/admin/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/comments", label: "Comments", icon: MessageSquare },
  { href: "/admin/subscribers", label: "Subscribers", icon: Mail },
  { href: "/admin/profile", label: "Profile", icon: User },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 border-r bg-card min-h-[calc(100vh-4rem)] p-4">
      <div className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
