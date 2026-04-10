import React, { useEffect, useMemo, useRef } from "react";

import disputeSvgRaw from "@/assets/landing-dispute-mode.svg?raw";

type Props = {
  className?: string;
  title?: string;
};

const DISPUTE_KEYFRAMES = `
@keyframes dispute-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
}

@keyframes dispute-stroke-pulse {
  0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 0px rgba(239, 68, 68, 0)); }
  50% { opacity: 1; filter: drop-shadow(0 0 10px rgba(239, 68, 68, 0.35)); }
}

@keyframes dispute-dash-move {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -22; }
}

@keyframes dispute-pill-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0px); }
}
`;

export function LandingDisputeModeAnimatedSvg({
  className,
  title = "Dispute mode — contested documents",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const svgMarkup = useMemo(() => {
    return disputeSvgRaw.replace(
      /<svg([^>]*)>/i,
      `<svg$1><style>${DISPUTE_KEYFRAMES}</style>`
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

    const setInitialState = () => {
      svg.style.transition = "none";
      svg.style.opacity = "0";
      svg.style.transform = "translateY(10px)";
      svg.classList.remove("dispute-on");
      void svg.getBoundingClientRect();
    };

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      requestAnimationFrame(() => {
        svg.style.transition =
          "opacity 700ms cubic-bezier(.2,.9,.2,1), transform 700ms cubic-bezier(.2,.9,.2,1)";
        svg.style.opacity = "1";
        svg.style.transform = "translateY(0px)";
        svg.classList.add("dispute-on");
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
        // Animate internal elements once .dispute-on is applied.
        [
          "[&_svg.dispute-on]:animation-[dispute-float_6s_ease-in-out_infinite]",
          // Red warning frame + linework.
          "[&_svg.dispute-on_path[stroke='#EF4444']]:animation-[dispute-stroke-pulse_1.8s_ease-in-out_infinite]",
          // Dashed connector motion.
          "[&_svg.dispute-on_path[stroke-dasharray][stroke='#EF4444']]:animation-[dispute-dash-move_1.1s_linear_infinite]",
          // The red pill background (soft red fill).
          "[&_svg.dispute-on_path[fill='#FEE2E2']]:opacity-0 [&_svg.dispute-on_path[fill='#FEE2E2']]:animation-[dispute-pill-in_900ms_ease-out_650ms_forwards]",
        ].join(" "),
        className ?? "",
      ].join(" ")}
      role="img"
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

