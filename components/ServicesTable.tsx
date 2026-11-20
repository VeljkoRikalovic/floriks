import Link from "next/link";
import Arrow from "./Arrow";
import { services } from "@/lib/data";

export const inquiryHref = (slug: string) => `/?usluga=${slug}#kontakt`;

export default function ServicesTable() {
  return (
    <div role="table" aria-label="Usluge" className="mt-10">
      <div
        role="row"
        className="hidden grid-cols-12 gap-6 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45 md:grid"
      >
        <span role="columnheader" className="col-span-1">Br.</span>
        <span role="columnheader" className="col-span-4">Usluga</span>
        <span role="columnheader" className="col-span-4">Šta dobijate</span>
        <span role="columnheader" className="col-span-3 text-right">Cena</span>
      </div>

      {services.map((s, i) => (
        <div
          role="row"
          key={s.slug}
          className="group relative grid grid-cols-12 items-baseline gap-x-6 gap-y-3 py-6 transition-colors hover:bg-ink/[0.03] md:py-7"
        >
          <div data-draw data-delay={i * 70} className="absolute inset-x-0 top-0 h-px bg-ink/25" />
          <span role="cell" className="col-span-2 font-mono text-sm text-ink/50 group-hover:text-signal md:col-span-1">
            {s.no}
          </span>
          <Link
            role="cell"
            href={`/usluge/${s.slug}`}
            className="col-span-10 font-serif text-[1.75rem] leading-[1.05] tracking-tight md:col-span-4 md:text-[2.1rem]"
          >
            {s.title}
          </Link>
          <p role="cell" className="col-span-12 text-[15px] leading-relaxed text-ink/75 md:col-span-4">
            {s.short}
          </p>
          <div role="cell" className="col-span-12 flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
            <Link
              href={inquiryHref(s.slug)}
              className="border-b border-ink pb-0.5 text-sm transition-colors hover:border-signal hover:text-signal"
            >
              Pošaljite upit
            </Link>
            <Link
              href={`/usluge/${s.slug}`}
              aria-label={`Detaljnije: ${s.title}`}
              className="flex h-11 w-11 items-center justify-center border border-ink/30 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
            >
              <Arrow />
            </Link>
          </div>
        </div>
      ))}
      <div data-draw className="h-px bg-ink" />
    </div>
  );
}
