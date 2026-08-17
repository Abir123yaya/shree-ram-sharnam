import type { Metadata } from "next"
import { Heart, HandHeart, Building2, Sparkles } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CTAButton } from "@/components/cta-button"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Shree Ram Sharnam New Hyde Park. Your generous seva helps sustain our satsang, programs, and community.",
}

const impact = [
  {
    icon: HandHeart,
    title: "Sustain Weekly Satsang",
    text: "Keep our prayer gatherings open and welcoming to all who seek peace and devotion.",
  },
  {
    icon: Sparkles,
    title: "Celebrate Festivals",
    text: "Help us host Ram Navami, Guru Purnima, Diwali, and other cherished celebrations.",
  },
  {
    icon: Building2,
    title: "Care for Our Space",
    text: "Maintain and improve the ashram so it remains a serene home for the sangat.",
  },
]

export default function DonatePage() {
  const hasLink = siteConfig.GOFUNDME_URL.length > 0

  return (
    <>
      <PageHeader
        eyebrow="Seva & Generosity"
        title="Support Our Ashram"
        description="Your contribution is a form of seva — selfless service that sustains our community and keeps the light of devotion burning."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-secondary/70 via-background to-secondary/40 p-8 text-center shadow-sm sm:p-12">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Heart className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-serif text-3xl font-semibold text-foreground text-balance">
            Give With an Open Heart
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            We are raising funds through GoFundMe to support the ongoing activities and upkeep of
            Shree Ram Sharnam New Hyde Park. Every contribution, big or small, is deeply appreciated
            and used with care.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            {hasLink ? (
              <CTAButton href={siteConfig.GOFUNDME_URL} external className="text-base">
                Donate via GoFundMe
              </CTAButton>
            ) : (
              <>
                <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-muted px-7 py-3 text-base font-semibold text-muted-foreground">
                  <Heart className="size-5" aria-hidden="true" />
                  GoFundMe Link Coming Soon
                </span>
                <p className="text-sm text-muted-foreground">
                  Our campaign will be live shortly. In the meantime, please{" "}
                  <a
                    href="/contact"
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    contact us
                  </a>{" "}
                  to learn how you can help.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Impact */}
        <div className="mt-16">
          <h2 className="text-center font-serif text-2xl font-semibold text-foreground">
            Where Your Gift Goes
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {impact.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
