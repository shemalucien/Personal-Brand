// import { Badge } from "@/components/ui/badge"
// import { Card } from "@/components/ui/card"

// const experiences = [
//   {
//     title: "Machine Learning & Full Stack Developer",
//     company: "TechnoServe",
//     period: "June 2024 – Present",
//     description:
//       "Leading development of mobile and web applications for traceability, deforestation-free practices, and business activity monitoring.",
//     highlights: [
//       "Lead the completion of the traceability/EUDR mobile application",
//       "Contributed to the Cherie app using machine learning to predict coffee cherry quality",
//       "Built mobile app for real-time collection and visualization of mango pest and disease data",
//       "Developed scalable model for predicting aquaculture pond locations",
//     ],
//   },
//   {
//     title: "Graduate Teaching Assistant",
//     company: "Carnegie Mellon University Africa",
//     period: "Sept 2023 - May 2024",
//     description: "Assisted in laboratory activities for technical courses and supervised student projects.",
//     highlights: [
//       "Monitored and supervised students' progress in technical experiments",
//       "Guided student group projects and helped them make informed technical decisions",
//     ],
//   },
//   {
//     title: "Software Developer",
//     company: "Defence Research Development - Ministry of Defence",
//     period: "Sept - Dec 2023",
//     description: "Designed and developed an IoT-based logistics monitoring system for real-time vehicle tracking.",
//     highlights: [
//       "Integrated GPS, camera, GSM, and Wi-Fi modules with various sensors",
//       "Implemented machine learning models to process data and generate proactive recommendations",
//       "Created user-friendly web dashboard for real-time insights and analytics",
//     ],
//   },
//   {
//     title: "Software Developer Intern",
//     company: "CyLab-Africa/Upanzi Network",
//     period: "May - August 2023",
//     description: "Developed open-source OpenCRVS Stack Health & Performance web application.",
//     highlights: [
//       "Built NextJS application with seamless API integrations",
//       "Designed companion application to assist OpenCRVS IT staff",
//       "Implemented client request latency monitoring with location-based filtering",
//     ],
//   },
//   {
//     title: "Software Developer Intern",
//     company: "TechnoServe",
//     period: "May - August 2023",
//     description: "Developed and refined the Cashew Satellite Dashboard using Django.",
//     highlights: [
//       "Completed visualization dashboard for satellite imagery using ML predictions",
//       "Implemented access controls and adapted dashboard based on user feedback",
//       "Deployed dashboard to AWS for enhanced accessibility and scalability",
//     ],
//   },
// ]

// export function ExperienceSection() {
//   return (
//     <section id="experience" className="py-24 px-4 lg:px-8 border-t border-border">
//       <div className="container mx-auto">
//         <div className="max-w-4xl">
//           <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Professional Experience</h2>

//           <div className="space-y-12">
//             {experiences.map((exp, index) => (
//               <Card key={index} className="p-6 border-border bg-card">
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
//                     <p className="text-primary font-medium">{exp.company}</p>
//                   </div>
//                   <Badge variant="secondary" className="mt-2 md:mt-0">
//                     {exp.period}
//                   </Badge>
//                 </div>

//                 <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

//                 <ul className="space-y-2">
//                   {exp.highlights.map((highlight, i) => (
//                     <li key={i} className="flex gap-3 text-sm text-muted-foreground">
//                       <span className="text-primary mt-1.5">•</span>
//                       <span className="leading-relaxed">{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getExperiences } from "@/lib/db"
import { format } from "date-fns"

export async function ExperienceSection() {
  const experiences = await getExperiences()

  const formatDate = (date: string) => {
    return format(new Date(date), "MMM yyyy")
  }

  return (
    <section id="experience" className="py-24 px-4 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Professional Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp) => (
              <Card key={exp.id} className="p-6 border-border bg-card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">
                    {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : "Present"}
                  </Badge>
                </div>

                {exp.description && <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>}

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

