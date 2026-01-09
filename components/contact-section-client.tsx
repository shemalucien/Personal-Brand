"use client";
// components/contact-section.tsx
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { getProfile, getEducation } from "@/lib/db";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

type Props = {
  profile: any;
  education: any[];
};

export default function ContactSectionClient({ profile, education }: Props) {

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-balance">
                {"Let's build something amazing together"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new projects and
                opportunities in agricultural technology, machine learning, and
                full-stack development. Whether you have a question or just want
                to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                {profile?.email && (
                  <Card className="p-4 border-border bg-card/50">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">
                          Email
                        </div>
                        <a
                          href={`mailto:${profile.email}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
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
                        <div className="text-xs text-muted-foreground mb-1">
                          Phone
                        </div>
                        <a
                          href={`tel:${profile.phone}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
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
                        <div className="text-xs text-muted-foreground mb-1">
                          Location
                        </div>
                        <div className="text-sm">{profile.location}</div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {profile?.linkedin_url && (
                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Linkedin className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-medium">LinkedIn</div>
                          <div className="text-sm text-muted-foreground">
                            Connect professionally
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">→</span>
                    </div>
                  </Card>
                </a>
              )}

              {profile?.github_url && (
                <a
                  href={profile.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="p-6 border-border bg-card hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Github className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-medium">GitHub</div>
                          <div className="text-sm text-muted-foreground">
                            View my repositories
                          </div>
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
                        <div className="text-foreground font-medium">
                          {edu.degree}
                        </div>
                        <div className="text-muted-foreground">
                          {edu.field_of_study}
                        </div>
                        <div className="text-muted-foreground">
                          {edu.institution}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {new Date(edu.start_date).toLocaleDateString(
                            "en-US",
                            { month: "short", year: "numeric" }
                          )}{" "}
                          -{" "}
                          {edu.end_date
                            ? new Date(edu.end_date).toLocaleDateString(
                                "en-US",
                                { month: "short", year: "numeric" }
                              )
                            : "Present"}
                        </div>
                        {edu.grade && (
                          <div className="text-xs text-primary mt-1">
                            {edu.grade}
                          </div>
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

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's work together to create something
            amazing.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 place-items-center">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-5 mx-auto w-full max-w-xl space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 bg-card border-border/50 rounded-xl"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 bg-card border-border/50 rounded-xl"
                />
              </div>
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-12 bg-card border-border/50 rounded-xl"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card border-border/50 rounded-xl resize-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="gradient-primary text-primary-foreground font-medium px-8 py-6 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-border">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lucien Shema. All rights reserved.</p>
          {/* <p className="mt-2">Built with Next.js, React, and Tailwind CSS</p> */}
        </div>
      </footer>
    </section>
  );
}
