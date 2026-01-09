"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

const SECTIONS = [
  "hero",
  "about",
  "experience",
  "skills",
  "services",
  "testimonials",
  "projects",
  "contact",
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollPosition = window.scrollY + 120

      for (const section of SECTIONS) {
        const element = document.getElementById(section)
        if (!element) continue
        const { offsetTop, offsetHeight } = element
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  const navItemClass = (section: string) =>
    `text-sm transition-colors ${
      activeSection === section
        ? "text-primary font-semibold"
        : "text-muted-foreground hover:text-foreground"
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : ""
      }`}
    >
      <div className="container mx-auto pl-4 pr-2 lg:pl-8 lg:pr-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              Lucien Shema
            </button>
          </div>

          {/* Right: Desktop nav + Contact */}
          <div className="hidden md:flex items-center gap-6">
            {SECTIONS.slice(1, -1).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={navItemClass(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              variant={activeSection === "contact" ? "default" : "outline"}
            >
              Contact
            </Button>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 flex-shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {SECTIONS.slice(1).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-left ${navItemClass(section)}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <div className="pt-4 flex items-center justify-between">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
