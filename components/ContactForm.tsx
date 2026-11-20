"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services, contact } from "@/lib/data";

type Status = { kind: "idle" | "sending" | "ok" | "error"; msg?: string };

const field =
  "w-full border-0 border-b border-ink/40 bg-transparent px-0 py-3 text-base outline-none transition-colors placeholder:text-ink/35 focus:border-ink focus-visible:outline-none";
const label = "font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55";

export default function ContactForm() {
  const params = useSearchParams();
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  // Usluga izabrana preko linka "Pošaljite upit"
  useEffect(() => {
    const u = params.get("usluga");
    if (u && services.some((s) => s.slug === u)) {
      setSelected((prev) => (prev.includes(u) ? prev : [...prev, u]));
    }
  }, [params]);

  const toggle = (slug: string) =>
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/upit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          usluge: selected.map((s) => services.find((x) => x.slug === s)?.title ?? s),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Slanje nije uspelo.");
      setStatus({ kind: "ok" });
      form.reset();
      setSelected([]);
    } catch (err) {
      setStatus({ kind: "error", msg: err instanceof Error ? err.message : "Slanje nije uspelo." });
    }
  }

  if (status.kind === "ok") {
    return (
      <div className="border border-ink p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Upit je poslat</p>
        <p className="mt-3 font-serif text-4xl leading-tight">Hvala. Javljam Vam se u toku jednog radnog dana.</p>
        <p className="mt-4 text-ink/70">
          Ako je hitno, pozovite na{" "}
          <a href={contact.phoneHref} className="font-mono underline underline-offset-4">
            {contact.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-6 border-b border-ink pb-0.5 text-sm"
        >
          Pošaljite još jedan upit
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Ime i prezime *</span>
          <input name="ime" required autoComplete="name" className={field} placeholder="Petar Petrović" />
        </label>
        <label className="block">
          <span className={label}>Firma</span>
          <input name="firma" autoComplete="organization" className={field} placeholder="Naziv firme" />
        </label>
        <label className="block">
          <span className={label}>Email *</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="ime@firma.rs" />
        </label>
        <label className="block">
          <span className={label}>Telefon</span>
          <input name="telefon" type="tel" autoComplete="tel" className={field} placeholder="+381 6x xxx xxxx" />
        </label>
      </div>

      <fieldset>
        <legend className={label}>Šta Vam treba</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {services.map((s) => {
            const on = selected.includes(s.slug);
            return (
              <label
                key={s.slug}
                className={`cursor-pointer border px-3 py-2 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-signal ${
                  on ? "border-ink bg-ink text-paper" : "border-ink/35 hover:border-ink"
                }`}
              >
                <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(s.slug)} />
                <span className={`mr-2 font-mono text-[10px] ${on ? "text-signal" : "text-ink/45"}`}>{s.no}</span>
                {s.title}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className={label}>Poruka *</span>
        <textarea
          name="poruka"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="Par rečenica: čime se bavite, šta Vam treba, da li već imate sajt i do kada Vam treba."
        />
      </label>

      {/* zamka za botove */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="bg-ink px-7 py-4 text-paper transition-colors hover:bg-signal hover:text-ink disabled:opacity-60"
        >
          {status.kind === "sending" ? "Šaljem…" : "Pošaljite upit"}
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-ink/55">
          Odgovaram u toku jednog radnog dana. Podatke koristim samo da bih Vam odgovorio.
        </p>
      </div>

      {status.kind === "error" && (
        <p role="alert" className="border-l-2 border-signal pl-4 text-sm">
          {status.msg} Pozovite na{" "}
          <a href={contact.phoneHref} className="font-mono underline underline-offset-4">
            {contact.phoneDisplay}
          </a>{" "}
          ili pišite na WhatsApp.
        </p>
      )}
    </form>
  );
}
