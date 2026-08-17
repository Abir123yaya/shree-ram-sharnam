import type { Metadata } from "next"
import { MapPin, Mail, Phone, CalendarClock, ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shree Ram Sharnam New Hyde Park. Find our address, phone numbers, email, and satsang schedule.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="We'd Love to Hear From You"
        title="Contact & Visit"
        description="Whether you are planning your first visit or wish to get involved, we are always happy to connect."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: details */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Get in Touch</h2>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <address className="mt-1 not-italic leading-relaxed text-muted-foreground">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </address>
                  <a
                    href={siteConfig.maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Get Directions
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CalendarClock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Weekly Satsang</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {siteConfig.satsang.day}
                    <br />
                    <span className="font-medium text-foreground">{siteConfig.satsang.time}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 inline-block text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div className="w-full">
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <ul className="mt-2 space-y-2">
                    {siteConfig.contacts.map((c) => (
                      <li key={c.tel} className="flex flex-wrap items-baseline justify-between gap-x-3 border-b border-border/60 pb-2 last:border-0">
                        <span className="text-foreground">{c.name}</span>
                        <a
                          href={`tel:${c.tel}`}
                          className="font-medium text-primary underline-offset-4 hover:underline"
                        >
                          {c.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Map showing Shree Ram Sharnam New Hyde Park location"
                src={siteConfig.maps.embed}
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Send a Message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and your email app will open with your message ready to
                send.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
