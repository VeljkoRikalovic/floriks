import Link from "next/link";
import { contact } from "@/lib/data";

const nav = [
  { href: "/#usluge", label: "Usluge", no: "01" },
  { href: "/#radovi", label: "Radovi", no: "02" },
  { href: "/#proces", label: "Proces", no: "03" },
  { href: "/#agencije", label: "Za agencije", no: "04" },
  { href: "/#pitanja", label: "Pitanja", no: "05" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="group inline-flex items-baseline gap-2" aria-label="Floriks – početna">
          <span className="font-serif text-[1.7rem] leading-none tracking-tight">Floriks</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50 transition-colors group-hover:text-signal">
            BG/RS
          </span>
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="group flex items-baseline gap-1.5 text-sm">
                  <span className="font-mono text-[10px] text-ink/40 group-hover:text-signal">{n.no}</span>
                  <span className="underline-offset-4 group-hover:underline">{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={contact.phoneHref}
            className="hidden font-mono text-xs tracking-tight text-ink/70 hover:text-ink md:block"
          >
            {contact.phoneDisplay}
          </a>
          <Link
            href="/#kontakt"
            className="hidden bg-ink px-4 py-2.5 text-sm text-paper transition-colors hover:bg-signal hover:text-ink sm:inline-block"
          >
            Pošaljite upit
          </Link>

          <details className="relative lg:hidden">
            <summary
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-ink/25"
              aria-label="Otvori meni"
            >
              <span className="flex w-4 flex-col gap-[5px]">
                <span className="block h-px bg-ink" />
                <span className="block h-px bg-ink" />
                <span className="block h-px bg-ink" />
              </span>
            </summary>
            <div className="absolute right-0 top-12 w-64 border border-ink bg-paper p-5">
              <ul className="space-y-3">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-ink/40">{n.no}</span>
                      <span className="text-lg">{n.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="/#kontakt" className="mt-5 block bg-ink px-4 py-3 text-center text-sm text-paper">
                Pošaljite upit
              </a>
              <a href={contact.phoneHref} className="mt-3 block text-center font-mono text-xs">
                {contact.phoneDisplay}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
