import { processSteps } from "@/lib/data";

/** Vremenska osa: linija se iscrtava, koraci se pojavljuju redom. */
export default function Process() {
  return (
    <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
      {/* horizontalna osa (desktop) */}
      <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px md:block">
        <div data-draw className="h-px w-full bg-ink" style={{ transitionDuration: "1.8s" }} />
      </div>
      {/* vertikalna osa (telefon) */}
      <div aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px md:hidden">
        <div data-draw="y" className="h-full w-px bg-ink" style={{ transitionDuration: "1.8s" }} />
      </div>

      {processSteps.map((s, i) => (
        <li key={s.no} className="relative pl-10 md:pl-0" data-fade data-delay={250 + i * 300}>
          <span
            aria-hidden
            className={`absolute left-0 top-0 block h-[15px] w-[15px] border border-ink ${
              i === processSteps.length - 1 ? "bg-signal" : "bg-paper"
            }`}
          />
          <div className="md:pt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">
              Korak{" "}
              <span className="text-ink" data-count={i + 1} data-pad={2} data-delay={250 + i * 300}>
                {s.no}
              </span>
            </p>
            <h3 className="mt-2 font-serif text-[2rem] leading-none tracking-tight">{s.title}</h3>
            <p className="mt-3 inline-block border border-ink/30 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.12em]">
              {s.days > 0 ? (
                <>
                  Okvirno: <span>{s.duration}</span>
                </>
              ) : (
                <>Trajanje: {s.duration}</>
              )}
            </p>
            <p className="mt-4 max-w-[32ch] text-[15px] leading-relaxed text-ink/75">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
