export default {
  locale: "fr",
  siteName: "Mohammed Reda Saadi",
  seo: {
    title: "Mohammed Reda Saadi — Portfolio",
    description: "Portfolio de Mohammed Reda Saadi : logistique, transport et données, avec une orientation SAP/ERP. Casablanca."
  },
  navigation: {
    work: "Projets",
    about: "À propos",
    journey: "Parcours",
    contact: "Contact",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu"
  },
  hero: {
    eyebrow: "Supply chain · Expertise métier · Digital",
    titleStart: "Vos défis supply chain.",
    titleAccent: "Mes solutions digitales.",
    description: "Master en E-Logistique / Transport, j’allie expertise terrain et développement logiciel pour transformer les contraintes de la supply chain en solutions digitales qui simplifient les opérations.",
    proofsLabel: "Résultats mesurés sur les projets présentés",
    proofs: [
      { value: "−2 000 km", context: "Sur un test d’optimisation des tournées de carburant", project: "WIN-TMS" },
      { value: "1 h → 10 s", context: "Temps de rapprochement documentaire", project: "Gamma Transit" }
    ],
    primaryCta: "Voir les résultats",
    resumeCta: "Voir le CV",
    location: "Casablanca, Maroc"
  },
  labels: {
    workTitle: "Projets",
    workIntro: "Des outils conçus au contact du terrain. Chaque projet présente ce qui a été construit, les décisions prises et les résultats observés.",
    viewProject: "Voir l'étude de cas",
    zoomImage: "Voir la capture en grand",
    testDay: "économisés sur une journée de test · WIN-TMS",
    reconciliation: "pour un rapprochement documentaire · Gamma Transit",
    challenge: "Défi",
    contribution: "Ma contribution",
    solution: "Solution",
    results: "Résultats",
    limitations: "Limites",
    backToProjects: "Retour aux projets",
    nextProject: "Projet suivant",
    illustration: "Illustration reconstituée"
  },
  about: {
    title: "À propos",
    paragraphs: [
      "Mohammed Reda Saadi, basé à Casablanca. Licence en management, transport et logistique à Mundiapolis (2022–2025), master e-logistique en cours à l'ESITH (2025–2027).",
      "Orientation SAP/ERP : relier les opérations réelles — transport, achats, stocks — à la donnée qui les fait avancer.",
      "En pratique : conception de TMS avec Python et React, prototypage Excel/VBA et automatisation documentaire."
    ]
  },
  skills: [
    {
      id: "business",
      title: "Métier",
      items: ["Analyse métier", "Transport", "Achats", "Stocks"]
    },
    {
      id: "data",
      title: "Outils & données",
      items: ["Excel / VBA", "Python", "SQL", "pandas"]
    },
    {
      id: "development",
      title: "Développement",
      items: ["PostgreSQL", "Django", "Streamlit", "React"]
    }
  ],
  experiences: [
    {
      id: "sap-integration",
      organization: "WINXO",
      role: "Intégration SAP/ERP",
      period: "À venir",
      description: "Mission prévue : intégrer WIN-TMS à SAP, dans la continuité du stage de développement. Aucun résultat livré à ce stade.",
      status: "planned"
    },
    {
      id: "zine-capital-invest",
      organization: "Zine Capital Invest",
      role: "Prototype TMS sur Excel/VBA",
      period: "Mai – août 2025",
      description: "Conception d'un prototype TMS sur Excel/VBA pour saisir les trajets, consulter leur historique et aider à équilibrer l'affectation des voyages.",
      status: "completed"
    },
    {
      id: "wafa-ima",
      organization: "Wafa IMA",
      role: "Assistance (temps partiel)",
      period: "2024–2025",
      description: "Gestion des appels d'urgence et coordination des prestataires au Maroc et à l'international, à temps partiel.",
      status: "completed"
    },
    {
      id: "snmm",
      organization: "SNMM",
      role: "Achats",
      period: "Été 2023",
      description: "Négociation avec les fournisseurs, suivi des commandes et gestion du magasin de pièces détachées.",
      status: "completed"
    },
    {
      id: "trans-saadiyine",
      organization: "Trans Saadiyine",
      role: "Exploitation",
      period: "2020–2021",
      description: "Coordination des flux, planification des itinéraires et suivi du parc de camions.",
      status: "completed"
    }
  ],
  education: [
    {
      id: "esith-master",
      institution: "ESITH",
      qualification: "Master e-logistique",
      period: "2025–2027"
    },
    {
      id: "mundiapolis-licence",
      institution: "Mundiapolis",
      qualification: "Licence management, transport et logistique",
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
      category: "Prototype TMS",
      title: "TMS sur Excel/VBA",
      summary: "De mai à août 2025, prototype TMS sur Excel/VBA pour saisir les trajets et exploiter l'historique des trajets réalisés afin d'équilibrer l'affectation des voyages.",
      tags: ["TMS", "Excel", "VBA", "Affectation"],
      illustration: "/assets/zine-tms.png",
      illustrationAlt: "Capture du prototype TMS Excel/VBA : tableau des voyages, départs, arrivées, palettes, poids, camions affectés et distances, avec un bouton d'affectation.",
      illustrationCaption: "Capture du prototype TMS — affectation des voyages.",
      resultValue: null,
      resultContext: null,
      challenge: ["Conserver une vue des trajets déjà réalisés pour mieux répartir les prochains voyages."],
      contribution: ["Analyse des besoins et conception du prototype TMS sur Excel avec VBA.", "Mise en place de la saisie des trajets et de leur historique : départ, arrivée, palettes, poids, camion affecté et distance.", "Recommandations d'optimisation du transport."],
      solution: ["L'historique des trajets réalisés sert d'appui à une affectation plus équilibrée des voyages."],
      results: ["Un prototype TMS réalisé avec saisie et historique des trajets ; aucun gain chiffré n'est revendiqué."],
      limitations: ["Prototype : aucun déploiement ou impact chiffré n'est revendiqué."]
    },
    {
      id: "win-tms",
      slug: "win-tms",
      organization: "WINXO",
      category: "Logistique & transport",
      title: "WIN-TMS",
      summary: "Chez WINXO, de juin à août 2026 : conception et développement de WIN-TMS en Python et React pour les compartiments, capacités, affectations et tournées de carburant. Sur une journée de test, la distance passe de 30 000 km à 28 000 km.",
      tags: ["Python", "React", "TMS", "Carburant"],
      illustration: "/assets/win-tms.png",
      illustrationAlt: "Capture de l'accueil WIN-TMS : portail Dispatch avec les modules commandes, planification, tournées, flotte et facturation.",
      illustrationCaption: "Capture du portail Dispatch — vue d'ensemble.",
      resultValue: "2 000 km",
      resultContext: "de distance évitée sur une journée de test",
      challenge: [
        "Avoir une vue claire d'un TMS carburant en conditions réelles : compartiments de camion, capacités, affectations et tournées.",
        "Mesurer l'effet des choix de configuration sur la distance parcourue, sur une journée de test.",
        "Relier carburant, capacité et itinéraire aux décisions quotidiennes d'exploitation."
      ],
      contribution: [
        "Conception des règles de gestion des compartiments, capacités, commandes et centres de chargement.",
        "Développement en Python et React des affectations et tournées automatisées, de la base de données et des interfaces de suivi.",
        "Comparaison des distances obtenues sur une journée de test."
      ],
      solution: [
        "Restructuration des capacités et des affectations, puis recalcul des tournées du jour de test.",
        "Lecture directe des écarts : 30 000 km avant, 28 000 km après."
      ],
      results: [
        "Distance de la journée de test : 30 000 km → 28 000 km.",
        "Environ 2 000 km de distance évitée ce jour-là."
      ],
      limitations: [
        "Évaluation limitée à une seule journée de test.",
        "Aucun engagement de résultat sur d'autres périodes ou d'autres flottes."
      ]
    },
    {
      id: "gamma-transit",
      slug: "gamma-transit",
      organization: "Gamma Transit",
      category: "Documents & traçabilité",
      title: "Gamma Transit",
      summary: "Chez Gamma Transit, d'août à septembre 2026 : automatisation du rapprochement documentaire avec Excel et l'OCR, de 1 h à 10 s, avec assistance au flux NGP et traçabilité.",
      tags: ["OCR", "Excel", "NGP", "Traçabilité"],
      illustration: "/assets/gamma-transit.png",
      illustrationAlt: "Capture de l'outil Gamma Transit : feuille de classement NGP et interface de ventilation douanière d'un dossier.",
      illustrationCaption: "Capture de l'outil — ventilation douanière.",
      resultValue: "1 h → 10 s",
      resultContext: "temps de rapprochement documentaire",
      challenge: [
        "Un flux documentaire de transport suivi à la main, document par document.",
        "Rapprocher rapidement les pièces entre elles tout en gardant la trace de chaque contrôle."
      ],
      contribution: [
        "Développement d'un complément Excel pour l'extraction OCR et le rapprochement documentaire.",
        "Assistance au classement tarifaire NGP, génération de la ventilation douanière et contrôles de cohérence et de traçabilité."
      ],
      solution: [
        "Lecture automatisée des documents, puis comparaison structurée dans Excel.",
        "Chaque contrôle laisse une trace consultable."
      ],
      results: [
        "Temps de rapprochement : 1 h → 10 s.",
        "Traçabilité des contrôles conservée."
      ],
      limitations: [
        "Outil d'assistance : un contrôle humain reste nécessaire.",
        "Périmètre limité au flux documentaire traité."
      ]
    },
    {
      id: "fuel-tracking",
      slug: "fuel-tracking",
      organization: "Projet personnel",
      category: "Data & outils",
      title: "Fuel Tracking",
      summary: "Application Python/Streamlit pour suivre les bons de carburant et la consommation. Un outil de suivi, sans gain mesuré.",
      tags: ["Python", "Streamlit", "Carburant", "Suivi"],
      illustration: "/assets/fuel-tracking.png",
      illustrationAlt: "Capture de l'application de suivi logistique montrant la saisie d'un trajet, les calculs et les onglets de statistiques et rapports.",
      illustrationCaption: "Capture de l'application — saisie et calculs.",
      resultValue: null,
      resultContext: null,
      challenge: [
        "Suivre à la main les bons de carburant et la consommation associée.",
        "Regrouper bons et consommation au même endroit, avec un historique lisible."
      ],
      contribution: [
        "Conception d'une application Python/Streamlit : structure des données, écrans, mise à jour.",
        "Focus sur la saisie simple des bons et la lecture claire des volumes."
      ],
      solution: [
        "Application web légère qui centralise les bons de carburant et la consommation.",
        "Vue directe des données, sans modélisation avancée."
      ],
      results: [
        "Outil personnel fonctionnel : bons et consommation centralisés.",
        "Aucun gain mesuré à ce stade."
      ],
      limitations: [
        "Usage personnel, sans validation en entreprise.",
        "Aucun gain quantifié ni revendiqué."
      ]
    }
  ],
  contact: {
    title: "Contact",
    description: "Une question sur les opérations, la logistique ou SAP/ERP ? Écrivez.",
    email: "Medredasaadi02@gmail.com",
    emailLabel: "E-mail",
    copyLabel: "Copier l'adresse",
    copySuccess: "Adresse copiée",
    copyFailure: "Copie impossible — sélectionnez l'adresse manuellement."
  },
  footer: {
    copyrightLabel: "© 2026 Mohammed Reda Saadi. Tous droits réservés.",
    backToTop: "Haut de page"
  },
  notFound: {
    title: "Page introuvable",
    description: "La page demandée n'existe pas ou a été déplacée.",
    homeLabel: "Retour à l'accueil"
  }
};
