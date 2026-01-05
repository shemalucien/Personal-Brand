// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"

// export function Navigation() {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId)
//     element?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
//       }`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <button
//             onClick={() => scrollToSection("hero")}
//             className="text-lg font-semibold hover:text-primary transition-colors"
//           >
//             Lucien Shema
//           </button>

//           <div className="hidden md:flex items-center gap-8">
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection("experience")}
//               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Experience
//             </button>
//             <button
//               onClick={() => scrollToSection("skills")}
//               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Skills
//             </button>
//             <button
//               onClick={() => scrollToSection("projects")}
//               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//             >
//               Projects
//             </button>
//             <Button
//               onClick={() => scrollToSection("contact")}
//               size="sm"
//               className="bg-primary text-primary-foreground hover:bg-primary/90"
//             >
//               Contact
//             </Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const SECTIONS = ["hero", "about", "experience", "skills", "projects", "contact"]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")

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
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold hover:text-primary transition-colors"
          >
            Lucien Shema
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={navItemClass("about")}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className={navItemClass("experience")}
            >
              Experience
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className={navItemClass("skills")}
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className={navItemClass("projects")}
            >
              Projects
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              variant={activeSection === "contact" ? "default" : "outline"}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
