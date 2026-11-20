type Props = {
  id?: string;
  no?: string;
  label: string;
  children: React.ReactNode;
  grid?: boolean;
  dark?: boolean;
  className?: string;
};

/** Sekcija numerisana kao list tehničke dokumentacije */
export default function Section({ id, no, label, children, grid, dark, className = "" }: Props) {
  const gridCls = grid ? (dark ? "grid-paper-dark" : "grid-paper") : "";
  return (
    <section id={id} className={`relative ${dark ? "bg-ink text-paper" : ""} ${gridCls} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative">
          <div data-draw className={`absolute inset-x-0 top-0 h-px ${dark ? "bg-paper/40" : "bg-ink"}`} />
          <div className="flex items-baseline justify-between pt-4 font-mono text-[11px] uppercase tracking-[0.16em]">
            <span>
              {no && <span className="text-signal">{no} </span>}
              <span className={dark ? "text-paper/60" : "text-ink/60"}>/ {label}</span>
            </span>
            <span className={`hidden sm:inline ${dark ? "text-paper/40" : "text-ink/40"}`}>
              Floriks · list {no ?? "—"}
            </span>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
