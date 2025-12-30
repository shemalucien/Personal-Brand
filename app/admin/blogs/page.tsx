"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

// Mock data
const initialBlogs = [
  {
    id: "1",
    title: "Building Scalable ML Models for Agricultural Applications",
    slug: "scalable-ml-agricultural-applications",
    excerpt: "Learn how we developed and deployed machine learning models...",
    published: true,
    views: 245,
    created_at: "2024-01-15",
  },
  {
    id: "2",
    title: "EUDR Compliance: Tech Solutions for Sustainable Agriculture",
    slug: "eudr-compliance-tech-solutions",
    excerpt: "Exploring how mobile applications and geospatial technology...",
    published: true,
    views: 189,
    created_at: "2024-01-10",
  },
]

export default function BlogsAdminPage() {
  const [blogs, setBlogs] = useState(initialBlogs)

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter((b) => b.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Blog Posts</h1>
          <p className="text-muted-foreground">Create and manage your blog content</p>
        </div>
        <Button asChild>
          <Link href="/admin/blogs/new">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {blogs.map((blog) => (
          <Card key={blog.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <CardTitle>{blog.title}</CardTitle>
                    <Badge variant={blog.published ? "default" : "outline"}>
                      {blog.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{blog.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <span>Created {new Date(blog.created_at).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {blog.views} views
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" asChild>
                    <Link href={`/blog/${blog.slug}`} target="_blank">
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="icon" variant="ghost" asChild>
                    <Link href={`/admin/blogs/${blog.id}/edit`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => handleDelete(blog.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
