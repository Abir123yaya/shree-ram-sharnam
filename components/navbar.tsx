"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks, siteConfig } from "@/lib/site-config"
import { CTAButton } from "@/components/cta-button"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md shadow-sm"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            className="size-11 shrink-0"
            priority
          />
          <span className="font-serif text-xl font-semibold leading-none text-foreground">
            {siteConfig.shortName}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks
            .filter((l) => l.label !== "Donate")
            .map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-4 focus-visible:ring-primary/40",
                      active
                        ? "bg-secondary text-secondary-foreground"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
        </ul>

        <div className="hidden lg:block">
          <CTAButton href="/donate">Donate</CTAButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground outline-none hover:bg-secondary focus-visible:ring-4 focus-visible:ring-primary/40 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks
            .filter((l) => l.label !== "Donate")
            .map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base font-medium transition-colors outline-none focus-visible:ring-4 focus-visible:ring-primary/40",
                      active
                        ? "bg-secondary text-secondary-foreground"
                        : "text-foreground hover:bg-secondary/60",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          <li className="pt-2">
            <CTAButton href="/donate" className="w-full">
              Donate
            </CTAButton>
          </li>
        </ul>
      </div>
    </header>
  )
}
