"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { from: "kupac" | "asistent"; text: string; time: string; took?: string };

/** Unapred zadati scenario za izmišljenu prodavnicu – bez pravog API-ja. */
const SCRIPT: { q: string; a: string; delay: number }[] = [
  {
    q: "Koliko košta i imate li na stanju?",
    a: "Zdravo! Kancelarijska stolica Model K2 košta 14.900 din. Na stanju je u crnoj i sivoj boji. Ako poručite danas do 14h, šaljemo je sutra. Želite li da Vam pošaljem link za poručivanje?",
    delay: 1800,
  },
  {
    q: "Da li dostavljate van Beograda?",
    a: "Da, dostavljamo na teritoriji cele Srbije kurirskom službom, za 1 do 3 radna dana. Plaćanje je pouzećem ili karticom na sajtu.",
    delay: 1500,
  },
  {
    q: "Mogu li da je vidim uživo?",
    a: "Naravno. Izložbeni prostor radi radnim danima od 9 do 19h i subotom od 10 do 15h. Da li želite da Vam rezervišem termin, ili da prosledim pitanje kolegi?",
    delay: 1600,
  },
];

const now = () =>
  new Date().toLocaleTimeString("sr-Latn-RS", { hour: "2-digit", minute: "2-digit" });

export default function ChatDemo() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [used, setUsed] = useState<number[]>([]);
  const logRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const ask = (i: number) => {
    if (typing || used.includes(i)) return;
    const item = SCRIPT[i];
    setUsed((u) => [...u, i]);
    setMsgs((m) => [...m, { from: "kupac", text: item.q, time: now() }]);
    setTyping(true);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [
        ...m,
        {
          from: "asistent",
          text: item.a,
          time: now(),
          took: (item.delay / 1000).toLocaleString("sr-Latn-RS", { minimumFractionDigits: 1 }),
        },
      ]);
    }, item.delay);
  };

  const reset = () => {
    window.clearTimeout(timer.current);
    setMsgs([]);
    setUsed([]);
    setTyping(false);
  };

  const remaining = SCRIPT.map((s, i) => ({ ...s, i })).filter((s) => !used.includes(s.i));

  return (
    <div className="border border-ink bg-paper">
      {/* zaglavlje razgovora */}
      <div className="flex items-center justify-between border-b border-ink px-4 py-3 sm:px-5">
        <div>
          <p className="text-sm font-medium">Primer prodavnica · Instagram poruke</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 translate-y-[-1px] bg-signal" />
            AI asistent aktivan · 24/7
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50 underline-offset-4 hover:text-ink hover:underline"
        >
          Ispočetka
        </button>
      </div>

      {/* tok razgovora */}
      <div
        ref={logRef}
        className="h-[360px] space-y-4 overflow-y-auto px-4 py-5 sm:px-5"
        aria-live="polite"
        aria-label="Razgovor sa AI asistentom"
      >
        {msgs.length === 0 && !typing && (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/40">Razgovor još nije počeo</p>
            <p className="mt-2 max-w-xs text-sm text-ink/60">Izaberite pitanje ispod. Vi ste kupac.</p>
          </div>
        )}

        {msgs.map((m, idx) => (
          <div key={idx} className={`msg-in flex ${m.from === "kupac" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[85%]">
              <p
                className={`mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45 ${
                  m.from === "kupac" ? "text-right" : ""
                }`}
              >
                {m.from === "kupac" ? "Kupac" : "Asistent"} · {m.time}
                {m.took && <span className="text-signal"> · odgovor za {m.took} s</span>}
              </p>
              <p
                className={`px-4 py-3 text-[15px] leading-relaxed ${
                  m.from === "kupac" ? "bg-ink text-paper" : "border border-ink/25 bg-paper"
                }`}
              >
                {m.text}
              </p>
            </div>
          </div>
        ))}

        {typing && (
          <div className="msg-in flex justify-start">
            <div>
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">Asistent piše</p>
              <p className="typing flex gap-1 border border-ink/25 px-4 py-4" aria-label="Asistent piše odgovor">
                <span className="block h-1.5 w-1.5 bg-ink" />
                <span className="block h-1.5 w-1.5 bg-ink" />
                <span className="block h-1.5 w-1.5 bg-ink" />
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ponuđena pitanja */}
      <div className="border-t border-ink px-4 py-4 sm:px-5">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50">
          {remaining.length ? "Pitajte kao kupac" : "To je sve u ovom primeru"}
        </p>
        <div className="flex flex-wrap gap-2">
          {remaining.map((s) => (
            <button
              key={s.i}
              type="button"
              disabled={typing}
              onClick={() => ask(s.i)}
              className="border border-ink px-3 py-2 text-left text-sm transition-colors hover:bg-ink hover:text-paper disabled:cursor-wait disabled:opacity-40"
            >
              {s.q}
            </button>
          ))}
          {!remaining.length && (
            <button
              type="button"
              onClick={reset}
              className="border border-ink px-3 py-2 text-sm hover:bg-ink hover:text-paper"
            >
              Pokreni ponovo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
