import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        white: "btn-white",
        ghost: "btn-ghost",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
      },
      modifier: {
        "rainbow-outline": "rainbow-outline",
        "rainbow-glow": "rainbow-glow",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  modifier,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, modifier, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }