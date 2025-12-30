import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Briefcase, Code, Mail } from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    { label: "Total Projects", value: "10", icon: Code, color: "text-blue-500" },
    { label: "Blog Posts", value: "0", icon: FileText, color: "text-green-500" },
    { label: "Experiences", value: "3", icon: Briefcase, color: "text-purple-500" },
    { label: "Subscribers", value: "0", icon: Mail, color: "text-orange-500" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your portfolio content</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <a
            href="/admin/projects"
            className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer"
          >
            <h3 className="font-semibold mb-1">Manage Projects</h3>
            <p className="text-sm text-muted-foreground">Add, edit, or remove your portfolio projects</p>
          </a>
          <a
            href="/admin/experience"
            className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer"
          >
            <h3 className="font-semibold mb-1">Update Experience</h3>
            <p className="text-sm text-muted-foreground">Manage your work experience and positions</p>
          </a>
          <a
            href="/admin/blogs"
            className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer"
          >
            <h3 className="font-semibold mb-1">Write Blog Post</h3>
            <p className="text-sm text-muted-foreground">Create and publish new blog content</p>
          </a>
          <a
            href="/admin/profile"
            className="p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer"
          >
            <h3 className="font-semibold mb-1">Edit Profile</h3>
            <p className="text-sm text-muted-foreground">Update your personal information and bio</p>
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
