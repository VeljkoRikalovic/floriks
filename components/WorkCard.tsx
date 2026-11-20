import Image from "next/image";
import Link from "next/link";
import Arrow from "./Arrow";
import type { Work } from "@/lib/data";

export default function WorkCard({ work, flip = false }: { work: Work; flip?: boolean }) {
  return (
    <article className="relative grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <div data-draw className="absolute inset-x-0 top-0 h-px bg-ink/25" />

      {/* snimak ekrana */}
      <Link
        href={`/radovi/${work.slug}`}
        className={`group block md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}
        aria-label={`Detaljnije o projektu ${work.domain}`}
      >
        <div className="border border-ink bg-paper">
          <div className="flex items-center gap-2 border-b border-ink px-3 py-2">
            <span className="h-2 w-2 border border-ink" />
            <span className="h-2 w-2 border border-ink" />
            <span className="h-2 w-2 border border-ink" />
            <span className="ml-3 font-mono text-[11px] text-ink/60">{new URL(work.url).host}</span>
          </div>
          <div className="m-3 overflow-hidden border border-ink/15">
            <Image
              src={work.screenshot.src}
              width={work.screenshot.width}
              height={work.screenshot.height}
              alt={work.screenshot.alt}
              sizes="(min-width: 1400px) 760px, (min-width: 768px) 56vw, 92vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </div>
      </Link>

      {/* opis */}
      <div className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : ""}`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
          <span className="text-signal">Rad {work.no}</span> · {work.type}
        </p>
        <h3 className="mt-3 font-serif text-[clamp(2.4rem,5vw,3.75rem)] leading-[0.95] tracking-tight">
          {work.domain}
        </h3>

        <dl className="mt-8 space-y-6 text-[15px] leading-relaxed">
          <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-ink/20 pt-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50">Zadatak</dt>
            <dd className="text-ink/80">{work.need}</dd>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-ink/20 pt-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50">Urađeno</dt>
            <dd>
              <ul className="space-y-1 text-ink/80">
                {work.done.map((d) => (
                  <li key={d}>— {d}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <Link href={`/radovi/${work.slug}`} className="group inline-flex items-center gap-2 border-b border-ink pb-0.5 hover:text-signal">
            Ceo opis projekta <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a href={work.url} target="_blank" rel="noopener" className="border-b border-ink/30 pb-0.5 text-ink/70 hover:text-ink">
            Otvorite sajt ↗
          </a>
        </div>
      </div>
    </article>
  );
}
