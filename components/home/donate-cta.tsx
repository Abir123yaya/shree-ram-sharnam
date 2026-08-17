import { Heart, ArrowRight } from "lucide-react"
import { CTAButton } from "@/components/cta-button"

export function DonateCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center shadow-xl shadow-primary/20 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-primary-foreground/10 blur-2xl"
          />
          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground">
            <Heart className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-balance font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
            Support Our Spiritual Community
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
            Your generosity helps sustain our satsangs, maintain our space, and
            serve devotees for years to come. Every contribution, big or small,
            is a blessing.
          </p>
          <div className="mt-8">
            <CTAButton href="/donate" variant="gold" size="lg">
              Donate Now
              <ArrowRight className="size-5" aria-hidden="true" />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
