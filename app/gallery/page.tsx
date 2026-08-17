import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { galleryImages } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A glimpse into the devotional life and gatherings at Shree Ram Sharnam New Hyde Park.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Moments of Devotion"
        title="Gallery"
        description="A glimpse into the prayers, celebrations, and community that fill our ashram with warmth and light."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryImages.map((image, i) => (
            <figure
              key={image.src + i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm break-inside-avoid"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={640}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4 text-sm font-medium text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          More photographs from our gatherings and festivals will be added here soon.
        </p>
      </section>
    </>
  )
}
