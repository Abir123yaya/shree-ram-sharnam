import type { Metadata } from "next"
import { CalendarClock, Clock, MapPin, Sparkles } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CTAButton } from "@/components/cta-button"
import { satsangCalendar2026, weeklyEvent, siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join weekly Saturday satsang, special events, and Purnima Jaap at Shree Ram Sharnam New Hyde Park in 2026.",
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

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">New Year Satsang</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">{satsangCalendar2026.newYear.date}</h2>
              <p className="mt-2 text-muted-foreground">{satsangCalendar2026.newYear.details}</p>
            </div>
            <p className="font-semibold text-foreground">{satsangCalendar2026.newYear.time}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">2026 Calendar</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground sm:text-4xl">Special Events Satsang</h2>
          </div>
          <Sparkles className="hidden size-8 text-primary/60 sm:block" aria-hidden="true" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {satsangCalendar2026.specialEvents.map((event) => (
            <article key={event.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold text-primary">{event.date}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{event.title}</h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"><Clock className="size-4" aria-hidden="true" />{event.time}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Shree Amritvani Ji Sankirtan, Granth Path, Bhajan, Maharaj Ji&apos;s Pravachan, Pushpanjali followed by one hour Jaap.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Monthly Devotion</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-foreground">2026 Purnima Jaap</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Purnima Jaap timing is 5:00 PM – 7:00 PM unless noted otherwise.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-border bg-primary/5 px-5 py-3 text-sm font-semibold text-foreground">
                <span>Date</span><span>Day</span><span>Time</span>
              </div>
              <div className="divide-y divide-border">
                {satsangCalendar2026.purnimaJaap.map(([date, day, time]) => (
                  <div key={date} className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-3 text-sm text-muted-foreground"><span>{date}</span><span>{day}</span><span className="text-right">{time}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
