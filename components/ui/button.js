import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn inline-flex select-none items-center justify-center whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--logo)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--body-bg)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-main",
        outline: "btn-ghost",
        subtle: "btn-subtle",
        contrast: "btn-contrast",
        whatsapp: "btn-whatsapp",
      },
      size: {
        default: "",
        sm: "min-h-10 px-4 py-2 text-sm",
        lg: "min-h-14 px-7 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({ asChild = false, className, size, variant, ...props }) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ className, size, variant }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
