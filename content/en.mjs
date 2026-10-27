export default {
  locale: "en",
  siteName: "Mohammed Reda Saadi",
  seo: {
    title: "Mohammed Reda Saadi — Portfolio",
    description: "Mohammed Reda Saadi's portfolio: logistics, transport and data, with an SAP/ERP focus. Casablanca."
  },
  navigation: {
    work: "Work",
    about: "About",
    journey: "Journey",
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu"
  },
  hero: {
    eyebrow: "Supply chain · Domain expertise · Digital",
    titleStart: "Your supply chain challenges.",
    titleAccent: "My digital solutions.",
    description: "As a Master's student in E-Logistics / Transport, I combine hands-on expertise with software development to turn supply chain constraints into digital solutions that streamline operations.",
    proofsLabel: "Measured results from featured projects",
    proofs: [
      { value: "−2,000 km", context: "From one fuel route optimization test", project: "WIN-TMS" },
      { value: "1 h → 10 s", context: "Document reconciliation time", project: "Gamma Transit" }
    ],
    primaryCta: "See the results",
    resumeCta: "View CV",
    location: "Casablanca, Morocco"
  },
  labels: {
    workTitle: "Projects",
    workIntro: "Tools built close to real operations. Each project shows what was made, the decisions behind it, and the results observed.",
    viewProject: "View case study",
    zoomImage: "View full-size screenshot",
    testDay: "saved on one test day · WIN-TMS",
    reconciliation: "for document reconciliation · Gamma Transit",
    challenge: "Challenge",
    contribution: "My contribution",
    solution: "Solution",
    results: "Results",
    limitations: "Limitations",
    backToProjects: "Back to projects",
    nextProject: "Next project",
    illustration: "Reconstructed illustration"
  },
  about: {
    title: "About",
    paragraphs: [
      "Mohammed Reda Saadi, based in Casablanca. Bachelor's degree in management, transport and logistics at Mundiapolis (2022–2025), currently completing a master's in e-logistics at ESITH (2025–2027).",
      "SAP/ERP-oriented: connecting real operations — transport, purchasing, inventory — with the data that moves them forward.",
      "In practice: TMS design with Python and React, Excel/VBA prototyping, and document automation."
    ]
  },
  skills: [
    {
      id: "business",
      title: "Business",
      items: ["Business analysis", "Transport", "Purchasing", "Inventory"]
    },
    {
      id: "data",
      title: "Tools & data",
      items: ["Excel / VBA", "Python", "SQL", "pandas"]
    },
    {
      id: "development",
      title: "Development",
      items: ["PostgreSQL", "Django", "Streamlit", "React"]
    }
  ],
  experiences: [
    {
      id: "sap-integration",
      organization: "WINXO",
      role: "SAP/ERP integration",
      period: "Upcoming",
      description: "Planned assignment to integrate WIN-TMS with SAP, following the TMS development internship. Nothing delivered at this stage.",
      status: "planned"
    },
    {
      id: "win-tms-development",
      organization: "WINXO",
      role: "WIN-TMS design and development",
      period: "June – August 2026",
      description: "Designed and developed a TMS in Python and React for fuel route planning, assignments, and truck capacity management.",
      status: "completed"
    },
    {
      id: "zine-capital-invest",
      organization: "Zine Capital Invest",
      role: "Excel/VBA TMS prototype",
      period: "May – August 2025",
      description: "Designed an Excel/VBA TMS prototype to enter trips, review trip history, and support a more balanced assignment of journeys.",
      status: "completed"
    },
    {
      id: "wafa-ima",
      organization: "Wafa IMA",
      role: "Assistance officer",
      period: "2024–2025",
      description: "Handled emergency calls and coordinated service providers in Morocco and internationally, part time.",
      status: "completed"
    },
    {
      id: "snmm",
      organization: "SNMM",
      role: "Purchasing",
      period: "Summer 2023",
      description: "Negotiated with suppliers, followed orders, and helped manage the spare-parts store.",
      status: "completed"
    },
    {
      id: "trans-saadiyine",
      organization: "Trans Saadiyine",
      role: "Operations",
      period: "2020–2021",
      description: "Coordinated transport flows, planned routes, and monitored the truck fleet.",
      status: "completed"
    }
  ],
  education: [
    {
      id: "esith-master",
      institution: "ESITH",
      qualification: "Master's in e-logistics",
      period: "2025–2027"
    },
    {
      id: "mundiapolis-licence",
      institution: "Mundiapolis",
      qualification: "Bachelor's in management, transport and logistics",
      period: "2022–2025"
    }
  ],
  learning: [
    {
      id: "sap-professional-fundamentals",
      title: "SAP Professional Fundamentals",
      issuer: "SAP",
      kind: "certificate"
    },
    {
      id: "sap-sales-essentials",
      title: "Sales Essentials",
      issuer: "SAP",
      kind: "course"
    }
  ],
  projects: [
    {
      id: "zine-tms",
      slug: "zine-tms",
      organization: "Zine Capital Invest",
      category: "TMS prototype",
      title: "Excel/VBA TMS",
      summary: "From May to August 2025, built an Excel/VBA TMS prototype to enter trips and use the history of completed trips to balance journey assignments.",
      tags: ["TMS", "Excel", "VBA", "Assignment"],
      illustration: "/assets/zine-tms.png",
      illustrationAlt: "Screenshot of the Excel/VBA TMS prototype: journeys, origins, destinations, pallets, weight, assigned trucks, distances, and an assignment button.",
      illustrationCaption: "TMS prototype screenshot — journey assignments.",
      resultValue: null,
      resultContext: null,
      challenge: ["Keep a record of completed trips to distribute upcoming journeys more evenly."],
      contribution: ["Analysed requirements and designed the TMS prototype in Excel with VBA.", "Implemented trip entry and history: origin, destination, pallets, weight, assigned truck, and distance.", "Produced transport optimization recommendations."],
      solution: ["The history of completed trips informs a more balanced assignment of journeys."],
      results: ["A TMS prototype with trip entry and history was created; no quantified gains are claimed."],
      limitations: ["Prototype stage: no deployment or quantified impact is claimed."]
    },
    {
      id: "win-tms",
      slug: "win-tms",
      organization: "WINXO",
      category: "Transport & logistics",
      title: "WIN-TMS",
      summary: "At WINXO, June–August 2026: designed and developed WIN-TMS with Python and React for fuel compartments, capacities, assignments, and routes. On one test day, distance dropped from 30,000 km to 28,000 km.",
      tags: ["Python", "React", "TMS", "Fuel"],
      illustration: "/assets/win-tms.png",
      illustrationAlt: "WIN-TMS home screen: Dispatch portal with orders, planning, routes, fleet, and invoicing modules.",
      illustrationCaption: "Dispatch portal screenshot — overview.",
      resultValue: "2,000 km",
      resultContext: "of distance saved on one test day",
      challenge: [
        "Gain a clear view of a fuel TMS in real conditions: truck compartments, capacities, assignments and routes.",
        "Measure how configuration choices affect the distance travelled on a test day.",
        "Connect fuel, capacity and itinerary to daily dispatch decisions."
      ],
      contribution: [
        "Designed business rules for compartments, capacities, orders, and loading centres.",
        "Developed automated assignments and routes, the database, and monitoring interfaces with Python and React.",
        "Compared distances on a single test day."
      ],
      solution: [
        "Restructured capacities and assignments, then recalculated the test-day routes.",
        "Direct before/after reading: 30,000 km before, 28,000 km after."
      ],
      results: [
        "Test-day distance: 30,000 km → 28,000 km.",
        "Roughly 2,000 km of distance avoided that day."
      ],
      limitations: [
        "Assessment limited to a single test day.",
        "No commitment of results on other periods or other fleets."
      ]
    },
    {
      id: "gamma-transit",
      slug: "gamma-transit",
      organization: "Gamma Transit",
      category: "Documents & traceability",
      title: "Gamma Transit",
      summary: "At Gamma Transit, August–September 2026: document reconciliation automated with Excel and OCR, from 1 h to 10 s, with NGP flow assistance and traceability.",
      tags: ["OCR", "Excel", "NGP", "Traceability"],
      illustration: "/assets/gamma-transit.png",
      illustrationAlt: "Gamma Transit tool screenshot showing an NGP classification sheet and the customs breakdown interface for a dossier.",
      illustrationCaption: "Tool screenshot — customs breakdown.",
      resultValue: "1 h → 10 s",
      resultContext: "document reconciliation time",
      challenge: [
        "A transport document flow followed by hand, document by document.",
        "Reconcile the papers quickly while keeping a trace of every check."
      ],
      contribution: [
        "Developed an Excel add-in for OCR extraction and document reconciliation.",
        "Assisted NGP tariff classification, generated the customs breakdown, and added consistency and traceability checks."
      ],
      solution: [
        "Automated reading of the documents, then a structured comparison in Excel.",
        "Every check leaves a traceable record."
      ],
      results: [
        "Reconciliation time: 1 h → 10 s.",
        "Traceability of the checks preserved."
      ],
      limitations: [
        "Assistance tool: human review still applies.",
        "Scope limited to the document flow handled."
      ]
    },
    {
      id: "fuel-tracking",
      slug: "fuel-tracking",
      organization: "Personal project",
      category: "Data & tools",
      title: "Fuel Tracking",
      summary: "A Python/Streamlit application to track fuel vouchers and consumption. A tracking tool, with no measured benefit.",
      tags: ["Python", "Streamlit", "Fuel", "Tracking"],
      illustration: "/assets/fuel-tracking.png",
      illustrationAlt: "Logistics tracking application screenshot showing trip entry, calculations, statistics and reports tabs.",
      illustrationCaption: "Application screenshot — entry and calculations.",
      resultValue: null,
      resultContext: null,
      challenge: [
        "Tracking fuel vouchers and the related consumption by hand.",
        "Gathering vouchers and consumption in one place, with a readable history."
      ],
      contribution: [
        "Designed a Python/Streamlit application: data structure, screens and updates.",
        "Focused on simple voucher entry and clear reading of volumes."
      ],
      solution: [
        "A lightweight web application centralising fuel vouchers and consumption.",
        "A direct view of the data, with no advanced modelling."
      ],
      results: [
        "Working personal tool: vouchers and consumption centralised.",
        "No measured benefit at this stage."
      ],
      limitations: [
        "Personal use, with no validation inside a company.",
        "No quantified or claimed benefit."
      ]
    }
  ],
  contact: {
    title: "Contact",
    description: "A question about operations, logistics or SAP/ERP? Write to me.",
    email: "Medredasaadi02@gmail.com",
    emailLabel: "Email",
    copyLabel: "Copy address",
    copySuccess: "Address copied",
    copyFailure: "Copy failed — select the address manually."
  },
  footer: {
    copyrightLabel: "© 2026 Mohammed Reda Saadi. All rights reserved.",
    backToTop: "Back to top"
  },
  notFound: {
    title: "Page not found",
    description: "The requested page does not exist or has been moved.",
    homeLabel: "Back to home"
  }
};
