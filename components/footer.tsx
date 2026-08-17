import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, CalendarClock } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt=""
                width={44}
                height={44}
                className="size-11 shrink-0"
              />
              <span className="font-serif text-xl font-semibold text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <address className="mt-4 flex items-start gap-2 not-italic text-muted-foreground">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </span>
            </address>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-flex items-center gap-2 rounded-md text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/40"
            >
              <Mail className="size-5 text-primary" aria-hidden="true" />
              {siteConfig.email}
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-serif text-lg font-semibold text-foreground">Quick Links</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-primary/40"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Satsang */}
          <div>
            <h2 className="font-serif text-lg font-semibold text-foreground">Weekly Satsang</h2>
            <div className="mt-4 flex items-start gap-2 text-muted-foreground">
              <CalendarClock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {siteConfig.satsang.day}
                <br />
                <span className="font-semibold text-foreground">{siteConfig.satsang.time}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
