/**
 * Brand data layer – single source of truth derived from /brand/*.md
 * All content, copy, and structure originates from these markdown files.
 */

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
    phone: "+41 xx xxx xx xx",
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
  },

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
    },
  ],

  process: [
    {
      step: "01",
      title: "Kontaktaufnahme",
      description:
        "Sie schildern uns Ihren Bedarf – telefonisch, per E-Mail oder über das Kontaktformular. Unverbindlich und unkompliziert.",
    },
    {
      step: "02",
      title: "Bedarfsanalyse",
      description:
        "Wir analysieren Ihre Situation und erstellen ein massgeschneidertes Konzept oder Angebot – basierend auf echter Einsatzerfahrung.",
    },
    {
      step: "03",
      title: "Einsatz & Umsetzung",
      description:
        "RescueFlex ist vor Ort – zuverlässig, professionell und vorbereitet. Sie konzentrieren sich auf das Wesentliche.",
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
        "Von kleinen Firmenanlässen mit 50 Personen bis zu grossen Outdoor-Events mit mehreren Tausend Besuchern. Grösse und Personaleinsatz werden individuell auf Ihre Veranstaltung abgestimmt.",
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
