"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({ name: "", email: "", message: "" })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Open the visitor's email client pre-filled with their message.
    const subject = encodeURIComponent(`Website enquiry from ${values.name || "a visitor"}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const fieldClasses =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/20"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={fieldClasses}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={fieldClasses}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className={`${fieldClasses} resize-y`}
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-lg shadow-primary/25 outline-none transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:ring-4 focus-visible:ring-primary/40 active:translate-y-px"
      >
        <Send className="size-5" aria-hidden="true" />
        Send Message
      </button>

      {submitted && (
        <p
          role="status"
          className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
        >
          <CheckCircle2 className="size-5" aria-hidden="true" />
          Your email app should now be open. Thank you for reaching out!
        </p>
      )}
    </form>
  )
}
