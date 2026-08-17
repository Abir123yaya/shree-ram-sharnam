import { Hero } from "@/components/home/hero"
import { Welcome } from "@/components/home/welcome"
import { SatsangBanner } from "@/components/home/satsang-banner"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { DonateCTA } from "@/components/home/donate-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <SatsangBanner />
      <GalleryPreview />
      <DonateCTA />
    </>
  )
}
