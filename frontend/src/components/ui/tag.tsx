import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tagVariants = cva(
  "rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground",
  {
    variants: {
      size: {
        sm: "px-2 py-0.5",
        md: "px-3 py-1 font-medium",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ size, className }))}
        {...props}
      />
    );
  }
);
Tag.displayName = "Tag";

export interface TagListProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof tagVariants> {
  tags: string[];
}

const TagList = React.forwardRef<HTMLDivElement, TagListProps>(
  ({ className, size, tags, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-wrap gap-2", className)} {...props}>
        {tags.map((tag, index) => (
          <Tag key={`${tag}-${index}`} size={size}>
            {tag}
          </Tag>
        ))}
      </div>
    );
  }
);
TagList.displayName = "TagList";

export { Tag, TagList, tagVariants };
