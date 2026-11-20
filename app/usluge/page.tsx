import type { Metadata } from "next";
import ServicesTable from "@/components/ServicesTable";

export const metadata: Metadata = {
  title: "Usluge – izrada sajtova, webshopa i AI asistenata | Floriks",
  description:
    "Sve usluge Floriksa: izrada sajtova u Beogradu, izrada webshopa, AI chatbot za Instagram i WhatsApp, kalkulatori, landing stranice, održavanje i white-label za agencije.",
  alternates: { canonical: "/usluge" },
};

export default function ServicesIndex() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-24 pt-10 md:px-10 md:pt-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
        <span className="text-signal">01</span> / Usluge
      </p>
      <h1 className="mt-10 max-w-[14ch] font-serif text-[clamp(2.8rem,7.5vw,7rem)] leading-[0.92] tracking-[-0.02em]">
        Šta pravim. I šta tačno dobijate.
      </h1>
      <ServicesTable />
    </section>
  );
}
