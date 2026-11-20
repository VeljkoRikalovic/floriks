import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid-paper border-b border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
          <span className="text-signal">404</span> / Stranica ne postoji
        </p>
        <h1 className="mt-8 max-w-[14ch] font-serif text-[clamp(3rem,8vw,7rem)] leading-[0.92]">
          Ovaj list nije u nacrtu.
        </h1>
        <Link href="/" className="mt-10 inline-block bg-ink px-6 py-4 text-paper hover:bg-signal hover:text-ink">
          Na početnu
        </Link>
      </div>
    </section>
  );
}
