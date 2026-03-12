/**
 * Brand data layer – single source of truth derived from /brand/*.md
 * All content, copy, and structure originates from these markdown files.
 * Images: Unsplash (free commercial use, images.unsplash.com)
 */

// Unsplash CDN helper – keeps URLs clean and consistent
const unsplash = (id: string, w = 1400, q = 85) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const brand = {
  name: "RescueFlex",
  tagline: "Medizinische Dienste & Sicherheitskonzepte",
  description:
    "Professionelle medizinische Dienste und praxisnahe Sicherheitskonzepte – aus der Perspektive eines erfahrenen Rettungssanitäters.",
  established: 2026,
  location: "Schweiz",
  serviceArea: "Regionale Gemeinden und Unternehmen in der Schweiz",

  contact: {
    email: "info@rescueflex.ch",
    phone: "+41 76 447 68 61",
    address: "Schweiz",
  },

  nav: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Prozess", href: "#prozess" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  hero: {
    eyebrow: "Medizinische Sicherheit für die Schweiz",
    headline: ["Wenn es", "darauf", "ankommt."],
    body: "Professionelle Einsatzplanung und medizinische Absicherung für Gemeinden, Unternehmen und Veranstaltungen – zuverlässig, praxisnah, flexibel.",
    cta: { primary: "Anfrage stellen", secondary: "Leistungen ansehen" },
    // Jason Jarrach – paramedic/EMS portrait (Unsplash free)
    image: unsplash("photo-1653150756437-41454967e9f5", 1600),
    imageAlt: "Rettungssanitäter im Einsatz",
  },

  // Editorial image for Differentiators section
  // Mathurin NAPOLY – French EMT (Unsplash free)
  differentiatorImage: unsplash("photo-1642438114426-bad6b9ce05da", 2000),

  trust: [
    { label: "Rettungsdienst-Erfahrung", detail: "Aus aktiven Einsätzen" },
    { label: "Qualifiziertes Personal", detail: "Geprüfte Fachkompetenz" },
    { label: "Flexible Verfügbarkeit", detail: "Kurz- & langfristig" },
    { label: "Schweizer Standard", detail: "Nach IVR-Richtlinien" },
  ],

  offers: [
    {
      id: "01",
      title: "Sanitätsdienst",
      subtitle: "für Veranstaltungen",
      description:
        "Medizinische Absicherung für Dorffeste, Firmenanlässe und Sportevents – professionell geplant und auf Ihre Veranstaltung abgestimmt.",
      deliverables: [
        "Qualifiziertes Sanitätspersonal vor Ort",
        "Erste medizinische Versorgung bei Notfällen",
        "Koordination mit regionalen Rettungsdiensten",
        "Einsatzplanung nach Veranstaltungsgrösse",
      ],
      // Mufid Majnun – ambulance oversight during physical training exercise
      image: unsplash("photo-1721827160416-ff4c720861bc", 900),
      imageAlt: "Sanitätsdienst am Veranstaltungsort",
    },
    {
      id: "02",
      title: "Sicherheitskonzepte",
      subtitle: "für Veranstaltungen & Betriebe",
      description:
        "Strukturierte medizinische Notfallkonzepte basierend auf realer Einsatzerfahrung – für Gemeinden, Firmen und Veranstalter.",
      deliverables: [
        "Analyse der Veranstaltung oder Organisation",
        "Risikoanalyse und medizinische Einsatzplanung",
        "Erstellung eines strukturierten Sicherheitskonzeptes",
        "Empfehlungen für Notfallabläufe und Ressourcen",
      ],
      // Jonas Augustin – Rettungsdienst Hannover
      image: unsplash("photo-1633521251334-108664119318", 900),
      imageAlt: "Rettungsfahrzeug Einsatz",
    },
    {
      id: "03",
      title: "Beratung",
      subtitle: "für Gemeinden & Unternehmen",
      description:
        "Fachkundige Beratung zur medizinischen Sicherheit – direkt aus der Praxis des Rettungsdienstes, anwendbar für Ihre Organisation.",
      deliverables: [
        "Analyse bestehender Sicherheitsstrukturen",
        "Empfehlungen für Sicherheits- und Rettungsorganisation",
        "Unterstützung bei der Planung medizinischer Absicherung",
        "Erfahrungsaustausch aus dem aktiven Einsatz",
      ],
      // Maxence Commun – team in uniforms
      image: unsplash("photo-1605881121733-53a18d5a12fe", 900),
      imageAlt: "Rettungsteam Besprechung",
    },
    {
      id: "04",
      title: "Springerdienste",
      subtitle: "für Rettungsdienste",
      description:
        "Flexible, qualifizierte Verstärkung für Rettungsdienste bei Personalengpässen – kurzfristig oder geplant einsetzbar.",
      deliverables: [
        "Einsatz als qualifizierter Rettungssanitäter",
        "Kurzfristige oder geplante Verfügbarkeit",
        "Nahtlose Integration in bestehende Teams",
      ],
      // Jonas Augustin – Rettungswagen Berufsfeuerwehr Salzgitter
      image: unsplash("photo-1633521249135-2b4920138ca3", 900),
      imageAlt: "Rettungsfahrzeug Springerdienst",
    },
  ],

  process: [
    {
      step: "01",
      title: "Kontaktaufnahme",
      description: "Schildern Sie uns Ihren Bedarf – unverbindlich und unkompliziert.",
      items: [
        "Antwort innerhalb von 24 Stunden",
        "Telefonisch, per E-Mail oder Formular",
      ],
      note: "Wir antworten in der Regel noch am selben Werktag.",
    },
    {
      step: "02",
      title: "Bedarfsanalyse",
      description: "Wir analysieren Ihre Situation und erstellen ein massgeschneidertes Angebot.",
      items: [
        "Risikoanalyse und Einsatzplanung",
        "Kostenlos und unverbindlich",
      ],
      note: "Kostenlos und unverbindlich – auch für Standardanfragen.",
    },
    {
      step: "03",
      title: "Einsatz & Umsetzung",
      description: "RescueFlex ist vor Ort – zuverlässig, professionell und vorbereitet.",
      items: [
        "Vollständig ausgerüstete Crews",
        "Schweizweit verfügbar, auch kurzfristig",
      ],
      note: "Verfügbar schweizweit, auch kurzfristig.",
    },
  ],

  differentiators: [
    {
      title: "Echte Rettungsdienst-Erfahrung",
      description:
        "Unsere Leistungen basieren nicht auf Theorie, sondern auf jahrelanger Praxis im aktiven Rettungsdienst. Das macht den Unterschied – besonders wenn es darauf ankommt.",
    },
    {
      title: "Individuelle Lösungen",
      description:
        "Keine Standardpakete. Jedes Sicherheitskonzept und jeder Sanitätsdienst wird auf Ihre spezifischen Anforderungen zugeschnitten – in Grösse, Tiefe und Umfang.",
    },
    {
      title: "Volle Verlässlichkeit",
      description:
        "Wir erscheinen. Pünktlich, vorbereitet und mit der nötigen Ausrüstung. Denn Sicherheit kennt keine Ausnahmen – und keine Entschuldigungen.",
    },
  ],

  faqs: [
    {
      question: "Wie kurzfristig kann ich einen Sanitätsdienst buchen?",
      answer:
        "Wir empfehlen eine Planung von mindestens 4–6 Wochen vor Ihrer Veranstaltung. Bei kurzfristigen Anfragen nehmen Sie bitte direkt Kontakt auf – wir prüfen die Verfügbarkeit umgehend und finden wenn möglich eine Lösung.",
    },
    {
      question: "Was unterscheidet RescueFlex von einem Samariterverein?",
      answer:
        "RescueFlex setzt qualifizierte Rettungssanitäter mit aktiver Einsatzerfahrung ein. Das bedeutet strukturierte Einsatzplanung, professionelle Koordination mit Rettungsdiensten und medizinische Kompetenz weit über die Grundversorgung hinaus.",
    },
    {
      question: "Für welche Veranstaltungsgrössen sind Sie geeignet?",
      answer:
        "Für kleine Veranstaltungen bis 100 Personsn, Sportevents, Verneinsanlässe, Firmenanlässe.",
    },
    {
      question: "Was kostet ein Sanitätsdienst?",
      answer:
        "Die Kosten hängen von Grösse, Dauer und Art des Einsatzes ab. Wir erstellen für jeden Auftrag eine individuelle, kostenlose und unverbindliche Offerte – ohne versteckte Gebühren.",
    },
    {
      question: "Übernehmt ihr auch die Koordination mit Behörden?",
      answer:
        "Ja. Auf Wunsch unterstützen wir Sie bei der Kommunikation mit Gemeinden, Polizei und Rettungsdiensten sowie bei der Erstellung behördenkonformer Sicherheitskonzepte.",
    },
    {
      question: "Sind eure Mitarbeitenden versichert?",
      answer:
        "Selbstverständlich. Alle eingesetzten Fachkräfte sind berufshaftpflichtversichert und arbeiten nach den Qualitätsstandards des Schweizer Rettungswesens.",
    },
  ],

  serviceOptions: [
    "Sanitätsdienst für Veranstaltungen",
    "Sicherheitskonzept",
    "Beratung für Gemeinden / Unternehmen",
    "Springerdienst",
    "Sonstiges",
  ],

  meta: {
    title: "RescueFlex – Medizinische Sicherheit für Veranstaltungen & Gemeinden",
    description:
      "Professionelle Sanitätsdienste, Sicherheitskonzepte und Rettungsdienstberatung für Gemeinden, Unternehmen und Veranstaltungen in der Schweiz.",
    keywords:
      "Sanitätsdienst, Sicherheitskonzept, Rettungsdienst, Veranstaltungssicherheit, Schweiz, medizinische Absicherung, Springerdienst",
    url: "https://rescueflex.ch",
    ogImage: "/og-image.png",
  },
} as const;

export type Brand = typeof brand;
export type Offer = (typeof brand.offers)[number];
export type FAQ = (typeof brand.faqs)[number];
export type ProcessStep = (typeof brand.process)[number];
export type Differentiator = (typeof brand.differentiators)[number];
export type TrustItem = (typeof brand.trust)[number];
