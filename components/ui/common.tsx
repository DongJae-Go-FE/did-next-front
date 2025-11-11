import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function SubLayout({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full min-h-[calc(100dvh-360px)] flex", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function SubContentContainer({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-[calc(100%-240px)] p-10 max-[767px]:w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function SubContentTitle({
  className,
  children,
  ...props
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "flex justify-between items-center heading03b text-gray-900 mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export { SubLayout, SubContentContainer, SubContentTitle };
