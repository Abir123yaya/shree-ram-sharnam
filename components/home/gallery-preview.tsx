import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CTAButton } from "@/components/cta-button"

const images = [
  { src: "/images/hero.png", alt: "Decorated altar with lamps and marigold flowers" },
  { src: "/images/satsang.png", alt: "Devotees gathered in the prayer hall" },
  { src: "/images/diyas.png", alt: "Rows of glowing oil lamps with marigold petals" },
]

export function GalleryPreview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments of Devotion"
          description="Glimpses of prayer, celebration, and community life at Shree Ram Sharnam."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-3xl border border-border shadow-sm ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={600}
                height={450}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <CTAButton href="/gallery" variant="secondary">
            View Full Gallery
            <ArrowRight className="size-5" aria-hidden="true" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
