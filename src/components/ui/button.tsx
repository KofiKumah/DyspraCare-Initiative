import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102b4e] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#102b4e] text-white ring-2 ring-[#dce6f2]/60 hover:bg-[#091d38]",
        secondary: "bg-[#102b4e] text-white ring-1 ring-[#dce6f2]/40 hover:bg-[#091d38]",
        quiet: "text-white hover:bg-[#102b4e]",
      },
      size: { default: "", sm: "min-h-10 px-4 py-2 text-sm", icon: "size-11 p-0" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, variant, size, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return <Component className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };