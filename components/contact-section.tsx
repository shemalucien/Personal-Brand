// import { Card } from "@/components/ui/card"
// import { Mail, Linkedin, Github, Phone } from "lucide-react"

// export function ContactSection() {
//   return (
//     <section id="contact" className="py-24 px-4 lg:px-8 border-t border-border">
//       <div className="container mx-auto">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Get In Touch</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-3xl font-bold mb-6 text-balance">{"Let's build something amazing together"}</h3>
//               <p className="text-muted-foreground leading-relaxed mb-8">
//                 I'm always interested in hearing about new projects and opportunities. Whether you have a question or
//                 just want to say hi, feel free to reach out!
//               </p>

//               <div className="space-y-4">
//                 <Card className="p-4 border-border bg-card/50">
//                   <div className="flex items-center gap-3">
//                     <Mail className="h-5 w-5 text-primary" />
//                     <div>
//                       <div className="text-xs text-muted-foreground mb-1">Email</div>
//                       <a href="mailto:luciens@alumni.cmu.edu" className="text-sm hover:text-primary transition-colors">
//                         luciens@alumni.cmu.edu
//                       </a>
//                     </div>
//                   </div>
//                 </Card>

//                 <Card className="p-4 border-border bg-card/50">
//                   <div className="flex items-center gap-3">
//                     <Phone className="h-5 w-5 text-primary" />
//                     <div>
//                       <div className="text-xs text-muted-foreground mb-1">Phone</div>
//                       <a href="tel:+250788392932" className="text-sm hover:text-primary transition-colors">
//                         (+250) 788 392 932
//                       </a>
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <a href="https://www.linkedin.com/in/shemalucien" target="_blank" rel="noopener noreferrer">
//                 <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <Linkedin className="h-6 w-6 text-primary" />
//                       <div>
//                         <div className="font-medium">LinkedIn</div>
//                         <div className="text-sm text-muted-foreground">Connect professionally</div>
//                       </div>
//                     </div>
//                     <span className="text-muted-foreground">→</span>
//                   </div>
//                 </Card>
//               </a>

//               <a href="https://github.com/shemalucien" target="_blank" rel="noopener noreferrer">
//                 <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <Github className="h-6 w-6 text-primary" />
//                       <div>
//                         <div className="font-medium">GitHub</div>
//                         <div className="text-sm text-muted-foreground">View my repositories</div>
//                       </div>
//                     </div>
//                     <span className="text-muted-foreground">→</span>
//                   </div>
//                 </Card>
//               </a>

//               <Card className="p-6 border-border bg-card/30">
//                 <h4 className="font-medium mb-2">Education</h4>
//                 <div className="space-y-3 text-sm">
//                   <div>
//                     <div className="text-foreground font-medium">Master of Science in Information Technology</div>
//                     <div className="text-muted-foreground">Carnegie Mellon University</div>
//                     <div className="text-xs text-muted-foreground">July 2022 - May 2024</div>
//                   </div>
//                   <div>
//                     <div className="text-foreground font-medium">Bachelor of Science with Honor</div>
//                     <div className="text-muted-foreground">Computer and Software Engineering, University of Rwanda</div>
//                     <div className="text-xs text-muted-foreground">Nov 2017 - Dec 2021</div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="mt-24 pt-12 border-t border-border">
//         <div className="text-center text-sm text-muted-foreground">
//           <p>© 2025 Lucien Shema. All rights reserved.</p>
//           <p className="mt-2">Built with Next.js, React, and Tailwind CSS</p>
//         </div>
//       </footer>
//     </section>
//   )
// }

// import { Card } from "@/components/ui/card"
// import { Mail, Linkedin, Github, Phone } from "lucide-react"
// import { getProfile } from "@/lib/db"

// export async function ContactSection() {
//   const profile = await getProfile()

//   return (
//     <section id="contact" className="py-24 px-4 lg:px-8 border-t border-border">
//       <div className="container mx-auto">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Get In Touch</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-3xl font-bold mb-6 text-balance">{"Let's build something amazing together"}</h3>
//               <p className="text-muted-foreground leading-relaxed mb-8">
//                 I'm always interested in hearing about new projects and opportunities. Whether you have a question or
//                 just want to say hi, feel free to reach out!
//               </p>

//               <div className="space-y-4">
//                 {profile?.email && (
//                   <Card className="p-4 border-border bg-card/50">
//                     <div className="flex items-center gap-3">
//                       <Mail className="h-5 w-5 text-primary" />
//                       <div>
//                         <div className="text-xs text-muted-foreground mb-1">Email</div>
//                         <a href={`mailto:${profile.email}`} className="text-sm hover:text-primary transition-colors">
//                           {profile.email}
//                         </a>
//                       </div>
//                     </div>
//                   </Card>
//                 )}

//                 {profile?.phone && (
//                   <Card className="p-4 border-border bg-card/50">
//                     <div className="flex items-center gap-3">
//                       <Phone className="h-5 w-5 text-primary" />
//                       <div>
//                         <div className="text-xs text-muted-foreground mb-1">Phone</div>
//                         <a href={`tel:${profile.phone}`} className="text-sm hover:text-primary transition-colors">
//                           {profile.phone}
//                         </a>
//                       </div>
//                     </div>
//                   </Card>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-4">
//               {profile?.linkedin_url && (
//                 <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
//                   <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <Linkedin className="h-6 w-6 text-primary" />
//                         <div>
//                           <div className="font-medium">LinkedIn</div>
//                           <div className="text-sm text-muted-foreground">Connect professionally</div>
//                         </div>
//                       </div>
//                       <span className="text-muted-foreground">→</span>
//                     </div>
//                   </Card>
//                 </a>
//               )}

//               {profile?.github_url && (
//                 <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
//                   <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-4">
//                         <Github className="h-6 w-6 text-primary" />
//                         <div>
//                           <div className="font-medium">GitHub</div>
//                           <div className="text-sm text-muted-foreground">View my repositories</div>
//                         </div>
//                       </div>
//                       <span className="text-muted-foreground">→</span>
//                     </div>
//                   </Card>
//                 </a>
//               )}

//               <Card className="p-6 border-border bg-card/30">
//                 <h4 className="font-medium mb-2">Education</h4>
//                 <div className="space-y-3 text-sm">
//                   <div>
//                     <div className="text-foreground font-medium">Master of Science in Information Technology</div>
//                     <div className="text-muted-foreground">Carnegie Mellon University</div>
//                     <div className="text-xs text-muted-foreground">July 2022 - May 2024</div>
//                   </div>
//                   <div>
//                     <div className="text-foreground font-medium">Bachelor of Science with Honor</div>
//                     <div className="text-muted-foreground">Computer and Software Engineering, University of Rwanda</div>
//                     <div className="text-xs text-muted-foreground">Nov 2017 - Dec 2021</div>
//                   </div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//       <footer className="mt-24 pt-12 border-t border-border">
//         <div className="text-center text-sm text-muted-foreground">
//           <p>© 2025 Lucien Shema. All rights reserved.</p>
//           <p className="mt-2">Built with Next.js, React, and Tailwind CSS</p>
//         </div>
//       </footer>
//     </section>
//   )
// }



// components/contact-section.tsx
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react"
import { getProfile, getEducation } from "@/lib/db"

export async function ContactSection() {
  const profile = await getProfile()
  const education = await getEducation()

  return (
    <section id="contact" className="py-24 px-4 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-balance">
                {"Let's build something amazing together"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities in agricultural technology, 
                machine learning, and full-stack development. Whether you have a question or just want to say hi, 
                feel free to reach out!
              </p>

              <div className="space-y-4">
                {profile?.email && (
                  <Card className="p-4 border-border bg-card/50">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Email</div>
                        <a href={`mailto:${profile.email}`} className="text-sm hover:text-primary transition-colors">
                          {profile.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                )}

                {profile?.phone && (
                  <Card className="p-4 border-border bg-card/50">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Phone</div>
                        <a href={`tel:${profile.phone}`} className="text-sm hover:text-primary transition-colors">
                          {profile.phone}
                        </a>
                      </div>
                    </div>
                  </Card>
                )}

                {profile?.location && (
                  <Card className="p-4 border-border bg-card/50">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Location</div>
                        <div className="text-sm">{profile.location}</div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {profile?.linkedin_url && (
                <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                  <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Linkedin className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-medium">LinkedIn</div>
                          <div className="text-sm text-muted-foreground">Connect professionally</div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">→</span>
                    </div>
                  </Card>
                </a>
              )}

              {profile?.github_url && (
                <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
                  <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Github className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-medium">GitHub</div>
                          <div className="text-sm text-muted-foreground">View my repositories</div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">→</span>
                    </div>
                  </Card>
                </a>
              )}

              {education && education.length > 0 && (
                <Card className="p-6 border-border bg-card/30">
                  <h4 className="font-medium mb-4">Education</h4>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div key={edu.id} className="text-sm">
                        <div className="text-foreground font-medium">{edu.degree}</div>
                        <div className="text-muted-foreground">{edu.field_of_study}</div>
                        <div className="text-muted-foreground">{edu.institution}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {new Date(edu.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {' '}
                          {edu.end_date 
                            ? new Date(edu.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                            : 'Present'
                          }
                        </div>
                        {edu.grade && (
                          <div className="text-xs text-primary mt-1">{edu.grade}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lucien Shema. All rights reserved.</p>
          {/* <p className="mt-2">Built with Next.js, React, and Tailwind CSS</p> */}
        </div>
      </footer>
    </section>
  )
}