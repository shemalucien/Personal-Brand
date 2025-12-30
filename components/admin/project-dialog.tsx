"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ImageUpload } from "@/components/admin/image-upload"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  demo_url?: string
  github_url?: string
  image_url?: string
  featured: boolean
  published: boolean
}

interface ProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: Project | null
  onSave: (project: Project) => void
}

export function ProjectDialog({ open, onOpenChange, project, onSave }: ProjectDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    demo_url: "",
    github_url: "",
    image_url: "",
    featured: false,
    published: true,
  })

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        technologies: project.technologies.join(", "),
        demo_url: project.demo_url || "",
        github_url: project.github_url || "",
        image_url: project.image_url || "",
        featured: project.featured,
        published: project.published,
      })
    } else {
      setFormData({
        title: "",
        description: "",
        technologies: "",
        demo_url: "",
        github_url: "",
        image_url: "",
        featured: false,
        published: true,
      })
    }
  }, [project, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: project?.id || "",
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(",").map((t) => t.trim()),
      demo_url: formData.demo_url,
      github_url: formData.github_url,
      image_url: formData.image_url,
      featured: formData.featured,
      published: formData.published,
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{project ? "Edit Project" : "Add New Project"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Project Image</Label>
            <ImageUpload
              value={formData.image_url}
              onChange={(url) => setFormData({ ...formData, image_url: url })}
              label="Upload project screenshot or logo"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies (comma separated)</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="React, Node.js, PostgreSQL"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="demo_url">Demo URL</Label>
              <Input
                id="demo_url"
                type="url"
                value={formData.demo_url}
                onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
                placeholder="https://example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github_url">GitHub URL</Label>
              <Input
                id="github_url"
                type="url"
                value={formData.github_url}
                onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                placeholder="https://github.com/username/repo"
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <Label htmlFor="featured">Featured Project</Label>
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <Label htmlFor="published">Published</Label>
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
            />
          </div>

          <div className="flex gap-2 justify-end pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Project</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
