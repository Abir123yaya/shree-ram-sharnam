import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 active:translate-y-px [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5",
        secondary:
          "bg-card text-foreground border border-border shadow-sm hover:bg-secondary hover:-translate-y-0.5",
        outlineLight:
          "border border-white/70 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
        gold: "bg-[--color-gold] text-foreground shadow-lg shadow-[--color-gold]/25 hover:brightness-105 hover:-translate-y-0.5",
      },
      size: {
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

type CTAButtonProps = {
  className?: string
  href?: string
  external?: boolean
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  "aria-label"?: string
} & VariantProps<typeof ctaVariants>

export function CTAButton({
  className,
  href,
  external,
  disabled,
  variant,
  size,
  children,
  onClick,
  ...props
}: CTAButtonProps) {
  const classes = cn(ctaVariants({ variant, size }), className)

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" disabled={disabled} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
