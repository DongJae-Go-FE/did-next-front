import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function SubLayout({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full min-h-[calc(100dvh-360px)] flex max-w-[1400px] mx-auto", className)}
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
      className={cn("w-[calc(100%-240px)] px-12 py-10 max-[767px]:w-full max-[767px]:px-5", className)}
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
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function BackDrop({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("absolute inset-0 z-10 backdrop-brightness-75", className)}
      {...props}
    />
  );
}

export { SubLayout, SubContentContainer, SubContentTitle, BackDrop };
