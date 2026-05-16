"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import Reveal from "./reveal"

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H9.337V9h3.41v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.106 0-2-.896-2-2 0-1.105.894-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zm1.786 13.019H3.55V9h3.573v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const INFO = [
  { Icon: Mail, label: "Email", value: "samimrrza1@gmail.com", href: "mailto:samimrrza1@gmail.com" },
  { Icon: Phone, label: "Phone", value: "(+91) 9036980731", href: "tel:+919036980731" },
  { Icon: MapPin, label: "Location", value: "Bangalore, Karnataka", href: null },
  { Icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/samimrrza", href: "https://linkedin.com/in/samimrrza" },
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(null) // { type: "success"|"error", msg }
  const [client, setClient] = useState(false)

  useEffect(() => { setClient(true) }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 5000)
    return () => clearTimeout(t)
  }, [toast])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to send message")
      setForm({ name: "", email: "", phone: "", subject: "", message: "" })
      setToast({ type: "success", msg: "Message sent! I'll get back to you soon." })
    } catch (err) {
      setToast({ type: "error", msg: err.message || "Something went wrong. Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="container py-16 scroll-mt-16 space-y-10">

      <Reveal>
        <div className="text-center space-y-3">
          <p className="section-heading-kicker">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold">Let's Talk</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project, opportunity, or just want to connect? My inbox is always open.
          </p>
        </div>
      </Reveal>

      {/* Toast */}
      {client && toast && (
        <div className={`max-w-xl mx-auto flex items-center gap-3 p-4 rounded-xl border animate-fade-in ${toast.type === "success"
            ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-300"
            : "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300"
          }`}>
          {toast.type === "success"
            ? <CheckCircle className="h-5 w-5 shrink-0" />
            : <AlertCircle className="h-5 w-5 shrink-0" />}
          <p className="text-sm font-medium">{toast.msg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {/* Info column */}
        <div className="space-y-4">
          {INFO.map(({ Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 150} direction="right">
              <div className="glass-card p-4 flex items-center gap-4 hover:border-primary/30 transition-all">
                <div className="shrink-0 p-2.5 rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  {href
                    ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors truncate block">
                      {value}
                    </a>
                    : <p className="text-sm font-medium text-foreground">{value}</p>
                  }
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <Reveal delay={200} direction="left" className="lg:col-span-2">
          <div className="glass-card p-6 h-full">
            <h3 className="font-semibold text-lg mb-5">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium">Name <span className="text-destructive">*</span></label>
                  <Input id="name" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name" required />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="Your phone number" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">Email <span className="text-destructive">*</span></label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium">Subject <span className="text-destructive">*</span></label>
                <Input id="subject" name="subject" value={form.subject} onChange={handleChange}
                  placeholder="What's this about?" required />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium">Message <span className="text-destructive">*</span></label>
                <Textarea id="message" name="message" value={form.message} onChange={handleChange}
                  placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full gap-2 shadow-sm shadow-primary/20" disabled={submitting}>
                {submitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <><Send className="h-4 w-4" /> Send Message</>
                )}
              </Button>
            </form>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
