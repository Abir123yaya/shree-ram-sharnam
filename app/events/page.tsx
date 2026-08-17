import type { Metadata } from "next"
import { CalendarClock, Clock, MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CTAButton } from "@/components/cta-button"
import { weeklyEvent, siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join our weekly Saturday satsang and annual festival celebrations at Shree Ram Sharnam New Hyde Park.",
}

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gather With Us"
        title="Events & Gatherings"
        description="From our weekly satsang to joyous festival celebrations, there is always a place for you in our sangat."
      />

      {/* Weekly satsang highlight */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-secondary/70 to-background shadow-sm">
          <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <CalendarClock className="size-4" aria-hidden="true" />
                Every Week
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
                {weeklyEvent.title}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                {weeklyEvent.description}
              </p>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <CalendarClock className="size-5 text-primary" aria-hidden="true" />
                  <dt className="sr-only">Day</dt>
                  <dd className="font-medium text-foreground">{weeklyEvent.day}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-5 text-primary" aria-hidden="true" />
                  <dt className="sr-only">Time</dt>
                  <dd className="font-medium text-foreground">{weeklyEvent.time}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                  <dt className="sr-only">Location</dt>
                  <dd className="font-medium text-foreground">{siteConfig.address.line1}</dd>
                </div>
              </dl>
            </div>
            <div className="flex md:justify-end">
              <CTAButton href="/contact">Plan Your Visit</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
