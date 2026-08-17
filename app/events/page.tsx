import type { Metadata } from "next"
import { CalendarClock, Clock, MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { CTAButton } from "@/components/cta-button"
import { events, weeklyEvent, siteConfig } from "@/lib/site-config"

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

      {/* Annual events */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Through the Year"
          title="Festivals & Special Occasions"
          description="We come together throughout the year to celebrate the festivals that enrich our devotional life. Dates follow the Hindu lunar calendar — please contact us to confirm each year."
        />
        <ol className="relative mt-12 space-y-8 border-l-2 border-primary/20 pl-6 sm:pl-8">
          {events.map((event) => (
            <li key={event.title} className="relative">
              <span
                className="absolute -left-[calc(1.5rem+7px)] top-1.5 size-3.5 rounded-full border-2 border-background bg-primary sm:-left-[calc(2rem+7px)]"
                aria-hidden="true"
              />
              <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {event.when}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{event.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
