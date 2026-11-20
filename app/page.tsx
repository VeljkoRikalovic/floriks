import { Suspense } from "react";
import Link from "next/link";
import Blueprint from "@/components/Blueprint";
import Section from "@/components/Section";
import ServicesTable, { inquiryHref } from "@/components/ServicesTable";
import ChatDemo from "@/components/ChatDemo";
import WorkCard from "@/components/WorkCard";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Arrow from "@/components/Arrow";
import { contact, faq, services, works, SITE_URL } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Floriks",
  legalName: contact.legalName,
  taxID: contact.pib,
  url: SITE_URL,
  telephone: "+381695338913",
  founder: { "@type": "Person", name: "Veljko Rikalović" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barajevo, Beograd",
    addressCountry: "RS",
  },
  areaServed: ["Beograd", "Srbija"],
  knowsLanguage: "sr",
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, url: `${SITE_URL}/usluge/${s.slug}` },
  })),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* ================= HERO ================= */}
      <section className="grid-paper relative overflow-hidden border-b border-ink">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14">
          <div className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
            <span>
              <span className="text-signal">00</span> / Floriks · Beograd
            </span>
            <span className="hidden sm:inline">Sajtovi · Webshop · AI asistenti</span>
          </div>

          <h1 className="mt-10 max-w-[14ch] font-serif text-[clamp(3.2rem,9.2vw,9.5rem)] leading-[0.9] tracking-[-0.02em] md:mt-14">
            Sajtovi koji rade posao<span className="text-signal">.</span>{" "}
            <em className="text-ink/45">Ne samo da lepo izgledaju.</em>
          </h1>

          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4 md:pt-4">
              <p className="text-lg leading-relaxed md:text-xl">
                Floriks pravi sajtove, online prodavnice i AI asistente za firme. Kupac brzo nađe šta mu treba, Vi dobijete upit.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#kontakt"
                  className="bg-ink px-6 py-4 text-paper transition-colors hover:bg-signal hover:text-ink"
                >
                  Pošaljite upit
                </Link>
                <Link
                  href="#radovi"
                  className="group inline-flex items-center gap-2 border border-ink px-6 py-4 transition-colors hover:bg-ink hover:text-paper"
                >
                  Pogledajte radove <Arrow className="h-4 w-4" />
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/25 pt-5 font-mono text-[11px] uppercase tracking-[0.12em]">
                <div>
                  <dt className="text-ink/45">Lokacija</dt>
                  <dd className="mt-1">Barajevo, Beograd</dd>
                </div>
                <div>
                  <dt className="text-ink/45">Odgovor na upit</dt>
                  <dd className="mt-1">1 radni dan</dd>
                </div>
                <div>
                  <dt className="text-ink/45">Jezik</dt>
                  <dd className="mt-1">Srpski</dd>
                </div>
                <div>
                  <dt className="text-ink/45">Telefon</dt>
                  <dd className="mt-1">
                    <a href={contact.phoneHref} className="hover:text-signal">
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <Blueprint />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 01 USLUGE ================= */}
      <Section id="usluge" no="01" label="Usluge" className="pt-20 md:pt-28">
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] tracking-tight md:col-span-8">
            Šta pravim. I šta tačno dobijate.
          </h2>
          <p className="self-end text-ink/70 md:col-span-3 md:col-start-10">
            <span className="font-mono text-signal" data-count={services.length} data-pad={2}>
              {String(services.length).padStart(2, "0")}
            </span>{" "}
            usluga. Cene ne stoje na sajtu jer zavise od obima. Pošaljite upit i dobićete ponudu sa tačnom cenom.
          </p>
        </div>
        <ServicesTable />
        <div className="h-20 md:h-28" />
      </Section>

      {/* ================= DEMO ================= */}
      <section id="demo" className="grid-paper border-y border-ink">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-10 md:py-28">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
              <span className="text-signal">Probajte</span> / AI asistent
            </p>
            <h2 className="mt-6 font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.95] tracking-tight">
              Ovako bi AI asistent odgovarao Vašim kupcima.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink/75">
              Kupac piše na Instagramu, WhatsApp-u ili na sajtu. Asistent odgovara za par sekundi, na srpskom, iz podataka koje mu Vi date: cene, stanje, dostava, radno vreme. Kad ne zna odgovor, prosleđuje razgovor Vama.
            </p>
            <ul className="mt-8 space-y-2 border-t border-ink/25 pt-5 text-[15px]">
              <li>— Radi 24/7, i vikendom</li>
              <li>— Ne izmišlja: koristi samo Vaše podatke</li>
              <li>— Vi vidite svaki razgovor</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <Link href={inquiryHref("ai-asistent")} className="border-b border-ink pb-0.5 hover:text-signal">
                Pošaljite upit za AI asistenta
              </Link>
              <Link href="/usluge/ai-asistent" className="border-b border-ink/30 pb-0.5 text-ink/70 hover:text-ink">
                Kako radi
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ChatDemo />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">
              Demo sa unapred zadatim odgovorima. Prodavnica, proizvod i cena su izmišljeni.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 02 RADOVI ================= */}
      <Section id="radovi" no="02" label="Radovi" className="pt-20 md:pt-28">
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] tracking-tight md:col-span-7">
            Urađeni projekti.
          </h2>
          <p className="self-end text-ink/70 md:col-span-4 md:col-start-9">
            Za svaki rad: šta je klijentu trebalo i šta je urađeno.
          </p>
        </div>
        <div className="mt-10">
          {works.map((w, i) => (
            <WorkCard key={w.slug} work={w} flip={i % 2 === 1} />
          ))}
        </div>
        <div className="flex justify-end border-t border-ink/25 py-6">
          <Link href="/radovi" className="group inline-flex items-center gap-2 text-sm">
            Svi radovi <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="h-12 md:h-20" />
      </Section>

      {/* ================= 03 PROCES ================= */}
      <Section id="proces" no="03" label="Proces" grid className="border-t border-ink/10 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] tracking-tight md:col-span-9">
            Četiri koraka. Bez iznenađenja.
          </h2>
        </div>
        <Process />
        <p className="mt-14 max-w-xl font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink/50">
          Trajanje je okvirno. Tačan rok dobijate u ponudi i on zavisi od obima i od toga kada stigne sadržaj.
        </p>
      </Section>

      {/* ================= 04 ZA AGENCIJE ================= */}
      <Section id="agencije" no="04" label="Za agencije" dark grid className="pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h2 className="font-serif text-[clamp(2.6rem,6.5vw,6rem)] leading-[0.92] tracking-tight">
              Radim pod Vašim imenom<span className="text-signal">.</span>{" "}
              <em className="text-paper/50">Vi zadržavate klijenta.</em>
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/75">
              Za marketing agencije koje nemaju developera. Vi vodite klijenta, kampanje i komunikaciju. Ja pravim sajt, webshop ili landing stranicu, pod Vašim brendom.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={inquiryHref("saradnja-sa-agencijama")}
                className="bg-paper px-6 py-4 text-ink transition-colors hover:bg-signal"
              >
                Pošaljite upit
              </Link>
              <Link
                href="/usluge/saradnja-sa-agencijama"
                className="inline-flex items-center gap-2 border border-paper/50 px-6 py-4 transition-colors hover:border-paper"
              >
                Kako izgleda saradnja <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <dl className="self-end md:col-span-4 md:col-start-9">
            {[
              ["Ime na sajtu", "Vaše. Moje se ne pojavljuje nigde."],
              ["Komunikacija", "Preko Vas, ili direktno u ime Vaše agencije."],
              ["Klijent", "Ostaje Vaš. Ne kontaktiram ga mimo Vas."],
              ["Cena", "Vi određujete cenu prema klijentu."],
              ["Poverljivost", "Ugovor o poverljivosti, ako želite."],
            ].map(([k, v], i) => (
              <div key={k} className="relative py-4">
                <div data-draw data-delay={i * 90} className="absolute inset-x-0 top-0 h-px bg-paper/30" />
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">{k}</dt>
                <dd className="mt-1 text-[15px]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ================= 05 PITANJA ================= */}
      <Section id="pitanja" no="05" label="Česta pitanja" className="pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] tracking-tight md:col-span-4">
            Pitanja koja svi postave.
          </h2>
          <div className="md:col-span-7 md:col-start-6">
            {faq.map((f) => (
              <details key={f.q} className="group border-t border-ink/30 last:border-b">
                <summary className="flex cursor-pointer items-baseline justify-between gap-6 py-6 text-xl md:text-2xl">
                  <span className="font-serif leading-tight">{f.q}</span>
                  <span className="faq-mark font-mono text-xl text-signal transition-transform duration-300">+</span>
                </summary>
                <p className="max-w-[60ch] pb-7 leading-relaxed text-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= 06 KONTAKT ================= */}
      <Section id="kontakt" no="06" label="Kontakt" grid className="border-t border-ink/10 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mt-10 grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <h2 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
              Recite šta Vam treba.
            </h2>
            <p className="mt-6 leading-relaxed text-ink/75">
              Dovoljno je par rečenica. Odgovaram u toku jednog radnog dana sa pitanjima ili sa ponudom.
            </p>

            <div className="mt-10 border-t border-ink pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">Direktno</p>
              <a
                href={contact.phoneHref}
                className="mt-2 block font-mono text-2xl tracking-tight hover:text-signal md:text-[1.7rem]"
              >
                {contact.phoneDisplay}
              </a>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={contact.whatsapp} className="border border-ink px-4 py-3 text-sm transition-colors hover:bg-ink hover:text-paper">
                  WhatsApp
                </a>
                <a href={contact.viber} className="border border-ink px-4 py-3 text-sm transition-colors hover:bg-ink hover:text-paper">
                  Viber
                </a>
              </div>
              <p className="mt-6 font-mono text-sm text-ink/60">{contact.email}</p>
            </div>
          </div>

          <div className="bg-paper md:col-span-7 md:col-start-6 md:border md:border-ink md:p-10">
            <Suspense fallback={<div className="h-[640px]" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </Section>
    </>
  );
}
