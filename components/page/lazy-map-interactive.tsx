"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import type { Locale } from "@/app/(nation)/_lib/content";

type MapInteractiveComponent = ComponentType<{ locale?: Locale }>;

function MapPlaceholder() {
  return (
    <div className="flex min-h-[460px] items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-400 max-[767px]:min-h-[360px]">
      Loading...
    </div>
  );
}

export default function LazyMapInteractive({
  locale = "kr",
}: {
  locale?: Locale;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [MapInteractive, setMapInteractive] =
    useState<MapInteractiveComponent | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = () => {
      import("./map-interactive").then((module) => {
        if (!cancelled) {
          setMapInteractive(() => module.default);
        }
      });
    };

    if (!containerRef.current || !("IntersectionObserver" in window)) {
      load();
      return () => {
        cancelled = true;
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: "500px 0px" }
    );

    observer.observe(containerRef.current);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-[460px] max-[767px]:min-h-[360px]">
      {MapInteractive ? (
        <MapInteractive locale={locale} />
      ) : (
        <MapPlaceholder />
      )}
    </div>
  );
}
