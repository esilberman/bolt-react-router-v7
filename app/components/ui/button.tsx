import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-lg shadow-destructive/20",
        ghost: "btn-ghost",
        "ghost-rainbow": "btn-ghost relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-[#ff0000] before:via-[#ff7f00] before:via-[#ffff00] before:via-[#00ff00] before:via-[#0000ff] before:via-[#4b0082] before:via-[#9400d3] before:to-[#ff00ff] before:bg-[length:200%_200%] before:animate-rainbow before:-z-10",
        "white-rainbow": "btn-white relative before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-[#ff0000] before:via-[#ff7f00] before:via-[#ffff00] before:via-[#00ff00] before:via-[#0000ff] before:via-[#4b0082] before:via-[#9400d3] before:to-[#ff00ff] before:bg-[length:200%_200%] before:animate-rainbow before:-z-10",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }