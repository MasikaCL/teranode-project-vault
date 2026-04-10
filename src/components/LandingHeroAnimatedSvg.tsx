import React, { useEffect, useMemo, useRef } from "react";

import heroSvgRaw from "@/assets/landing-hero-animated.svg?raw";

type Props = {
  className?: string;
  title?: string;
};

const HERO_PULSE_KEYFRAMES = `
@keyframes hero-chip-pulse {
  0%, 100% { filter: drop-shadow(0 0 0px rgba(81, 11, 152, 0)); }
  50% { filter: drop-shadow(0 0 6px rgba(81, 11, 152, 0.3)); }
}

@keyframes hero-blockchain-pulse {
  0%, 100% { filter: drop-shadow(0 0 0px rgba(40, 175, 96, 0)); }
  50% { filter: drop-shadow(0 0 10px rgba(40, 175, 96, 0.55)); }
}
`;

type Snap = {
  el: SVGGElement;
  id: string;
  transition: string;
  opacity: string;
  transform: string;
  animation: string;
};

function qById(svg: SVGSVGElement, id: string) {
  // IDs in this SVG include spaces; attribute selector avoids CSS escaping pain.
  return svg.querySelector<SVGGElement>(`[id="${id}"]`);
}

export function LandingHeroAnimatedSvg({
  className,
  title = "Teranode Sign product interface",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const svgMarkup = useMemo(() => {
    // Ensure keyframes exist inside the SVG.
    return heroSvgRaw.replace(
      /<svg([^>]*)>/i,
      `<svg$1><style>${HERO_PULSE_KEYFRAMES}</style>`
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

    const ids = [
      "sidebar",
      "navbar",
      "content",
      "page-header",
      "right",
      "card-inbox",
      "card-waiting for others",
      "card-completed",
      "title row",
      "right_2",
      "right_3",
      "right_4",
      "badge",
      "badge_2",
      "badge_3",
      // Animate after the interface loads.
      "Action Date",
      "TAGS",
      "PIN",
      // Reveal last, then pulse.
      "Blockchain",
    ] as const;

    const snaps: Snap[] = [];
    for (const id of ids) {
      const el = qById(svg, id);
      if (!el) continue;
      snaps.push({
        el,
        id,
        transition: el.style.transition || "",
        opacity: el.style.opacity || "",
        transform: el.style.transform || "",
        animation: el.style.animation || "",
      });
    }

    const lateIds = ["Action Date", "TAGS", "PIN"] as const;
    const lateSet = new Set<string>(lateIds);
    const blockchainId = "Blockchain";
    const delayedSet = new Set<string>([...lateIds, blockchainId]);

    const setInitialState = () => {
      for (const s of snaps) {
        s.el.style.transition = "none";
        s.el.style.animation = "none";

        // Start hidden/off-position; each element keeps its own transition delays
        // from the exported SVG (we restore them before animating).
        s.el.style.opacity = "0";

        if (lateSet.has(s.id) || s.id === blockchainId) {
          // These come in last, bottom-up.
          s.el.style.transformBox = "fill-box";
          s.el.style.transformOrigin = "center";
          s.el.style.transform = "translateY(16px) scale(0.98)";
          continue;
        }

        if (s.el === qById(svg, "sidebar")) {
          s.el.style.transform = "translateX(-10px)";
        } else if (s.el === qById(svg, "navbar")) {
          s.el.style.transform = "translateY(-8px)";
        } else if (s.el === qById(svg, "content")) {
          s.el.style.transform = "translateY(10px)";
        } else if (s.el === qById(svg, "page-header")) {
          s.el.style.transform = "translateY(8px)";
        } else if (
          s.el === qById(svg, "right") ||
          s.el === qById(svg, "right_2") ||
          s.el === qById(svg, "right_3") ||
          s.el === qById(svg, "right_4")
        ) {
          s.el.style.transform = "translateX(14px)";
        } else if (
          s.el === qById(svg, "card-inbox") ||
          s.el === qById(svg, "card-waiting for others") ||
          s.el === qById(svg, "card-completed") ||
          s.el === qById(svg, "title row")
        ) {
          s.el.style.transform = "translateY(10px) scale(0.99)";
        } else if (
          s.el === qById(svg, "badge") ||
          s.el === qById(svg, "badge_2") ||
          s.el === qById(svg, "badge_3")
        ) {
          s.el.style.transform = "scale(0.96)";
        } else {
          s.el.style.transform = "translateY(8px)";
        }
      }

      void svg.getBoundingClientRect();
    };

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const baseSnaps = snaps.filter((s) => !delayedSet.has(s.id));
          const lateSnaps = snaps.filter((s) => lateSet.has(s.id));

          // Phase 1: interface loads.
          for (const s of baseSnaps) {
            s.el.style.transition = s.transition;
            s.el.style.opacity = s.opacity || "1";
            s.el.style.transform = s.transform || "translate(0px, 0px)";
            s.el.style.animation = s.animation;
          }

          // Phase 2: Action Date, then TAGS, then PIN (bottom-up).
          const revealLate = (id: (typeof lateIds)[number]) => {
            const s = lateSnaps.find((x) => x.id === id);
            if (!s) return;
            s.el.style.transition =
              s.transition ||
              "opacity 900ms cubic-bezier(.2,.9,.2,1), transform 900ms cubic-bezier(.2,.9,.2,1)";
            s.el.style.opacity = s.opacity || "1";
            s.el.style.transform = s.transform || "translate(0px, 0px)";
            s.el.style.animation = s.animation;
          };

          const revealBlockchain = () => {
            const el = qById(svg, blockchainId);
            if (!el) return;
            // Force a readable, ~500ms fade-in for this card.
            el.style.transition =
              "opacity 800ms ease-out, transform 800ms cubic-bezier(.2,.9,.2,1)";
            el.style.opacity = "1";
            el.style.transform = "translate(0px, 0px)";

            // Pulse once it's on screen.
            window.setTimeout(() => {
              el.style.animation = "hero-blockchain-pulse 1.4s ease-in-out infinite";
            }, 950);
          };

          // Give users time to read each item before the next appears.
          window.setTimeout(() => revealLate("Action Date"), 1050);
          window.setTimeout(() => revealLate("TAGS"), 2300);
          window.setTimeout(() => revealLate("PIN"), 3350);
          window.setTimeout(() => revealBlockchain(), 3850);
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
        // Force the injected SVG (which has width/height attrs) to be responsive.
        "[&_svg]:block [&_svg]:w-full [&_svg]:h-auto [&_svg]:max-w-full",
        className ?? "",
      ].join(" ")}
      role="img"
      aria-label={title}
      // SVG is a known local asset; we only inject trusted markup.
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

