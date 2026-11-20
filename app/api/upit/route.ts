import { NextResponse } from "next/server";

type Upit = {
  ime?: string;
  firma?: string;
  email?: string;
  telefon?: string;
  poruka?: string;
  usluge?: string[];
  website?: string; // zamka za botove
};

const esc = (s = "") =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Upit;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  // bot je popunio skriveno polje – tiho prihvati
  if (body.website) return NextResponse.json({ ok: true });

  const ime = (body.ime ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const poruka = (body.poruka ?? "").trim().slice(0, 5000);

  if (!ime || !poruka || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Proverite ime, email i poruku." }, { status: 422 });
  }

  const usluge = Array.isArray(body.usluge) ? body.usluge.slice(0, 10).map(String) : [];
  const rows: [string, string][] = [
    ["Ime", ime],
    ["Firma", body.firma ?? ""],
    ["Email", email],
    ["Telefon", body.telefon ?? ""],
    ["Usluge", usluge.join(", ")],
  ];

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Floriks sajt <onboarding@resend.dev>";

  if (!key || !to) {
    console.warn("[upit] RESEND_API_KEY ili CONTACT_TO_EMAIL nije podešen. Upit:", { ...Object.fromEntries(rows), poruka });
    return NextResponse.json(
      { error: "Forma trenutno nije povezana sa email-om." },
      { status: 503 }
    );
  }

  const html = `
    <h2>Novi upit sa sajta</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
      .join("")}</table>
    <p><b>Poruka:</b></p><p>${esc(poruka).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Upit: ${ime}${usluge.length ? " – " + usluge.join(", ") : ""}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[upit] Resend greška", res.status, await res.text());
    return NextResponse.json({ error: "Slanje nije uspelo." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
