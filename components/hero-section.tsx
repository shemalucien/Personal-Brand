import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { getProfile } from "@/lib/db";
import Link from "next/link";

export async function HeroSection() {
  const profile = await getProfile();
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 lg:px-8 pt-16"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profile?.avatar_url || "/placeholder-profile.jpg"}
                  alt={profile?.title || "Lucien Shema"}
                  className="w-full h-full object-cover object-[center_5%]"
                />
              </div>

              {/* Decorative blur */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 max-w-4xl">
            <Badge variant="secondary" className="mb-6">
              Available for opportunities
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              {profile?.title || "Lucien Shema"}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Full Stack Developer & ML Engineer
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {profile?.bio ||
                "Passionate about leveraging technology to solve real-world problems."}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="group flex items-center bg-primary text-primary-foreground hover:bg-primary/90"
              >
              

                <Link href="#projects" className="flex items-center gap-2 text-lg" >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              {profile?.resume_url && (
                <Button size="lg" variant="outline" asChild>
                  <a
                    href={profile.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
      </div>
    </section>
  );
}
