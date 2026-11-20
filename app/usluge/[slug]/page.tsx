import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import { inquiryHref } from "@/components/ServicesTable";
import { getService, services, SITE_URL } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/usluge/${s.slug}` },
    openGraph: { title: s.seoTitle, description: s.seoDescription, url: `/usluge/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) notFound();

  const idx = services.findIndex((x) => x.slug === s.slug);
  const next = services[(idx + 1) % services.length];
  const prev = services[(idx - 1 + services.length) % services.length];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.seoDescription,
    areaServed: "Srbija",
    provider: { "@type": "ProfessionalService", name: "Floriks", url: SITE_URL, telephone: "+381695338913" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="grid-paper border-b border-ink">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
          <nav aria-label="Putanja" className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
            <Link href="/" className="hover:text-ink">Floriks</Link> /{" "}
            <Link href="/#usluge" className="hover:text-ink">Usluge</Link> /{" "}
            <span className="text-signal">{s.no}</span>
          </nav>

          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
            <div className="md:col-span-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
                Usluga {s.no} / {String(services.length).padStart(2, "0")} · {s.title}
              </p>
              <h1 className="mt-5 max-w-[16ch] font-serif text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.92] tracking-[-0.02em]">
                {s.headline}
              </h1>
            </div>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <p className="text-lg leading-relaxed md:col-span-6 md:text-xl">{s.intro}</p>
            <div className="flex flex-col items-start gap-4 md:col-span-3 md:col-start-10 md:items-end md:self-end">
              <Link href={inquiryHref(s.slug)} className="bg-ink px-6 py-4 text-paper transition-colors hover:bg-signal hover:text-ink">
                Pošaljite upit
              </Link>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50 md:text-right">
                Cena zavisi od obima. Dobijate ponudu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
              <span className="text-signal">A</span> <span className="text-ink/60">/ Šta dobijate</span>
            </p>
          </div>
          <ol className="md:col-span-8 md:col-start-5">
            {s.deliverables.map((d, i) => (
              <li key={d} className="relative grid grid-cols-[3rem_1fr] items-baseline py-5">
                <div data-draw data-delay={i * 70} className="absolute inset-x-0 top-0 h-px bg-ink/25" />
                <span className="font-mono text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg leading-snug md:text-xl">{d}</span>
              </li>
            ))}
            <div data-draw className="h-px bg-ink" />
          </ol>
        </div>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
              <span className="text-signal">B</span> <span className="text-ink/60">/ Za koga je</span>
            </p>
          </div>
          <ul className="space-y-3 font-serif text-[clamp(1.6rem,3vw,2.4rem)] leading-tight md:col-span-8 md:col-start-5">
            {s.forWhom.map((f) => (
              <li key={f}>— {f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
              <span className="text-signal">C</span> <span className="text-ink/60">/ Napomene</span>
            </p>
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 md:col-span-8 md:col-start-5">
            {s.notes.map((n) => (
              <div key={n.label} className="border-t border-ink pt-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">{n.label}</dt>
                <dd className="mt-2 leading-relaxed">{n.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-ink bg-ink text-paper">
        <div className="grid-paper-dark">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-24">
            <h2 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] tracking-tight md:col-span-8">
              Pošaljite par rečenica. Dobićete ponudu.
            </h2>
            <div className="flex flex-col items-start gap-4 md:col-span-3 md:col-start-10 md:self-end">
              <Link href={inquiryHref(s.slug)} className="bg-paper px-6 py-4 text-ink transition-colors hover:bg-signal">
                Pošaljite upit
              </Link>
              <a href="tel:+381695338913" className="font-mono text-sm text-paper/70 hover:text-paper">
                ili pozovite +381 69 5338913
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Ostale usluge" className="mx-auto grid max-w-[1400px] grid-cols-2 px-5 md:px-10">
        <Link href={`/usluge/${prev.slug}`} className="group border-r border-ink/20 py-8 pr-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">← Prethodna · {prev.no}</span>
          <span className="mt-2 block font-serif text-xl leading-tight group-hover:text-signal md:text-2xl">{prev.title}</span>
        </Link>
        <Link href={`/usluge/${next.slug}`} className="group py-8 pl-4 text-right">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Sledeća · {next.no} →</span>
          <span className="mt-2 block font-serif text-xl leading-tight group-hover:text-signal md:text-2xl">
            {next.title}
          </span>
        </Link>
      </nav>
    </>
  );
}
