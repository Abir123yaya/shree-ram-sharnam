import Image from "next/image"
import { CalendarClock, MapPin } from "lucide-react"
import { CTAButton } from "@/components/cta-button"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft radiant background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
            {siteConfig.tagline}
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Shree Ram Sharnam
            <span className="block text-primary">New Hyde Park</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            A spiritual home for prayer, devotion, and community. Come chant the
            sacred name of Ram, find inner peace, and grow together in the light
            of divine grace.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <CTAButton href="/about" size="lg">
              Learn About Us
            </CTAButton>
            <CTAButton href="/contact" size="lg" variant="secondary">
              Plan Your Visit
            </CTAButton>
          </div>

          {/* Key facts */}
          <dl className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 text-left shadow-sm backdrop-blur-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <CalendarClock className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Weekly Satsang
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-foreground">
                  {siteConfig.satsang.day}
                  <span className="block font-normal text-muted-foreground">
                    {siteConfig.satsang.time}
                  </span>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 text-left shadow-sm backdrop-blur-sm">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Location
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-foreground">
                  {siteConfig.address.line1}
                  <span className="block font-normal text-muted-foreground">
                    {siteConfig.address.line2}
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Portrait of the revered saints */}
        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-[--color-gold]/20 to-accent/20 blur-2xl"
          />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-primary/10 ring-1 ring-black/5">
            <Image
              src="/images/saints.png"
              alt="Sacred portrait of the revered saints of Shree Ram Sharnam beneath the divine name Ram"
              width={1050}
              height={880}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
