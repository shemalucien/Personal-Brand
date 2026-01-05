// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ExternalLink } from "lucide-react"

// const projects = [
//   {
//     title: "TerraTrac",
//     description:
//       "Open-source Android app designed for buyers to list farms in compliance with EUDR (EU Deforestation Regulation). Globally available on the Google Play Store.",
//     tags: ["Kotlin", "Android", "EUDR Compliance", "GPS", "Open Source"],
//     link: "https://play.google.com/store/apps/details?id=org.technoserve.cafetrac",
//   },
//   {
//     title: "CafeTrac",
//     description:
//       "Android application for coffee cherry buyers facilitating farm listing and management in compliance with EUDR. Features farm registration with polygon mapping, offline-first architecture, and dual transaction functionality.",
//     tags: ["Kotlin", "Android", "Farm Mapping", "Offline-First", "Transaction Management"],
//     link: "https://play.google.com/store/apps/details?id=org.technoserve.cafetrac",
//   },
//   {
//     title: "TerraTrac Validation Portal",
//     description:
//       "Web application enabling suppliers to validate farm information against a global database of deforestation zones, supporting compliance with international sustainability standards.",
//     tags: ["Next.js", "React", "RESTful APIs", "Geospatial Data", "EUDR"],
//     link: "https://terratrac.org",
//   },
//   {
//     title: "Caju Dashboard",
//     description:
//       "Satellite imagery platform for monitoring cashew crop health and performance. Leverages machine learning for predictions and visualizes spatial trends for agricultural stakeholders.",
//     tags: ["Google Earth Engine", "Machine Learning", "Satellite Imagery", "Django"],
//     link: "https://caju-dashboard.example.com",
//   },
//   {
//     title: "Farmer Agrochemical Advisory Tool",
//     description:
//       "WhatsApp-based chatbot enabling farmers to identify agricultural chemicals by sending photos. Features multi-language OCR support and real-time analytics dashboard.",
//     tags: ["Twilio API", "WhatsApp API", "OCR", "Python", "Chatbot"],
//   },
//   {
//     title: "Coffee Bean Defects Analyzer",
//     description:
//       "ML model integrated into agricultural apps to detect and classify coffee bean defects through image analysis. Helps improve quality assessment and grading processes.",
//     tags: ["TensorFlow", "Computer Vision", "Image Classification", "Deep Learning"],
//   },
//   {
//     title: "ModAnalytic",
//     description:
//       "IoT-based logistics monitoring system integrating GPS, cameras, sensors, and machine learning to track vehicles in real-time with actionable insights via web dashboard.",
//     tags: ["IoT", "GPS Tracking", "Machine Learning", "Real-time Analytics"],
//   },
//   {
//     title: "Aqua Site ML Model",
//     description:
//       "Scalable ML model designed to detect and map aquaculture pond locations, providing data-driven insights for resource management and sustainable decision-making.",
//     tags: ["PyTorch", "Satellite Imagery", "Object Detection", "Geospatial ML"],
//   },
//   {
//     title: "Chat Analysis App",
//     description:
//       "Internal mobile app using LLaMA 3.1 to help business advisors analyze WhatsApp chats. Extracts trends, recurring issues, and sentiment to support data-driven decisions.",
//     tags: ["Flutter", "LLaMA 3.1", "NLP", "Sentiment Analysis"],
//   },
//   {
//     title: "Switch Off Drinks",
//     description:
//       "Branding and e-commerce website for a beverage vendor. Allows clients to place orders, schedule appointments, and engage with the brand online.",
//     tags: ["Next.js", "E-commerce", "React", "Responsive Design"],
//     link: "https://switchoffdrinks.com",
//   },
// ]

// export function ProjectsSection() {
//   return (
//     <section id="projects" className="py-24 px-4 lg:px-8 border-t border-border">
//       <div className="container mx-auto">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Featured Projects</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {projects.map((project, index) => (
//               <Card key={index} className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
//                 <div className="flex items-start justify-between mb-4">
//                   <h3 className="text-xl font-semibold">{project.title}</h3>
//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-muted-foreground hover:text-primary transition-colors"
//                     >
//                       <ExternalLink className="h-5 w-5" />
//                       <span className="sr-only">View project</span>
//                     </a>
//                   )}
//                 </div>

//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, i) => (
//                     <Badge key={i} variant="outline" className="text-xs">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ExternalLink } from "lucide-react"
// import { getProjects } from "@/lib/db"
// import Image from "next/image"

// export async function ProjectsSection() {
//   const projects = await getProjects()

//   return (
//     <section id="projects" className="py-24 px-4 lg:px-8 border-t border-border">
//       <div className="container mx-auto">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Featured Projects</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {projects.map((project) => (
//               <Card key={project.id} className="p-6 border-border bg-card hover:border-primary/50 transition-colors">
//                 {project.image_url && (
//                   <div className="mb-4 relative h-48 rounded-lg overflow-hidden">
//                     <Image
//                       src={project.image_url || "/placeholder.svg"}
//                       alt={project.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 )}

//                 <div className="flex items-start justify-between mb-4">
//                   <h3 className="text-xl font-semibold">{project.title}</h3>
//                   {(project.demo_url || project.github_url) && (
//                     <a
//                       href={project.demo_url || project.github_url || "#"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-muted-foreground hover:text-primary transition-colors"
//                     >
//                       <ExternalLink className="h-5 w-5" />
//                       <span className="sr-only">View project</span>
//                     </a>
//                   )}
//                 </div>

//                 <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

//                 {project.technologies && project.technologies.length > 0 && (
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tag, i) => (
//                       <Badge key={i} variant="outline" className="text-xs">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 )}
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// components/projects-section.tsx
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { getProjects } from "@/lib/db"
import Image from "next/image"

export async function ProjectsSection() {
  const projects = await getProjects()
  
  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    const category = project.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(project)
    return acc
  }, {} as Record<string, typeof projects>)

  return (
    <section id="projects" className="py-24 px-4 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Featured Work</h2>
          <p className="text-3xl font-bold mb-12 max-w-2xl">
            Building impactful solutions for agriculture, sustainability, and digital transformation
          </p>

          {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
            <div key={category} className="mb-16">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="p-6 border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    {project.image_url && (
                      <div className="mb-4 relative h-48 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={project.image_url}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold flex-1">{project.title}</h4>
                      <div className="flex gap-2 ml-2">
                        {project.demo_url && (
                          <a
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            title="View live demo"
                          >
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">View demo</span>
                          </a>
                        )}
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            title="View source code"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">View code</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                          <Badge variant="outline" className="text-xs text-muted-foreground">
                            +{project.technologies.length - 6} more
                          </Badge>
                        )}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}