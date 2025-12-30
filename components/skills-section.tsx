// import { Badge } from "@/components/ui/badge"

// const skillCategories = [
//   {
//     category: "Full Stack Development",
//     skills: [
//       "JavaScript",
//       "React.js",
//       "Next.js",
//       "Node.js",
//       "TypeScript",
//       "Python",
//       "Django",
//       "HTML5",
//       "CSS3",
//       "Tailwind CSS",
//       "RESTful APIs",
//     ],
//   },
//   {
//     category: "Mobile Development",
//     skills: ["Kotlin", "Android", "Dart", "Flutter", "Cross-Platform Development"],
//   },
//   {
//     category: "Machine Learning & AI",
//     skills: [
//       "TensorFlow",
//       "PyTorch",
//       "Vertex AI",
//       "Image Classification",
//       "Object Detection",
//       "NLP",
//       "LLaMA 3.1",
//       "Computer Vision",
//       "OCR",
//     ],
//   },
//   {
//     category: "Geospatial AI",
//     skills: ["Google Earth Engine", "Satellite Data Analysis", "Remote Sensing", "GIS Modeling", "QGIS"],
//   },
//   {
//     category: "Database Management",
//     skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "SQLite", "Room"],
//   },
//   {
//     category: "Cloud & DevOps",
//     skills: ["GCP", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Git"],
//   },
//   {
//     category: "IoT & Embedded Systems",
//     skills: ["GPS Integration", "GSM Integration", "Wi-Fi Integration", "Sensor Data Analysis"],
//   },
// ]

// export function SkillsSection() {
//   return (
//     <section id="skills" className="py-24 px-4 lg:px-8 border-t border-border bg-card/30">
//       <div className="container mx-auto">
//         <div className="max-w-4xl">
//           <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Skills & Technologies</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skillCategories.map((category, index) => (
//               <div key={index} className="space-y-4">
//                 <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, i) => (
//                     <Badge key={i} variant="secondary" className="text-sm">
//                       {skill}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Badge } from "@/components/ui/badge"
import { getSkillsByCategory } from "@/lib/db"

export async function SkillsSection() {
  const skillsByCategory = await getSkillsByCategory()

  return (
    <section id="skills" className="py-24 px-4 lg:px-8 border-t border-border bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.id} variant="secondary" className="text-sm">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
