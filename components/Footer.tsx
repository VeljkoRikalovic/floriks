import Link from "next/link";
import { contact, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-[clamp(4.5rem,12vw,9rem)] leading-[0.85] tracking-tight">Floriks</p>
            <p className="mt-6 max-w-sm text-sm text-ink/70">{contact.legalName}</p>
            <p className="mt-1 text-sm text-ink/70">{contact.city}</p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Usluge</p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/usluge/${s.slug}`} className="hover:text-signal">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">Kontakt</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={contact.phoneHref} className="font-mono hover:text-signal">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="font-mono">{contact.email}</li>
              <li className="flex gap-4 pt-2">
                <a href={contact.whatsapp} className="underline underline-offset-4 hover:text-signal">
                  WhatsApp
                </a>
                <a href={contact.viber} className="underline underline-offset-4 hover:text-signal">
                  Viber
                </a>
              </li>
              <li className="pt-2 text-ink/70">
                PIB: <span className="font-mono">{contact.pib}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-2 border-t border-ink/15 pt-6 font-mono text-[11px] text-ink/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Floriks</span>
          <span>Izrada sajtova, webshopova i AI rešenja · Beograd</span>
        </div>
      </div>
    </footer>
  );
}
