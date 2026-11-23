export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://floriks.rs";

export const contact = {
  phoneDisplay: "+381 69 5338913",
  phoneHref: "tel:+381695338913",
  whatsapp: "https://wa.me/381695338913",
  viber: "viber://chat?number=%2B381695338913",
  email: "rikalovicveljko@gmail.com",
  pib: "116086286",
  legalName: "Veljko Rikalović PR Računarsko programiranje Floriks Barajevo",
  city: "Barajevo, Beograd",
};

export type Service = {
  slug: string;
  no: string;
  title: string;
  short: string;
  /** Naslov stranice za pretraživače */
  seoTitle: string;
  seoDescription: string;
  headline: string;
  intro: string;
  deliverables: string[];
  forWhom: string[];
  notes: { label: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "izrada-sajtova",
    no: "01",
    title: "Izrada prezentacionih sajtova",
    short:
      "Sajt koji objašnjava šta radite i dovodi upite, a ne samo da stoji na internetu.",
    seoTitle:
      "Izrada sajtova Beograd – prezentacioni sajtovi za firme | Floriks",
    seoDescription:
      "Izrada sajtova u Beogradu za firme i preduzetnike. Brz, pregledan sajt na srpskom, optimizovan za Google, sa jasnim putem do upita. Pošaljite upit.",
    headline: "Sajt koji objašnjava šta radite. I dovodi upite.",
    intro:
      "Prezentacioni sajt ima jedan posao: da posetilac za par sekundi shvati čime se bavite i kako da Vas kontaktira. Sve ostalo je ukras. Pravim sajtove koji se brzo učitavaju, dobro rade na telefonu i Google ih razume.",
    deliverables: [
      "Struktura stranica i tekstovi postavljeni tako da posetilac brzo nađe ono što traži",
      "Dizajn rađen za Vašu firmu, bez kupljenih šablona",
      "Prilagođeno za telefon, tablet i računar",
      "Osnovna SEO podešavanja: naslovi, opisi, brzina, sitemap, Google Search Console",
      "Kontakt forma, poziv jednim dodirom, Viber i WhatsApp",
      "Kratko uputstvo kako sami da menjate tekstove i slike",
    ],
    forWhom: [
      "Firme koje nemaju sajt ili imaju zastareo",
      "Zanatlije, servisi, ordinacije, kancelarije, lokali",
      "Preduzetnici kojima je potreban ozbiljan nastup prema klijentima",
    ],
    notes: [
      {
        label: "Okvirni rok",
        text: "2–4 nedelje, zavisno od broja stranica i spremnosti sadržaja.",
      },
      {
        label: "Šta je potrebno od Vas",
        text: "Logo, osnovni podaci o firmi, fotografije ako ih imate. Ostalo rešavamo zajedno.",
      },
    ],
  },
  {
    slug: "izrada-webshopa",
    no: "02",
    title: "Izrada online prodavnica (webshop)",
    short:
      "Prodavnica u kojoj kupac lako nađe proizvod, a Vi lako obradite porudžbinu.",
    seoTitle: "Izrada webshopa – online prodavnice za firme u Srbiji | Floriks",
    seoDescription:
      "Izrada webshopa po meri: katalog, korpa, plaćanje karticom ili pouzećem, dostava, administracija porudžbina. Online prodavnice za firme u Srbiji.",
    headline: "Prodavnica koja prodaje. I ne pravi Vam dodatni posao.",
    intro:
      "Dobar webshop se meri dvema stvarima: koliko brzo kupac dođe do korpe i koliko Vam vremena treba da obradite porudžbinu. Pravim prodavnice sa jasnim katalogom, jednostavnom kupovinom i administracijom koju možete da koristite bez programera.",
    deliverables: [
      "Katalog sa kategorijama, filterima i pretragom",
      "Korpa i kupovina u što manje koraka",
      "Plaćanje pouzećem, uplatom na račun ili karticom (preko Vaše banke ili procesora plaćanja)",
      "Obračun dostave i obaveštenja kupcu na email",
      "Administracija: proizvodi, cene, zalihe, porudžbine",
      "Uvoz proizvoda iz tabele ili sa postojećeg sajta",
      "SEO za stranice proizvoda i kategorija",
    ],
    forWhom: [
      "Firme koje prodaju preko Instagrama i žele pravu prodavnicu",
      "Radnje koje uz lokal žele i online prodaju",
      "Postojeći webshopovi koji su spori ili teški za održavanje",
    ],
    notes: [
      {
        label: "Okvirni rok",
        text: "4–8 nedelja, zavisno od broja proizvoda i načina plaćanja.",
      },
      {
        label: "Šta je potrebno od Vas",
        text: "Spisak proizvoda (tabela je dovoljna), fotografije, uslovi dostave i plaćanja.",
      },
    ],
  },
  {
    slug: "redizajn-i-ubrzavanje",
    no: "03",
    title: "Redizajn i ubrzavanje postojećih sajtova",
    short:
      "Postojeći sajt pregledam, izmerim i sredim: brži, jasniji, bolji na telefonu.",
    seoTitle: "Redizajn i ubrzavanje sajta – sporiji sajt gubi kupce | Floriks",
    seoDescription:
      "Redizajn i ubrzavanje postojećeg sajta: merenje brzine, sređivanje prikaza na telefonu, čišćenje koda i SEO osnova. Pošaljite adresu sajta za procenu.",
    headline: "Isti sajt, bez sporih delova.",
    intro:
      "Nije uvek potreban novi sajt. Često je dovoljno izmeriti šta usporava stranicu, šta zbunjuje posetioce i šta Google ne vidi, pa to popraviti. Pre bilo kakvog rada dobijate pregled stanja i predlog šta vredi menjati.",
    deliverables: [
      "Merenje brzine i pregled sajta (Lighthouse, Core Web Vitals) pre i posle",
      "Optimizacija slika, fontova i skripti",
      "Sređivanje prikaza na telefonu",
      "Osvežen dizajn ili potpuni redizajn, po dogovoru",
      "Ispravke osnovnih SEO grešaka",
      "Prelazak na brži hosting ili noviju tehnologiju, ako je potrebno",
    ],
    forWhom: [
      "Sajtovi koji se sporo učitavaju ili se loše vide na telefonu",
      "WordPress sajtovi pretrpani dodacima",
      "Sajtovi koji izgledaju zastarelo, a sadržaj je i dalje dobar",
    ],
    notes: [
      { label: "Okvirni rok", text: "1–4 nedelje, zavisno od obima." },
      {
        label: "Šta je potrebno od Vas",
        text: "Adresa sajta i pristup administraciji i hostingu.",
      },
    ],
  },
  {
    slug: "ai-asistent",
    no: "04",
    title: "AI asistent za upite",
    short:
      "Odgovara kupcima na Instagramu, WhatsApp-u i sajtu, 24/7, na srpskom.",
    seoTitle:
      "AI chatbot za Instagram, WhatsApp i sajt – na srpskom, 24/7 | Floriks",
    seoDescription:
      "AI chatbot za Instagram, WhatsApp i sajt koji odgovara kupcima na srpskom 24/7: cene, stanje, dostava, radno vreme. Prosleđuje Vam upite koje ne zna.",
    headline: "Kupac pita u ponoć. Odgovor stiže odmah.",
    intro:
      "Većina poruka koje dobijate su ista pitanja: koliko košta, ima li na stanju, kako ide dostava, do kad radite. AI asistent odgovara na njih umesto Vas, na srpskom, u bilo koje doba. Koristi samo podatke koje mu Vi date. Kad ne zna odgovor, prosleđuje razgovor Vama.",
    deliverables: [
      "Asistent povezan sa Instagram porukama, WhatsApp-om i/ili sajtom",
      "Obučen na Vašim podacima: cenovnik, proizvodi, uslovi, radno vreme",
      "Odgovori na srpskom, latinicom ili ćirilicom, u tonu koji odgovara Vašoj firmi",
      "Prosleđivanje Vama kad pitanje izlazi iz okvira",
      "Pregled razgovora, da vidite šta kupci najčešće pitaju",
      "Ažuriranje podataka kad se promene cene ili ponuda",
    ],
    forWhom: [
      "Firme koje dobijaju mnogo poruka na Instagramu i WhatsApp-u",
      "Prodavnice koje gube kupce jer odgovaraju tek sutradan",
      "Uslužne delatnosti sa stalno istim pitanjima o terminima i cenama",
    ],
    notes: [
      {
        label: "Okvirni rok",
        text: "1–3 nedelje, zavisno od broja kanala i obima podataka.",
      },
      {
        label: "Važno",
        text: "Asistent ne izmišlja: odgovara samo iz podataka koje odobrite.",
      },
    ],
  },
  {
    slug: "kalkulatori-i-konfiguratori",
    no: "05",
    title: "Kalkulatori i konfiguratori",
    short:
      "Kupac sam izračuna cenu po meri ili složi proizvod, a Vi dobijete gotov upit.",
    seoTitle: "Kalkulator cene i konfigurator proizvoda za sajt | Floriks",
    seoDescription:
      "Izrada kalkulatora i konfiguratora za sajt: obračun cene po meri, izbor paketa usluga, konfigurator proizvoda. Manje pitanja, precizniji upiti.",
    headline: "Manje pitanja „koliko bi to koštalo“. Više preciznih upita.",
    intro:
      "Ako Vaša cena zavisi od mera, materijala ili kombinacije opcija, kupac Vas mora pitati pre nego što se odluči. Kalkulator mu daje odgovor odmah, a Vama šalje upit sa svim podacima koje inače skupljate kroz pet poruka.",
    deliverables: [
      "Obračun cene po meri (npr. po kvadratu, dužini, količini)",
      "Izbor paketa usluga sa jasnim razlikama",
      "Konfigurator proizvoda sa opcijama i pregledom izbora",
      "Pravila obračuna koja Vi menjate bez programera",
      "Slanje gotovog upita na Vaš email ili u CRM",
      "Ugradnja u postojeći sajt ili kao posebna stranica",
    ],
    forWhom: [
      "Proizvođači i zanatlije koji rade po meri: stolarija, tende, ograde, nameštaj",
      "Agencije i servisi sa paketima usluga",
      "Svi koji svaki dan računaju istu formulu za drugog kupca",
    ],
    notes: [
      {
        label: "Okvirni rok",
        text: "1–4 nedelje, zavisno od složenosti obračuna.",
      },
      {
        label: "Šta je potrebno od Vas",
        text: "Način na koji danas računate cenu, makar u Excel tabeli ili na papiru.",
      },
    ],
  },
  {
    slug: "landing-stranice",
    no: "06",
    title: "Landing stranice za kampanje",
    short:
      "Jedna stranica, jedna ponuda, jedan cilj. Za oglase koji treba da donesu rezultat.",
    seoTitle: "Izrada landing stranica za kampanje i oglase | Floriks",
    seoDescription:
      "Landing stranice za Google i Meta kampanje: brzo učitavanje, jasna ponuda, forma za upit, praćenje konverzija. Izrada brzo, pred početak kampanje.",
    headline: "Oglas dovede posetioca. Stranica mora da ga zadrži.",
    intro:
      "Kad plaćate oglas, svaka sekunda učitavanja i svaka nejasna rečenica Vas košta. Landing stranica ima jednu ponudu i jedan cilj: upit, poziv ili kupovinu. Ništa što skreće pažnju.",
    deliverables: [
      "Stranica posvećena jednoj ponudi ili kampanji",
      "Tekst i raspored usmereni na jednu akciju",
      "Učitavanje ispod dve sekunde i na mobilnoj mreži",
      "Podešeno praćenje konverzija (Google Ads, Meta Pixel, GA4)",
      "Varijante za A/B testiranje, po potrebi",
    ],
    forWhom: [
      "Firme koje pokreću Google ili Meta kampanju",
      "Agencije kojima treba stranica za klijentovu kampanju",
      "Sezonske ponude, akcije, događaji, prijave",
    ],
    notes: [
      { label: "Okvirni rok", text: "3–10 radnih dana." },
      {
        label: "Šta je potrebno od Vas",
        text: "Ponuda, cilj kampanje i materijal koji već imate.",
      },
    ],
  },
  {
    slug: "odrzavanje-i-podrska",
    no: "07",
    title: "Održavanje i podrška",
    short:
      "Mesečni paket: ažuriranja, rezervne kopije, sitne izmene i neko ko se javlja na telefon.",
    seoTitle: "Održavanje sajta – mesečni paket podrške | Floriks",
    seoDescription:
      "Održavanje sajta i webshopa na mesečnom nivou: ažuriranja, rezervne kopije, sigurnost, praćenje rada i sitne izmene sadržaja. Pošaljite upit.",
    headline: "Sajt radi. Vi o tome ne razmišljate.",
    intro:
      "Sajt nije gotov kad se pusti u rad. Treba ga ažurirati, čuvati kopije, pratiti da li radi i menjati sadržaj. U mesečnom paketu to radim ja, a Vi imate jednu osobu kojoj se javljate.",
    deliverables: [
      "Redovna ažuriranja sistema i dodataka",
      "Automatske rezervne kopije",
      "Praćenje dostupnosti sajta i reagovanje kad nešto ne radi",
      "Sitne izmene sadržaja svakog meseca, prema dogovorenom obimu",
      "Mesečni kratak izveštaj šta je urađeno",
      "Direktan kontakt telefonom, Viberom ili WhatsApp-om",
    ],
    forWhom: [
      "Firme kojima je sajt napravio neko ko više nije dostupan",
      "Webshopovi kojima se sadržaj stalno menja",
      "Svi koji žele da im neko vodi računa o sajtu",
    ],
    notes: [
      {
        label: "Način rada",
        text: "Mesečni paket, bez dugoročnog vezivanja. Obim se dogovara prema potrebama.",
      },
      {
        label: "Preuzimanje",
        text: "Preuzimam i sajtove koje nisam pravio, uz prethodni pregled.",
      },
    ],
  },
  {
    slug: "saradnja-sa-agencijama",
    no: "08",
    title: "Saradnja sa agencijama",
    short:
      "White-label izrada: radim pod imenom Vaše agencije, Vi zadržavate klijenta.",
    seoTitle: "White-label izrada sajtova za marketing agencije | Floriks",
    seoDescription:
      "White-label izrada sajtova, webshopova i landing stranica za marketing agencije bez developera. Radim pod imenom Vaše agencije, Vi zadržavate klijenta.",
    headline: "Vaša agencija, Vaš klijent. Ja pravim sajt.",
    intro:
      "Marketing agencije često dobiju posao koji uključuje sajt, a nemaju developera. Ja tu uskačem: radim pod Vašim imenom, komuniciram preko Vas ili direktno u Vaše ime, a klijent ostaje Vaš.",
    deliverables: [
      "Izrada sajtova, webshopova i landing stranica pod Vašim brendom",
      "Bez mog imena na sajtu, u kodu ili u komunikaciji sa klijentom",
      "Rad po Vašem dizajnu ili dizajn od nule",
      "Jasni rokovi koje možete da obećate klijentu",
      "Održavanje i izmene nakon predaje",
      "Ugovor o poverljivosti, po potrebi",
    ],
    forWhom: [
      "Marketing agencije bez developera u timu",
      "Dizajneri kojima treba neko ko će dizajn pretvoriti u sajt",
      "Agencije koje imaju više posla nego ljudi",
    ],
    notes: [
      { label: "Način rada", text: "Po projektu ili kroz stalnu saradnju." },
      {
        label: "Vlasništvo",
        text: "Klijent je Vaš. Ne kontaktiram ga mimo Vas.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Shot = { src: string; width: number; height: number; alt: string; caption?: string };

export type Work = {
  slug: string;
  no: string;
  domain: string;
  url: string;
  type: string;
  need: string;
  done: string[];
  screenshot: Shot;
  /** Mobilni prikaz */
  mobile: Shot;
  /** Još jedna stranica ili deo sajta */
  detail: Shot;
};

export const works: Work[] = [
  {
    slug: "prikazipod",
    no: "A",
    domain: "prikazipod.rs",
    url: "https://prikazipod.rs",
    type: "Projekat Floriksa",
    need: "Kupac teško bira pod kad ga vidi samo na uzorku ili na slici. Prodavnicama podova je trebao način da kupcu olakšaju izbor.",
    done: [
      "Alat koji prodavnice podova nude svojim kupcima",
      "Pod izabran na sajtu prodavnice prikazuje se u prostoriji korisnika",
      "Kupac vidi kako pod izgleda kod njega pre nego što ga kupi",
    ],
    screenshot: {
      src: "/radovi/prikazipod.png",
      width: 1899,
      height: 893,
      alt: "Početna strana prikazipod.rs: ista dnevna soba pre i posle, sa novim podom i izborom vrste hrasta",
    },
    mobile: {
      src: "/radovi/prikazipod-mobilni.png",
      width: 385,
      height: 810,
      alt: "prikazipod.rs na telefonu: tri koraka od stranice proizvoda do prostorije kupca",
      caption: "Mobilni prikaz · tri koraka",
    },
    detail: {
      src: "/radovi/prikazipod-zid.png",
      width: 1539,
      height: 665,
      alt: "Prikaži zid: ista prostorija pre i posle, sa zidnom oblogom od cigle na izabranom zidu",
      caption: "Prikaži zid · zidne obloge na zidu koji kupac izabere",
    },
  },
  {
    slug: "autooprema",
    no: "B",
    domain: "autooprema.net",
    url: "https://autooprema.net",
    type: "Redizajn · WordPress",
    need: "Redizajn postojećeg WordPress sajta i lakše pronalaženje proizvoda.",
    done: [
      "Redizajn postojećeg sajta",
      "Nova landing stranica dodata u postojeći WordPress sajt",
      "Napredna pretraga na landing stranici",
    ],
    screenshot: {
      src: "/radovi/autooprema.png",
      width: 1897,
      height: 939,
      alt: "Landing stranica autooprema.net: pretraga po vozilu (marka, model, godište) i kategorije proizvoda",
    },
    mobile: {
      src: "/radovi/autooprema-mobilni.png",
      width: 389,
      height: 811,
      alt: "autooprema.net na telefonu: pretraga po vozilu i kategorije proizvoda",
      caption: "Mobilni prikaz · pretraga po vozilu",
    },
    detail: {
      src: "/radovi/autooprema-rasprodaja.png",
      width: 1898,
      height: 668,
      alt: "Sekcija Nedeljna rasprodaja na autooprema.net: proizvodi na akciji sa starom i novom cenom",
      caption: "Nedeljna rasprodaja · proizvodi na akciji",
    },
  },
  {
    slug: "montewayz",
    no: "C",
    domain: "Montewayz",
    url: "https://montewayz.netlify.app/",
    type: "Sajt · turistička agencija",
    need: "Turistička agencija koja organizuje ture po Crnoj Gori. Trebao joj je sajt koji predstavlja ture i vodi posetioca do rezervacije.",
    done: [
      "Stranice za pakete, aktivnosti i galeriju",
      "Izbor jezika i svetla ili tamna tema",
      "Dugme za rezervaciju avanture uvek vidljivo u meniju",
    ],
    screenshot: {
      src: "/radovi/montewayz.jpg",
      width: 1280,
      height: 800,
      alt: "Početna strana sajta Montewayz: planinski pejzaž Crne Gore i naslov Doživi Crnu Goru na tvoj način",
    },
    mobile: {
      src: "/radovi/montewayz-mobilni.png",
      width: 390,
      height: 811,
      alt: "Montewayz na telefonu: galerija Iz naših avantura sa fotografijama sa tura",
      caption: "Mobilni prikaz · galerija",
    },
    detail: {
      src: "/radovi/montewayz-paketi.png",
      width: 1915,
      height: 910,
      alt: "Sekcija Putevi Crne Gore na sajtu Montewayz: Paket Priroda, Paket Obala i Self-made paket",
      caption: "Paketi tura · Priroda, Obala, Self-made",
    },
  },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);

export const processSteps = [
  {
    no: "01",
    title: "Razgovor",
    duration: "1 dan",
    days: 1,
    text: "Kažete mi šta Vam treba. Ja pitam ono što je bitno za posao: ko su Vaši kupci, šta treba da urade na sajtu, šta već imate.",
  },
  {
    no: "02",
    title: "Predlog i ponuda",
    duration: "2–3 dana",
    days: 3,
    text: "Dobijate pisani predlog: šta tačno pravim, rokove i cenu. Bez skrivenih stavki. Ništa ne počinje dok se ne složimo.",
  },
  {
    no: "03",
    title: "Izrada",
    duration: "1–8 nedelja",
    days: 8,
    text: "Radim u fazama i pokazujem Vam napredak. Na svakoj fazi možete da tražite izmene, pre nego što se ide dalje.",
  },
  {
    no: "04",
    title: "Predaja i održavanje",
    duration: "trajno",
    days: 0,
    text: "Sajt puštam u rad, predajem Vam sve pristupe i pokazujem kako se koristi. Posle toga, po želji, preuzimam održavanje.",
  },
];

export const faq = [
  {
    q: "Kako se formira cena?",
    a: "Zavisi od obima: broja stranica, funkcija, količine sadržaja i rokova. Pošaljite upit sa par rečenica o tome šta Vam treba i dobićete ponudu sa tačnom cenom, bez obaveze.",
  },
  {
    q: "Koliko traje izrada?",
    a: "Landing stranica od 3 do 10 radnih dana, prezentacioni sajt 2 do 4 nedelje, webshop 4 do 8 nedelja. Tačan rok piše u ponudi i zavisi i od toga koliko brzo stižu tekstovi i fotografije.",
  },
  {
    q: "Ko je vlasnik sajta?",
    a: "Vi. Domen, sadržaj i sajt su Vaši. Na kraju dobijate sve pristupe, i niste vezani za mene ako kasnije želite da radite sa nekim drugim.",
  },
  {
    q: "Da li se bavite i hostingom i domenom?",
    a: "Da. Mogu da registrujem domen i podesim hosting na Vaše ime, ili da sajt postavim na hosting koji već imate. U oba slučaja nalozi glase na Vas.",
  },
  {
    q: "Šta se dešava posle predaje?",
    a: "Postoji period posle predaje u kom ispravljam sve što ne radi kako je dogovoreno [trajanje garantnog perioda]. Posle toga možete da uzmete mesečni paket održavanja ili da me zovete po potrebi.",
  },
  {
    q: "Mogu li sam da menjam sadržaj?",
    a: "Da. Tekstove, slike, proizvode i cene menjate sami kroz administraciju. Dobijate i kratko uputstvo.",
  },
];
