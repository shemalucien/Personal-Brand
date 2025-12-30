// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Mail } from "lucide-react"

// export function NewsletterCTA() {
//   const [email, setEmail] = useState("")
//   const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
//   const [message, setMessage] = useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setStatus("loading")

//     try {
//       const response = await fetch("/api/newsletter/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setStatus("success")
//         setMessage("Thanks for subscribing! Check your email to confirm.")
//         setEmail("")
//       } else {
//         setStatus("error")
//         setMessage(data.error || "Something went wrong. Please try again.")
//       }
//     } catch (error) {
//       setStatus("error")
//       setMessage("Something went wrong. Please try again.")
//     }
//   }

//   return (
//     <div className="my-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
//       <div className="max-w-xl mx-auto text-center">
//         <div className="flex justify-center mb-4">
//           <div className="p-3 bg-primary/10 rounded-full">
//             <Mail className="h-6 w-6 text-primary" />
//           </div>
//         </div>
//         <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
//         <p className="text-muted-foreground mb-6">
//           Get notified when I publish new articles about technology, machine learning, and building impactful solutions.
//         </p>

//         <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             disabled={status === "loading" || status === "success"}
//             className="flex-1"
//           />
//           <Button type="submit" disabled={status === "loading" || status === "success"}>
//             {status === "loading" ? "Subscribing..." : "Subscribe"}
//           </Button>
//         </form>

//         {message && (
//           <p className={`mt-4 text-sm ${status === "success" ? "text-green-600" : "text-destructive"}`}>{message}</p>
//         )}
//       </div>
//     </div>
//   )
// }

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage("Thanks for subscribing! Check your email to confirm.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="my-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Mail className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-muted-foreground mb-6">
          Get notified when I publish new articles about technology, machine learning, and building impactful solutions.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1"
          />
          <Button type="submit" disabled={status === "loading" || status === "success"}>
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        {message && (
          <p className={`mt-4 text-sm ${status === "success" ? "text-green-600" : "text-destructive"}`}>{message}</p>
        )}
      </div>
    </div>
  )
}

