import React, { useEffect, useMemo, useRef } from "react";

import multipartySvgRaw from "@/assets/landing-multiparty-animated.svg?raw";

type Props = {
  className?: string;
  title?: string;
};

const MULTIPARTY_PULSE_KEYFRAMES = `
@keyframes multiparty2-pulse {
  0%, 100% { filter: drop-shadow(0 0 0px rgba(79, 0, 158, 0)); }
  50% { filter: drop-shadow(0 0 8px rgba(79, 0, 158, 0.35)); }
}
`;

type Snap = {
  el: SVGGraphicsElement;
  transition: string;
  opacity: string;
  transform: string;
  animation: string;
  filter: string;
};

function initialTransformFrom(original: string) {
  const t = original || "";
  if (/translateX\(/i.test(t)) return "translateX(14px)";
  if (/translateY\(/i.test(t) && /scale\(/i.test(t)) return "translateY(10px) scale(0.99)";
  if (/translateY\(/i.test(t)) return "translateY(10px)";
  if (/scale\(/i.test(t)) return "scale(0.98)";
  return "translateY(8px)";
}

export function LandingMultipartyAnimatedSvg({
  className,
  title = "Multi-party project collaboration",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const svgMarkup = useMemo(() => {
    // Ensure keyframes exist inside the SVG (the SVG contains `animation: ... multiparty2-pulse`).
    return multipartySvgRaw.replace(
      /<svg([^>]*)>/i,
      `<svg$1><style>${MULTIPARTY_PULSE_KEYFRAMES}</style>`
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const svg = container?.querySelector<SVGSVGElement>("svg") ?? null;
    if (!svg) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    const animated = Array.from(
      svg.querySelectorAll<SVGGraphicsElement>('[style*="transition"], [style*="animation"]')
    );

    const snaps: Snap[] = animated.map((el) => ({
      el,
      transition: (el as any).style?.transition || "",
      opacity: (el as any).style?.opacity || "",
      transform: (el as any).style?.transform || "",
      animation: (el as any).style?.animation || "",
      filter: (el as any).style?.filter || "",
    }));

    const setInitialState = () => {
      for (const s of snaps) {
        // Start from hidden state. We'll restore per-element transitions and delays.
        s.el.style.transition = "none";
        s.el.style.animation = "none";
        s.el.style.opacity = "0";
        s.el.style.transformBox = "fill-box";
        s.el.style.transformOrigin = "center";
        s.el.style.transform = initialTransformFrom(s.transform);

        if (s.filter) s.el.style.filter = "none";
      }

      void svg.getBoundingClientRect();
    };

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          for (const s of snaps) {
            s.el.style.transition = s.transition;
            s.el.style.opacity = s.opacity || "1";
            s.el.style.transform = s.transform || "translate(0px, 0px)";
            s.el.style.filter = s.filter;
            s.el.style.animation = s.animation;
          }
        });
      });
    };

    setInitialState();

    if (typeof IntersectionObserver === "undefined") {
      startAnimation();
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        startAnimation();
        obs.disconnect();
      },
      { threshold: 0.25 }
    );

    obs.observe(svg);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={[
        "[&_svg]:block [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full",
        className ?? "",
      ].join(" ")}
      role="img"
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

