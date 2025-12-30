// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

// export function HeroSection() {
//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-16">
//       <div className="container mx-auto">
//         <div className="max-w-4xl">
//           <Badge variant="secondary" className="mb-6">
//             Available for opportunities
//           </Badge>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">Lucien Shema</h1>

//           <p className="text-xl md:text-2xl text-muted-foreground mb-4">Full Stack Developer & ML Engineer</p>

//           <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
//             Passionate about leveraging technology to solve real-world problems. Specializing in
//             <span className="text-primary"> machine learning</span>,<span className="text-primary"> geospatial AI</span>
//             , and
//             <span className="text-primary"> IoT solutions</span>. Carnegie Mellon University graduate with proven
//             experience in developing scalable applications that drive innovation.
//           </p>

//           <div className="flex flex-wrap gap-4 mb-12">
//             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
//               View Projects <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//             <Button size="lg" variant="outline">
//               Download CV
//             </Button>
//           </div>

//           <div className="flex gap-4">
//             <a
//               href="https://github.com/shemalucien"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors"
//             >
//               <Github className="h-5 w-5" />
//               <span className="sr-only">GitHub</span>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/shemalucien"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-muted-foreground hover:text-primary transition-colors"
//             >
//               <Linkedin className="h-5 w-5" />
//               <span className="sr-only">LinkedIn</span>
//             </a>
//             <a
//               href="mailto:luciens@alumni.cmu.edu"
//               className="text-muted-foreground hover:text-primary transition-colors"
//             >
//               <Mail className="h-5 w-5" />
//               <span className="sr-only">Email</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { getProfile } from "@/lib/db"

export async function HeroSection() {
  const profile = await getProfile()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-16">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            Available for opportunities
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            {profile?.title || "Lucien Shema"}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">Full Stack Developer & ML Engineer</p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {profile?.bio || "Passionate about leveraging technology to solve real-world problems."}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {profile?.resume_url && (
              <Button size="lg" variant="outline" asChild>
                <a href={profile.resume_url} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            )}
          </div>

          <div className="flex gap-4">
            {profile?.github_url && (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {profile?.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

