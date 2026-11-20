import type { Metadata } from "next";
import WorkCard from "@/components/WorkCard";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "Radovi – urađeni sajtovi i webshopovi | Floriks",
  description: "Urađeni projekti Floriksa: šta je klijentu trebalo i šta je urađeno.",
  alternates: { canonical: "/radovi" },
};

export default function WorksIndex() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-24 pt-10 md:px-10 md:pt-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
        <span className="text-signal">02</span> / Radovi
      </p>
      <h1 className="mt-10 font-serif text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.02em]">
        Urađeni projekti.
      </h1>
      <div className="mt-10">
        {works.map((w, i) => (
          <WorkCard key={w.slug} work={w} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
