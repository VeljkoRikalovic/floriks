import type { CSSProperties } from "react";

/** Kašnjenje u milisekundama, prosleđeno CSS-u kroz --d */
const d = (ms: number) => ({ "--d": ms }) as CSSProperties;

const S = { stroke: "currentColor", strokeWidth: 1, fill: "none", vectorEffect: "non-scaling-stroke" as const };

/**
 * Animirani nacrt sajta: linije se iscrtavaju, kote se pojavljuju,
 * zatim se blokovi popune i nacrt postaje gotova stranica.
 * Čist CSS, bez JavaScript-a.
 */
export default function Blueprint() {
  return (
    <figure className="blueprint relative">
      <svg
        viewBox="0 0 560 470"
        className="h-auto w-full text-ink"
        role="img"
        aria-label="Nacrt web sajta koji se iscrtava linijama i pretvara u gotovu stranicu"
      >
        {/* ---------- POPUNA (gotov sajt) – ispod linija ---------- */}
        <g>
          <rect x="20" y="20" width="520" height="28" className="fill-in" style={d(3200)} fill="currentColor" fillOpacity="0.06" />
          <rect x="44" y="116" width="270" height="24" className="fill-in" style={d(3300)} fill="currentColor" />
          <rect x="44" y="146" width="200" height="24" className="fill-in" style={d(3380)} fill="currentColor" />
          <rect x="44" y="230" width="112" height="30" className="fill-in" style={d(3500)} fill="var(--color-signal)" />
          <text x="100" y="249" textAnchor="middle" className="fill-in font-sans" style={d(3600)} fontSize="10" fill="var(--color-ink)">
            Pošaljite upit
          </text>
          <text x="221" y="249" textAnchor="middle" className="fill-in font-sans" style={d(3650)} fontSize="10" fill="currentColor">
            Radovi
          </text>
          <rect x="350" y="108" width="166" height="152" className="fill-in" style={d(3420)} fill="currentColor" fillOpacity="0.1" />
          <rect x="44" y="300" width="296" height="96" className="fill-in" style={d(3550)} fill="currentColor" fillOpacity="0.06" />
          <rect x="44" y="68" width="16" height="16" className="fill-in" style={d(3250)} fill="var(--color-signal)" />
        </g>

        {/* ---------- LINIJE (nacrt) ---------- */}
        <g {...S}>
          <rect pathLength={1} className="stroke-draw" style={d(0)} x="20" y="20" width="520" height="420" />
          <line pathLength={1} className="stroke-draw" style={d(350)} x1="20" y1="48" x2="540" y2="48" />
          <rect pathLength={1} className="stroke-draw" style={d(450)} x="30" y="30" width="8" height="8" />
          <rect pathLength={1} className="stroke-draw" style={d(500)} x="44" y="30" width="8" height="8" />
          <rect pathLength={1} className="stroke-draw" style={d(550)} x="58" y="30" width="8" height="8" />
          <rect pathLength={1} className="stroke-draw" style={d(600)} x="150" y="28" width="260" height="12" />

          {/* navigacija */}
          <rect pathLength={1} className="stroke-draw" style={d(700)} x="44" y="68" width="60" height="16" />
          <line pathLength={1} className="stroke-draw" style={d(780)} x1="340" y1="76" x2="370" y2="76" />
          <line pathLength={1} className="stroke-draw" style={d(820)} x1="384" y1="76" x2="414" y2="76" />
          <line pathLength={1} className="stroke-draw" style={d(860)} x1="428" y1="76" x2="458" y2="76" />
          <rect pathLength={1} className="stroke-draw" style={d(900)} x="472" y="66" width="44" height="20" />
          <line pathLength={1} className="stroke-draw" style={d(900)} x1="20" y1="98" x2="540" y2="98" opacity="0.35" />

          {/* naslov */}
          <rect pathLength={1} className="stroke-draw" style={d(1000)} x="44" y="116" width="270" height="24" />
          <rect pathLength={1} className="stroke-draw" style={d(1100)} x="44" y="146" width="200" height="24" />

          {/* tekst */}
          <line pathLength={1} className="stroke-draw" style={d(1200)} x1="44" y1="192" x2="300" y2="192" />
          <line pathLength={1} className="stroke-draw" style={d(1260)} x1="44" y1="204" x2="280" y2="204" />
          <line pathLength={1} className="stroke-draw" style={d(1320)} x1="44" y1="216" x2="210" y2="216" />

          {/* dugmad */}
          <rect pathLength={1} className="stroke-draw" style={d(1400)} x="44" y="230" width="112" height="30" />
          <rect pathLength={1} className="stroke-draw" style={d(1480)} x="166" y="230" width="110" height="30" />

          {/* slika */}
          <rect pathLength={1} className="stroke-draw" style={d(1300)} x="350" y="108" width="166" height="152" />
          <line pathLength={1} className="stroke-draw" style={d(1600)} x1="350" y1="108" x2="516" y2="260" opacity="0.4" />
          <line pathLength={1} className="stroke-draw" style={d(1650)} x1="516" y1="108" x2="350" y2="260" opacity="0.4" />

          {/* donji deo */}
          <line pathLength={1} className="stroke-draw" style={d(1700)} x1="20" y1="282" x2="540" y2="282" opacity="0.35" />
          <rect pathLength={1} className="stroke-draw" style={d(1750)} x="44" y="300" width="296" height="96" />
          <line pathLength={1} className="stroke-draw" style={d(1850)} x1="64" y1="324" x2="230" y2="324" />
          <line pathLength={1} className="stroke-draw" style={d(1900)} x1="64" y1="340" x2="300" y2="340" />
          <line pathLength={1} className="stroke-draw" style={d(1950)} x1="64" y1="352" x2="270" y2="352" />
          <line pathLength={1} className="stroke-draw" style={d(1850)} x1="364" y1="304" x2="516" y2="304" />
          <line pathLength={1} className="stroke-draw" style={d(1900)} x1="364" y1="326" x2="516" y2="326" />
          <line pathLength={1} className="stroke-draw" style={d(1950)} x1="364" y1="348" x2="516" y2="348" />
          <line pathLength={1} className="stroke-draw" style={d(2000)} x1="364" y1="370" x2="516" y2="370" />
          <line pathLength={1} className="stroke-draw" style={d(2050)} x1="364" y1="392" x2="516" y2="392" />
          <line pathLength={1} className="stroke-draw" style={d(2100)} x1="20" y1="414" x2="540" y2="414" opacity="0.35" />
        </g>

        {/* ---------- KOTE I OZNAKE ---------- */}
        <g className="font-mono" fontSize="9" fill="var(--color-signal)" stroke="var(--color-signal)" strokeWidth="1">
          {/* širina */}
          <g className="annot" style={d(200)}>
            <line x1="20" y1="8" x2="540" y2="8" vectorEffect="non-scaling-stroke" />
            <line x1="20" y1="4" x2="20" y2="12" />
            <line x1="540" y1="4" x2="540" y2="12" />
            <rect x="262" y="2" width="36" height="12" fill="var(--color-paper)" stroke="none" />
            <text x="280" y="11" textAnchor="middle" stroke="none">1440</text>
          </g>
          {/* visina */}
          <g className="annot" style={d(400)}>
            <line x1="552" y1="20" x2="552" y2="440" />
            <line x1="548" y1="20" x2="556" y2="20" />
            <line x1="548" y1="440" x2="556" y2="440" />
            <rect x="545" y="222" width="14" height="26" fill="var(--color-paper)" stroke="none" />
            <text x="555" y="236" textAnchor="middle" stroke="none" transform="rotate(-90 555 236)">900</text>
          </g>
          {/* oznake */}
          <g className="annot" style={d(1100)}>
            <line x1="314" y1="128" x2="334" y2="128" />
            <text x="337" y="100" stroke="none">H1 · serif</text>
          </g>
          <g className="annot" style={d(1500)}>
            <line x1="100" y1="260" x2="100" y2="272" />
            <text x="104" y="274" stroke="none">CTA → #kontakt</text>
          </g>
          <g className="annot" style={d(1700)}>
            <text x="356" y="274" stroke="none">IMG 4:3 · webp</text>
          </g>
        </g>
      </svg>

      <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
        <span className="relative inline-block">
          <span className="state-draft">Nacrt · rev. 01</span>
          <span className="state-done absolute left-0 top-0 whitespace-nowrap text-ink">Gotovo · rev. 02</span>
        </span>
        <span>Razmera 1:4</span>
      </figcaption>
    </figure>
  );
}
