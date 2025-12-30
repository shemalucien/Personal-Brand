// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { MessageSquare } from "lucide-react"

// interface CommentSectionProps {
//   blogId: string
// }

// // Mock comments
// const initialComments = [
//   {
//     id: "1",
//     author_name: "Jane Smith",
//     content: "Great article! Very insightful approach to using ML in agriculture.",
//     created_at: "2024-01-16T10:30:00Z",
//   },
//   {
//     id: "2",
//     author_name: "John Doe",
//     content: "This is exactly what we need in our region. How can we implement something similar?",
//     created_at: "2024-01-17T14:20:00Z",
//   },
// ]

// export function CommentSection({ blogId }: CommentSectionProps) {
//   const [comments, setComments] = useState(initialComments)
//   const [formData, setFormData] = useState({ name: "", email: "", content: "" })
//   const [submitting, setSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setSubmitting(true)

//     // Mock submission - replace with actual API call
//     setTimeout(() => {
//       const newComment = {
//         id: Date.now().toString(),
//         author_name: formData.name,
//         content: formData.content,
//         created_at: new Date().toISOString(),
//       }
//       setComments([newComment, ...comments])
//       setFormData({ name: "", email: "", content: "" })
//       setSubmitting(false)
//     }, 500)
//   }

//   return (
//     <div className="mt-16 pt-16 border-t border-border">
//       <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
//         <MessageSquare className="h-6 w-6" />
//         Comments ({comments.length})
//       </h2>

//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle className="text-lg">Leave a Comment</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                   disabled={submitting}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                   disabled={submitting}
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="content">Comment</Label>
//               <Textarea
//                 id="content"
//                 value={formData.content}
//                 onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//                 rows={4}
//                 required
//                 disabled={submitting}
//               />
//             </div>
//             <Button type="submit" disabled={submitting}>
//               {submitting ? "Submitting..." : "Post Comment"}
//             </Button>
//             <p className="text-xs text-muted-foreground">Your comment will be reviewed before being published.</p>
//           </form>
//         </CardContent>
//       </Card>

//       <div className="space-y-6">
//         {comments.map((comment) => (
//           <Card key={comment.id}>
//             <CardContent className="pt-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <span className="text-primary font-semibold">{comment.author_name.charAt(0)}</span>
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-1">
//                     <span className="font-semibold">{comment.author_name}</span>
//                     <span className="text-sm text-muted-foreground">
//                       {new Date(comment.created_at).toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric",
//                         year: "numeric",
//                       })}
//                     </span>
//                   </div>
//                   <p className="text-muted-foreground">{comment.content}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageSquare } from "lucide-react"

interface CommentSectionProps {
  blogId: string
}

interface Comment {
  id: string
  author_name: string
  content: string
  created_at: string
}

export function CommentSection({ blogId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ name: "", email: "", content: "" })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetchComments()
  }, [blogId])

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?blogId=${blogId}`)
      if (response.ok) {
        const data = await response.json()
        setComments(data.comments)
      }
    } catch (error) {
      console.error("[v0] Failed to fetch comments:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blog_id: blogId,
          author_name: formData.name,
          author_email: formData.email,
          content: formData.content,
        }),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", content: "" })
        setMessage("Comment submitted! It will appear after approval.")
        // Refresh comments
        await fetchComments()
      } else {
        setMessage("Failed to submit comment. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Failed to submit comment:", error)
      setMessage("An error occurred. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return <div className="mt-16 pt-16 border-t border-border">Loading comments...</div>
  }

  return (
    <div className="mt-16 pt-16 border-t border-border">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <MessageSquare className="h-6 w-6" />
        Comments ({comments.length})
      </h2>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Leave a Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={submitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={submitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Comment</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={4}
                required
                disabled={submitting}
              />
            </div>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Post Comment"}
            </Button>
            {message && (
              <p className={`text-sm ${message.includes("submitted") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
            <p className="text-xs text-muted-foreground">Your comment will be reviewed before being published.</p>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">{comment.author_name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{comment.author_name}</span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(comment.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{comment.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
