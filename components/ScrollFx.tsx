"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Jedan posmatrač za ceo sajt:
 * [data-draw]  – linija se iscrtava kad uđe u ekran
 * [data-fade]  – blago pojavljivanje
 * [data-count] – broj se odbrojava do vrednosti iz atributa
 */
export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll<HTMLElement>("[data-draw],[data-fade],[data-count]");

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const pad = Number(el.dataset.pad ?? 0);
      const dur = 900;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased)).padStart(pad, "0");
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const delay = Number(el.dataset.delay ?? 0);
          window.setTimeout(() => {
            el.classList.add("is-in");
            if (el.dataset.count !== undefined) countUp(el);
          }, delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    els.forEach((el) => {
      if (el.classList.contains("is-in")) return;
      if (el.dataset.count !== undefined) {
        el.textContent = "0".padStart(Number(el.dataset.pad ?? 0), "0");
      }
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
