export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">About</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              Full Stack Developer with a{" "}
              <span className="text-primary font-semibold">Master of Science in Information Technology</span> from
              Carnegie Mellon University. Proven experience in developing mobile and web applications, implementing
              machine learning models for data analysis, and designing IoT-based solutions.
            </p>

            <p className="text-muted-foreground">
              I specialize in building scalable, production-ready applications that leverage cutting-edge technologies.
              My expertise spans from developing{" "}
              <span className="text-primary">Android applications with ML integration</span> to creating{" "}
              <span className="text-primary">geospatial AI platforms</span> for agricultural monitoring and
              <span className="text-primary"> IoT systems</span> for real-time logistics tracking.
            </p>

            <p className="text-muted-foreground">
              Currently at TechnoServe, I lead projects focused on sustainability, deforestation-free practices, and
              agricultural innovation. My work includes developing EUDR-compliant mobile applications, building machine
              learning models for crop quality prediction, and creating scalable solutions for aquaculture site
              detection.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Apps on Play Store</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// import { getProfile, getProjects, getExperiences } from "@/lib/db"

// export async function AboutSection() {
//   const profile = await getProfile()
//   const projects = await getProjects()
//   const experiences = await getExperiences()

//   // Calculate years of experience
//   const yearsOfExperience =
//     experiences.length > 0
//       ? Math.ceil(
//           (new Date().getTime() - new Date(experiences[experiences.length - 1].start_date).getTime()) /
//             (1000 * 60 * 60 * 24 * 365),
//         )
//       : 5

//   return (
//     <section id="about" className="py-24 px-4 lg:px-8 border-t border-border">
//       <div className="container mx-auto">
//         <div className="max-w-4xl">
//           <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8">About</h2>

//           <div className="space-y-6 text-lg leading-relaxed">
//             <p className="text-foreground">
//               {profile?.bio || "Full Stack Developer with expertise in machine learning and IoT solutions."}
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <div className="text-4xl font-bold text-primary mb-2">{yearsOfExperience}+</div>
//               <div className="text-sm text-muted-foreground">Years Experience</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-primary mb-2">{projects.length}+</div>
//               <div className="text-sm text-muted-foreground">Projects Completed</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-primary mb-2">3</div>
//               <div className="text-sm text-muted-foreground">Apps on Play Store</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

