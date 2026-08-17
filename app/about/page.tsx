import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, HandHeart, Music, Sun } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { CTAButton } from "@/components/cta-button"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shree Ram Sharnam New Hyde Park — our devotion to Ram, our spiritual tradition, and the community we nurture together.",
}

const practices = [
  {
    icon: Music,
    title: "Naam Simran & Bhajans",
    text: "Collective chanting of the divine name of Ram and soul-stirring devotional songs.",
  },
  {
    icon: BookOpen,
    title: "Scripture & Satsang",
    text: "Reflection on sacred teachings that guide us toward truth, humility, and love.",
  },
  {
    icon: Sun,
    title: "Meditation & Prayer",
    text: "Quiet contemplation that cultivates inner stillness and spiritual awareness.",
  },
  {
    icon: HandHeart,
    title: "Seva & Service",
    text: "Selfless service to the community as a living expression of devotion.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Rooted in Devotion to Ram"
        description="Shree Ram Sharnam New Hyde Park is a spiritual sanctuary dedicated to the loving remembrance of Ram and the timeless teachings of our revered saints."
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-[--color-gold]/20 blur-2xl"
            />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/saints.png"
                alt="Portrait of the revered saints of Shree Ram Sharnam"
                width={1050}
                height={880}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Tradition"
              title="A Path of Love and Remembrance"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Shree Ram Sharnam is a spiritual movement centered on the simple
                yet profound practice of remembering Ram — chanting the divine
                name with love, devotion, and surrender. This gentle path is open
                to all, requiring nothing but a sincere and open heart.
              </p>
              <p>
                Our New Hyde Park community carries this sacred tradition forward
                in the New York area. Each week, devotees come together to pray,
                sing, meditate, and support one another, creating a warm extended
                family united in faith.
              </p>
              <p>
                Whether you have practiced for a lifetime or are visiting for the
                first time, you will find a place of peace, belonging, and divine
                grace here.
              </p>
            </div>
            <div className="mt-8">
              <CTAButton href="/contact">Plan Your Visit</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Spiritual Practices"
            description="Every gathering weaves together the practices that nourish body, mind, and soul."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
