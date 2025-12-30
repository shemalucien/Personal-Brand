"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Search, Download, Trash2 } from "lucide-react"

// Mock data
const initialSubscribers = [
  {
    id: "1",
    email: "jane.smith@example.com",
    verified: true,
    subscribed_at: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    email: "john.doe@example.com",
    verified: true,
    subscribed_at: "2024-01-16T14:20:00Z",
  },
  {
    id: "3",
    email: "alice.wonder@example.com",
    verified: false,
    subscribed_at: "2024-01-17T09:15:00Z",
  },
]

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState(initialSubscribers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSubscribers = subscribers.filter((sub) => sub.email.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this subscriber?")) {
      setSubscribers(subscribers.filter((s) => s.id !== id))
    }
  }

  const handleExport = () => {
    const csv =
      "Email,Verified,Subscribed At\n" +
      subscribers.map((s) => `${s.email},${s.verified},${s.subscribed_at}`).join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "subscribers.csv"
    a.click()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Newsletter Subscribers</h1>
          <p className="text-muted-foreground">Manage your email subscribers</p>
        </div>
        <Button onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Subscribers</CardTitle>
            <Mail className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Verified</CardTitle>
            <Mail className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers.filter((s) => s.verified).length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            <Mail className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers.filter((s) => !s.verified).length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search subscribers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredSubscribers.map((subscriber) => (
              <div key={subscriber.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4 flex-1">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">{subscriber.email}</p>
                    <p className="text-sm text-muted-foreground">
                      Subscribed {new Date(subscriber.subscribed_at).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant={subscriber.verified ? "default" : "secondary"}>
                    {subscriber.verified ? "Verified" : "Pending"}
                  </Badge>
                </div>
                <Button size="icon" variant="ghost" onClick={() => handleDelete(subscriber.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}

            {filteredSubscribers.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">No subscribers found</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
