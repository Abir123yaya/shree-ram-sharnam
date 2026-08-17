import Image from "next/image"
import { CalendarClock, MapPin, Clock } from "lucide-react"
import { CTAButton } from "@/components/cta-button"
import { siteConfig } from "@/lib/site-config"

export function SatsangBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-64 lg:min-h-full">
              <Image
                src="/images/satsang-hall.png"
                alt="The Shree Amritvani Satsang Hall in New York with portraits of the revered saints on the stage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Join Us
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Weekly Satsang &amp; Prayer
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every week our community gathers to chant the divine name of Ram,
                sing bhajans, and share in collective prayer. All are warmly
                welcome, regardless of background or experience.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <CalendarClock className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{siteConfig.satsang.day}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{siteConfig.satsang.time}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-foreground">{siteConfig.address.full}</span>
                </li>
              </ul>

              <div className="mt-8">
                <CTAButton href="/events">View Events &amp; Schedule</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
