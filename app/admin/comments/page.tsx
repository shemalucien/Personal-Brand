"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, MessageSquare } from "lucide-react"

interface Comment {
  id: string
  blog_id: string
  author_name: string
  author_email: string
  content: string
  approved: boolean
  created_at: string
}

export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    // Fetch comments
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data.comments || []))
  }, [])

  const handleApprove = (id: string) => {
    // TODO: API call to approve comment
    setComments(comments.map((c) => (c.id === id ? { ...c, approved: true } : c)))
  }

  const handleReject = (id: string) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter((c) => c.id !== id))
    }
  }

  const pendingComments = comments.filter((c) => !c.approved)
  const approvedComments = comments.filter((c) => c.approved)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Comments</h1>
        <p className="text-muted-foreground">Moderate and manage blog comments</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{comments.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Approved</CardTitle>
            <Check className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvedComments.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Review</CardTitle>
            <MessageSquare className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingComments.length}</div>
          </CardContent>
        </Card>
      </div>

      {pendingComments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Comments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingComments.map((comment) => (
              <div key={comment.id} className="p-4 border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">{comment.author_name}</p>
                    <p className="text-sm text-muted-foreground">{comment.author_email}</p>
                  </div>
                  <Badge variant="secondary">Pending</Badge>
                </div>
                <p className="text-sm">{comment.content}</p>
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-muted-foreground">{new Date(comment.created_at).toLocaleString()}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default" onClick={() => handleApprove(comment.id)}>
                      <Check className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleReject(comment.id)}>
                      <X className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Approved Comments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {approvedComments.map((comment) => (
            <div key={comment.id} className="p-4 border rounded-lg space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">{comment.author_name}</p>
                  <p className="text-sm text-muted-foreground">{comment.author_email}</p>
                </div>
                <Badge variant="default">Approved</Badge>
              </div>
              <p className="text-sm">{comment.content}</p>
              <div className="flex items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">{new Date(comment.created_at).toLocaleString()}</p>
                <Button size="sm" variant="ghost" onClick={() => handleReject(comment.id)}>
                  <X className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          ))}

          {approvedComments.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">No approved comments yet</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
