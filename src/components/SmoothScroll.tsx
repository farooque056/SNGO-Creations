import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Add lenis classes to html for potential CSS styling
    document.documentElement.classList.add("lenis", "lenis-smooth");

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Force a resize check after a short delay to account for dynamic content
    setTimeout(() => {
      lenis.resize();
    }, 500);

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return <div className="relative w-full overflow-x-hidden">{children}</div>;
};
