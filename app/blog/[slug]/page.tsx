import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { CommentSection } from "@/components/blog/comment-section"
import { NewsletterCTA } from "@/components/blog/newsletter-cta"

// Mock data - replace with actual database query
const blog = {
  id: "1",
  title: "Building Scalable ML Models for Agricultural Applications",
  slug: "scalable-ml-agricultural-applications",
  content: `
  <p>Machine learning has transformed how we approach agricultural challenges, from crop disease detection to yield prediction. In this article, I'll share insights from developing ML models that process satellite imagery to help farmers make data-driven decisions.</p>

  <h2>The Challenge</h2>
  <p>Small-scale farmers in developing countries often lack access to timely information about their crops. Traditional monitoring methods are time-consuming and expensive, making it difficult to scale agricultural advisory services.</p>

  <h2>Our Approach</h2>
  <p>We developed a machine learning pipeline that leverages satellite imagery from Sentinel-2 and Landsat to monitor crop health at scale. The system uses computer vision techniques to identify patterns that indicate potential issues.</p>

  <h3>Key Technologies</h3>
  <ul>
    <li><strong>Google Earth Engine:</strong> For accessing and processing satellite imagery</li>
    <li><strong>PyTorch:</strong> For building and training deep learning models</li>
    <li><strong>Django REST Framework:</strong> For serving predictions via API</li>
    <li><strong>React:</strong> For building the farmer-facing dashboard</li>
  </ul>

  <h2>Results</h2>
  <p>Our system now monitors over 50,000 farms across multiple countries, providing weekly health assessments. Farmers receive alerts when potential issues are detected, allowing them to take preventive action.</p>

  <h2>Lessons Learned</h2>
  <p>Building ML systems for real-world applications requires more than just good models. Data quality, scalability, and user experience are equally important. We learned to start simple, validate with users early, and iterate based on feedback.</p>

  <h2>What's Next</h2>
  <p>We're working on expanding the system to predict yields and recommend optimal planting times. The goal is to create a comprehensive agricultural intelligence platform that's accessible to everyone.</p>
  `,
  cover_image_url: "/satellite-imagery-farming.jpg",
  author: "Lucien Shema",
  published_at: "2024-01-15",
  reading_time: 8,
  tags: ["Machine Learning", "Agriculture", "Satellite Imagery", "Computer Vision"],
  views: 245,
}

export default function BlogPost() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <article className="py-24 px-4 lg:px-8 pt-32">
        <div className="container mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{blog.title}</h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">LS</span>
                </div>
                <span className="font-medium text-foreground">{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(blog.published_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blog.reading_time} min read
              </div>
            </div>
          </div>

          <img
            src={blog.cover_image_url || "/placeholder.svg"}
            alt={blog.title}
            className="w-full h-auto rounded-lg mb-12 border border-border"
          />

          <div
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <NewsletterCTA />

          <CommentSection blogId={blog.id} />
        </div>
      </article>
    </main>
  )
}
