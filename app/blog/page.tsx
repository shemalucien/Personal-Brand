import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

// Mock data - replace with actual database queries
const blogs = [
  {
    id: "1",
    title: "Building Scalable ML Models for Agricultural Applications",
    slug: "scalable-ml-agricultural-applications",
    excerpt:
      "Learn how we developed and deployed machine learning models that process satellite imagery to help farmers make data-driven decisions.",
    cover_image_url: "/satellite-imagery-farming.jpg",
    published_at: "2024-01-15",
    reading_time: 8,
    tags: ["Machine Learning", "Agriculture", "Satellite Imagery"],
  },
  {
    id: "2",
    title: "EUDR Compliance: Tech Solutions for Sustainable Agriculture",
    slug: "eudr-compliance-tech-solutions",
    excerpt:
      "Exploring how mobile applications and geospatial technology are helping coffee and cocoa farmers comply with EU Deforestation Regulation.",
    cover_image_url: "/sustainable-agriculture-tech.png",
    published_at: "2024-01-10",
    reading_time: 6,
    tags: ["Sustainability", "Mobile Apps", "Compliance"],
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-24 px-4 lg:px-8 border-t border-border pt-32">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts on technology, machine learning, and building impactful solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <Card className="h-full hover:border-primary transition-colors cursor-pointer">
                  <CardHeader className="p-0">
                    <img
                      src={blog.cover_image_url || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(blog.published_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {blog.reading_time} min read
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-2 text-balance">{blog.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{blog.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center text-primary font-medium text-sm">
                      Read more <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
