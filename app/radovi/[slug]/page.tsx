import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, works } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const w = getWork((await params).slug);
  if (!w) return {};
  return {
    title: `${w.domain} – projekat | Floriks`,
    description: `Projekat ${w.domain}: šta je klijentu trebalo i šta je urađeno.`,
    alternates: { canonical: `/radovi/${w.slug}` },
  };
}

export default async function WorkPage({ params }: Params) {
  const w = getWork((await params).slug);
  if (!w) notFound();

  return (
    <>
      <section className="grid-paper border-b border-ink">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pt-14">
          <nav aria-label="Putanja" className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
            <Link href="/" className="hover:text-ink">Floriks</Link> /{" "}
            <Link href="/radovi" className="hover:text-ink">Radovi</Link> /{" "}
            <span className="text-signal">Rad {w.no}</span>
          </nav>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">{w.type}</p>
          <h1 className="mt-4 font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.02em]">{w.domain}</h1>
          <a href={w.url} target="_blank" rel="noopener" className="mt-6 inline-block border-b border-ink pb-0.5 text-sm hover:text-signal">
            Otvorite sajt ↗
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="border border-ink">
          <div className="flex items-center gap-2 border-b border-ink px-3 py-2">
            <span className="h-2 w-2 border border-ink" />
            <span className="h-2 w-2 border border-ink" />
            <span className="h-2 w-2 border border-ink" />
            <span className="ml-3 font-mono text-[11px] text-ink/60">{new URL(w.url).host}</span>
          </div>
          <div className="m-3 overflow-hidden border border-ink/15">
            <Image
              src={w.screenshot.src}
              width={w.screenshot.width}
              height={w.screenshot.height}
              alt={w.screenshot.alt}
              sizes="(min-width: 1400px) 1300px, 94vw"
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-10">
          {[
            ["A", "Zadatak", <p key="a" className="text-xl leading-relaxed">{w.need}</p>],
            [
              "B",
              "Urađeno",
              <ul key="b" className="space-y-2 text-xl leading-relaxed">
                {w.done.map((d) => (
                  <li key={d}>— {d}</li>
                ))}
              </ul>,
            ],
          ].map(([no, label, body]) => (
            <div key={String(no)} className="contents">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] md:col-span-3">
                <span className="text-signal">{no}</span> <span className="text-ink/60">/ {label}</span>
              </p>
              <div className="relative border-t border-ink/25 pt-5 md:col-span-8 md:col-start-5">{body}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <div className="placeholder-box flex aspect-[4/3] items-center justify-center p-6 text-center md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60">[Snimak ekrana: mobilni prikaz, 390×844 px]</p>
          </div>
          <div className="placeholder-box flex aspect-[4/3] items-center justify-center p-6 text-center md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink/60">[Snimak ekrana: ključna stranica, npr. proizvod ili kontakt]</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-end md:px-10">
          <h2 className="max-w-[18ch] font-serif text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
            Treba Vam nešto slično?
          </h2>
          <Link href="/#kontakt" className="bg-ink px-6 py-4 text-paper transition-colors hover:bg-signal hover:text-ink">
            Pošaljite upit
          </Link>
        </div>
      </section>
    </>
  );
}
