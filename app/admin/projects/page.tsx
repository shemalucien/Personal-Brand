"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react"
import { ProjectDialog } from "@/components/admin/project-dialog"

// Mock data - replace with actual database queries
const initialProjects = [
  {
    id: "1",
    title: "TerraTrac",
    description:
      "Open-source Android app designed for buyers to list farms in compliance with EUDR. Globally available on the Google Play Store.",
    technologies: ["Kotlin", "Android", "GPS", "Open Source"],
    demo_url: "https://play.google.com/store/apps/details?id=org.technoserve.cafetrac",
    featured: true,
    published: true,
  },
  {
    id: "2",
    title: "CafeTrac",
    description:
      "Android application for coffee cherry buyers facilitating farm listing and management in compliance with EUDR.",
    technologies: ["Kotlin", "Android", "Farm Mapping", "Offline-First"],
    demo_url: "https://play.google.com/store/apps/details?id=org.technoserve.cafetrac",
    featured: true,
    published: true,
  },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<(typeof initialProjects)[0] | null>(null)

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id))
    }
  }

  const handleEdit = (project: (typeof initialProjects)[0]) => {
    setEditingProject(project)
    setDialogOpen(true)
  }

  const handleAdd = () => {
    setEditingProject(null)
    setDialogOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage your portfolio projects</p>
        </div>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle>{project.title}</CardTitle>
                    {project.featured && <Badge variant="secondary">Featured</Badge>}
                    <Badge variant={project.published ? "default" : "outline"}>
                      {project.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex gap-2">
                  {project.demo_url && (
                    <Button size="icon" variant="ghost" asChild>
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button size="icon" variant="ghost" onClick={() => handleEdit(project)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => handleDelete(project.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ProjectDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        project={editingProject}
        onSave={(project) => {
          if (editingProject) {
            setProjects(projects.map((p) => (p.id === project.id ? project : p)))
          } else {
            setProjects([...projects, { ...project, id: Date.now().toString() }])
          }
          setDialogOpen(false)
        }}
      />
    </div>
  )
}
