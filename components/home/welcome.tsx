import { Heart, Users, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const pillars = [
  {
    icon: Heart,
    title: "Devotion",
    text: "Immerse in the loving remembrance of Ram through prayer, chanting, and meditation.",
  },
  {
    icon: Users,
    title: "Community",
    text: "A welcoming family of devotees supporting one another on the spiritual path.",
  },
  {
    icon: Sparkles,
    title: "Inner Peace",
    text: "Discover stillness, clarity, and lasting joy rooted in the teachings of the saints.",
  },
]

export function Welcome() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Welcome"
          title="A Sacred Space to Come Home To"
          description="Shree Ram Sharnam New Hyde Park carries forward a timeless tradition of devotion to Ram. Whether you are a lifelong devotee or simply seeking peace, our doors are open to you."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
