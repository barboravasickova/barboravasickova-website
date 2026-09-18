import type { Locale } from "@/data/projects";

export type ProjectCaseCopy = {
  title: string;
  lead: string;
  role: string[];
  timeline: string;
  context: string;
  projectIntro: string[];
  introImageAlt: string;
  introImageAria: string;
  research: {
    paragraphs: string[];
    list?: string[];
    afterList?: string;
    imageAlts?: string[];
    imageArias?: string[];
    imageCaptions?: Array<string | undefined>;
  };
  idea: {
    paragraphs: string[];
    imageAlts?: string[];
    imageArias?: string[];
  };
  design: {
    paragraphs: string[];
    list?: string[];
    afterList?: string;
    imageAlts?: string[];
    imageArias?: string[];
  };
  reflection: {
    paragraphs: string[];
    listHeading?: string;
    list?: string[];
    afterListHeading?: string;
    afterList?: string;
  };
  ctaLabel?: string;
  ctaSecondaryLabel?: string;
  carouselAlts: string[];
  tags?: string[];
};

export const projectCaseCopy: Record<Locale, Record<string, ProjectCaseCopy>> = {
  cz: {
    "lagom-app": {
      title: "Aplikace pro pohyb v rovnováze",
      lead:
        "Lagom motivuje k objevování nových tras a učí uživatele rozumět vlastnímu tělu. Interpretuje zdravotní data lidskou řečí a mění statistiky v užitečnou inspiraci pro každý den.",
      role: ["UX/UI Design"],
      timeline: "říjen 2025 - leden 2026",
      context: "Projekt vznikl v rámci UX kurzu Czechitas.",
      projectIntro: [
        "Lagom dává pohybu smysl. Je to empatický digitální společník navržený pro ty, kteří hledají rovnováhu mezi aktivitou a duševní pohodou.",
        "Namísto tlaku na rekordy motivuje k objevování nových tras a interpretuje zdravotní data lidskou řečí. Projekt vznikl s vizí vytvořit rozhraní, které uživatele nepředbíhá, ale provází."
      ],
      introImageAlt: "Lagom App na telefonu v ruce",
      introImageAria: "Zvětšit obrázek Lagom App na telefonu",
      research: {
        paragraphs: [
          "Hloubkový průzkum mezi respondenty odhalil zásadní bariéru: stávající fitness aplikace uživatele zahlcují čísly bez kontextu, což vede k demotivaci. Klíčovým zjištěním bylo, že 93,5 % lidí hledá při pohybu primárně „vyčištění hlavy“ a psychický odpočinek, nikoliv překonávání rekordů."
        ],
        imageAlts: ["Lagom research - rozhovory", "Lagom user persona"],
        imageArias: ["Zvětšit obrázek rozhovory Lagom", "Zvětšit obrázek Lagom user persona"]
      },
      idea: {
        paragraphs: [
          "Řešení stojí na třech pilířích: personalizovaná inspirace k pohybu na základě aktuální energie, srozumitelné vysvětlení odborných metrik (např. VO2 max) a dynamické vizuální prvky, které reflektují denní dobu a počasí pro posílení spojení s přírodou.",
          "První myšlenky jsem formovala formou ručních skic v Procreate. Tento proces mi umožnil rychle iterovat různé způsoby, jak vizualizovat data."
        ],
        imageAlts: ["Lagom low fidelity wireframes"],
        imageArias: ["Zvětšit obrázek Lagom low fidelity wireframes"]
      },
      design: {
        paragraphs: [
          "Finální UI využívá jemnou paletu barev a čistou typografii pro snížení kognitivní zátěže. Klíčovým prvkem jsou srozumitelné widgety s interpretací metrik, které uživateli neradí jen pomocí čísel, ale vysvětlují jejich význam.",
          "Rozhraní se dynamicky proměňuje mezi aktivním a klidovým režimem, zatímco interaktivní mapové podklady usnadňují objevování tras."
        ],
        imageAlts: ["Lagom homepage", "Lagom aktivita", "Lagom komunita"],
        imageArias: ["Zvětšit obrázek Lagom homepage", "Zvětšit obrázek Lagom aktivita", "Zvětšit obrázek Lagom komunita"]
      },
      reflection: {
        paragraphs: [
          "Projekt Lagom mi potvrdil, že UX design není o estetice, ale o správné prioritizaci informací a srozumitelnosti.",
          "Největší výzvou bylo najít způsob, jak prezentovat komplexní zdravotní data tak, aby jim porozuměl i laik a nebyl jimi zahlcen."
        ],
        listHeading: "Klíčové poznatky:",
        list: [
          "Data potřebují kontext: číslo bez vysvětlení je pro uživatele jen stresový faktor, interpretace je klíčem k motivaci.",
          "Empatie v rozhraní: design musí respektovat aktuální stav uživatele - jeho únavu i počasí venku."
        ],
        afterListHeading: "Co dál?",
        afterList:
          "Do budoucna vidím prostor pro rozšíření o dlouhodobé reporty a hlubší zaměření na přístupnost (accessibility). Cílem by bylo otestovat kontrastní poměry v reálném terénu, aby byla aplikace plně funkční i na přímém slunci během outdoorových aktivit."
      },
      ctaLabel: "Zobrazit kompletní UX Case Study v PDF",
      ctaSecondaryLabel: "Zobrazit prototyp",
      carouselAlts: ["Lagom App náhled v ruce", "Lagom App náhled rozhraní", "Lagom App náhled obrazovky aktivit"]
    },
    psochazky: {
      title: "Online vizitka pro psí školu",
      lead:
        "Webová prezentace pro trenérku psů zaměřená na práci s reaktivními a nejistými psy. Cílem bylo vytvořit prostředí, které snižuje stres už při prvním kontaktu a zároveň efektivně vede uživatele k poptávce služby.",
      role: ["Logo design", "UX/UI Design", "Struktura obsahu", "Realizace"],
      timeline: "leden - březen 2026",
      context: "Projekt vznikl jako kompletní realizace webu na klíč — od definice služby až po spuštění na doméně.",
      projectIntro: [
        "Psocházky jsou služba zaměřená na socializaci a trénink reaktivních nebo nejistých psů v reálném prostředí. Projekt vznikl jako digitální zázemí pro trenérku Šárku, která pomáhá majitelům zvládat náročné situace při každodenních procházkách.",
        "Hlavním cílem bylo vytvořit jedno ucelené a přehledné místo, kde klienti najdou všechny důležité informace o službě, jejím principu i průběhu spolupráce. Do té doby komunikace probíhala převážně ve Facebook skupině, která byla obsahově roztříštěná a pro nové zájemce obtížně uchopitelná.",
        "Web proto nejen jasně vysvětluje princip tréninku „v pohybu“ a odlišuje službu od běžného venčení psů nebo klasických cvičišť, ale zároveň přináší strukturovaný obsah a logickou cestu k poptávce a rezervaci služeb."
      ],
      introImageAlt: "Psocházky - detail webu",
      introImageAria: "Zvětšit obrázek projektu Psocházky",
      research: {
        paragraphs: [
          "Původní komunikace probíhala primárně v uzavřené Facebookové skupině. Pro majitele reaktivních psů, kteří jsou často ve stresu a hledají rychlé pochopení, však bylo toto prostředí bariérou.",
          "V rámci UX strategie jsem se zaměřila na:"
        ],
        list: [
          "Jasnou definici: Okamžité určení, pro koho je služba vhodná, aby majitel neztrácel čas.",
          "Edukaci: Srozumitelné vysvětlení rozdílu mezi pouhým venčením a odborným tréninkem.",
          "Empatii: Odstranění obav z odsouzení nebo pocitu selhání, které tito majitelé často zažívají na klasických cvičištích."
        ],
        afterList: "Web tak slouží jako první krok ke zklidnění a vybudování důvěry ještě před první schůzkou.",
        imageAlts: ["Psocházky - původní komunikace ve Facebook skupině"],
        imageArias: ["Zvětšit koláž původní komunikace Psocházky"],
        imageCaptions: [
          "Původní roztříštěná struktura informací na sociálních sítích, která ztěžovala orientaci novým zájemcům."
        ]
      },
      idea: {
        paragraphs: [
          "Hlavním motivem se stal klid, kontrola a bezpečí.",
          "Chtěla jsem vytvořit prostředí, které nepůsobí jako výcvikový tlak, ale jako průvodce. Web se stává místem, kde uživatel rychle pochopí, že jeho situace má řešení.",
          "Struktura webu je navržená tak, aby odpovídala reálným situacím uživatelů, ne jen výčtu služeb. Důraz je kladen na postupné vedení k akci bez zahlcení informacemi."
        ],
        imageAlts: ["Psocházky - user flow"],
        imageArias: ["Zvětšit user flow projektu Psocházky"]
      },
      design: {
        paragraphs: [
          "Vizuální styl vychází z přirozeného prostředí, ve kterém trénink probíhá. Tlumené barvy, dostatek prostoru a jednoduchá typografie podporují pocit klidu a přehlednosti."
        ],
        list: [
          "jasné rozdělení služeb (skupinové procházky vs. individuální lekce)",
          "rychlou orientaci v obsahu",
          "minimalizaci kroků k poptávce"
        ],
        afterList:
          "Web je navržen mobile-first — s ohledem na to, že uživatelé často hledají informace přímo během procházek.",
        imageAlts: ["Psocházky - lo-fi návrh", "Psocházky - návrh designu"],
        imageArias: ["Zvětšit lo-fi návrh projektu Psocházky", "Zvětšit návrh designu projektu Psocházky"]
      },
      reflection: {
        paragraphs: [
          "Při práci na Psocházkách jsem si uvědomila, jak moc může design ovlivnit vnímání služby, která byla dříve 'schovaná' v chaosu Facebooku. Klíčem k úspěchu bylo pochopení kontextu, ve kterém se uživatel nachází — často unavený a hledající pomoc. Odnáším si zkušenost, že i technicky jednoduchý web může mít obrovský dopad, pokud mluví k uživateli jazykem, kterému v danou chvíli rozumí."
        ]
      },
      ctaLabel: "Zobrazit web psochazky.cz v novém okně",
      carouselAlts: ["Psocházky - full page náhled", "Psocházky - desktop náhled", "Psocházky - phone náhled"]
    },
    "salon-u-potoka": {
      title: "Nová identita a web pro psí salon",
      lead:
        "Modernizace zastaralé identity místního psího salonu se zaměřením na vybudování důvěry, přehlednost služeb a zachování historického odkazu značky.",
      role: ["UX/UI Design", "Rebrand", "Struktura webu"],
      timeline: "Připravuje se",
      context: "Projekt je aktuálně ve fázi přípravy obsahu a vizuálních podkladů.",
      projectIntro: ["Detail case study bude doplněn po dokončení realizace."],
      introImageAlt: "Salon U Potoka - náhled webu",
      introImageAria: "Zvětšit náhled projektu Salon U Potoka",
      research: { paragraphs: ["Obsah sekce připravujeme."] },
      idea: { paragraphs: ["Obsah sekce připravujeme."] },
      design: { paragraphs: ["Obsah sekce připravujeme."] },
      reflection: { paragraphs: ["Obsah sekce připravujeme."] },
      carouselAlts: ["Salon U Potoka - náhled webu"],
      tags: ["Rebrand", "UX optimalizace", "Lokální služba"]
    }
  },
  en: {
    "lagom-app": {
      title: "An app for movement in balance",
      lead:
        "Lagom motivates people to discover new routes and understand their own body. It interprets health data in human language and turns statistics into useful inspiration for every day.",
      role: ["UX/UI Design"],
      timeline: "October 2025 – January 2026",
      context: "The project was created as part of the Czechitas UX course.",
      projectIntro: [
        "Lagom gives movement meaning. It is an empathetic digital companion designed for people looking for balance between activity and mental wellbeing.",
        "Instead of pushing for records, it motivates people to discover new routes and interprets health data in human language. The project was created with the vision of an interface that does not rush the user, but walks with them."
      ],
      introImageAlt: "Lagom App on a phone in hand",
      introImageAria: "Enlarge the Lagom App phone image",
      research: {
        paragraphs: [
          "In-depth research revealed a key barrier: existing fitness apps overwhelm users with numbers without context, which leads to demotivation. A key finding was that 93.5% of people primarily look for a “clear head” and mental rest when moving, not beating records."
        ],
        imageAlts: ["Lagom research – interviews", "Lagom user persona"],
        imageArias: ["Enlarge the Lagom interviews image", "Enlarge the Lagom user persona image"]
      },
      idea: {
        paragraphs: [
          "The solution stands on three pillars: personalised inspiration to move based on current energy, understandable explanations of expert metrics (for example VO2 max), and dynamic visual elements that reflect time of day and weather to strengthen the connection with nature.",
          "I shaped the first ideas as hand sketches in Procreate. This process let me quickly iterate different ways of visualising data."
        ],
        imageAlts: ["Lagom low-fidelity wireframes"],
        imageArias: ["Enlarge the Lagom low-fidelity wireframes"]
      },
      design: {
        paragraphs: [
          "The final UI uses a soft colour palette and clean typography to reduce cognitive load. A key element is understandable widgets that interpret metrics — they don’t just advise with numbers, they explain what the numbers mean.",
          "The interface dynamically shifts between active and rest modes, while interactive map layers make it easier to discover routes."
        ],
        imageAlts: ["Lagom homepage", "Lagom activity", "Lagom community"],
        imageArias: ["Enlarge the Lagom homepage image", "Enlarge the Lagom activity image", "Enlarge the Lagom community image"]
      },
      reflection: {
        paragraphs: [
          "The Lagom project confirmed that UX design is not about aesthetics, but about prioritising information and making it understandable.",
          "The biggest challenge was finding a way to present complex health data so that a layperson could understand it without feeling overwhelmed."
        ],
        listHeading: "Key takeaways:",
        list: [
          "Data need context: a number without explanation is just a stress factor for the user; interpretation is the key to motivation.",
          "Empathy in the interface: design must respect the user’s current state — their fatigue and the weather outside."
        ],
        afterListHeading: "What’s next?",
        afterList:
          "Going forward, I see room for long-term reports and a deeper focus on accessibility. The goal would be to test contrast ratios in real terrain so the app stays fully usable in direct sunlight during outdoor activities."
      },
      ctaLabel: "View the full UX case study PDF",
      ctaSecondaryLabel: "View prototype",
      carouselAlts: ["Lagom App preview in hand", "Lagom App interface preview", "Lagom App activity screen preview"]
    },
    psochazky: {
      title: "An online calling card for a dog school",
      lead:
        "A website for a dog trainer focused on working with reactive and uncertain dogs. The goal was to create an environment that lowers stress from the first contact and also guides users towards requesting the service.",
      role: ["Logo design", "UX/UI Design", "Content structure", "Implementation"],
      timeline: "January – March 2026",
      context: "The project was a complete website delivery — from defining the service to launching on the domain.",
      projectIntro: [
        "Psocházky is a service focused on socialising and training reactive or uncertain dogs in a real environment. The project became a digital home for trainer Šárka, who helps owners handle difficult situations on everyday walks.",
        "The main goal was to create one clear place where clients can find all the important information about the service, how it works, and how collaboration happens. Until then, communication lived mostly in a Facebook group that was fragmented and hard for new people to grasp.",
        "The website therefore explains the principle of training “in motion”, sets the service apart from ordinary dog walking or classic training grounds, and also offers structured content and a logical path to enquiry and booking."
      ],
      introImageAlt: "Psocházky – website detail",
      introImageAria: "Enlarge the Psocházky project image",
      research: {
        paragraphs: [
          "The original communication happened mainly in a closed Facebook group. For owners of reactive dogs, who are often stressed and looking for quick understanding, that environment was a barrier.",
          "In the UX strategy I focused on:"
        ],
        list: [
          "A clear definition: immediately showing who the service is for, so the owner doesn’t waste time.",
          "Education: explaining the difference between ordinary walking and professional training.",
          "Empathy: removing the fear of judgement or failure that these owners often feel at classic training grounds."
        ],
        afterList: "The website thus becomes a first step towards calm and trust even before the first meeting.",
        imageAlts: ["Psocházky – original communication in a Facebook group"],
        imageArias: ["Enlarge the Psocházky original communication collage"],
        imageCaptions: [
          "The original fragmented structure of information on social media, which made orientation harder for new clients."
        ]
      },
      idea: {
        paragraphs: [
          "The main motif became calm, control, and safety.",
          "I wanted to create an environment that does not feel like training pressure, but like a guide. The website becomes a place where the user quickly understands that their situation has a solution.",
          "The structure is designed around real user situations, not just a list of services. The emphasis is on leading people to action step by step, without overwhelming them."
        ],
        imageAlts: ["Psocházky – user flow"],
        imageArias: ["Enlarge the Psocházky user flow"]
      },
      design: {
        paragraphs: [
          "The visual style comes from the natural environment where the training takes place. Muted colours, plenty of space, and simple typography support a sense of calm and clarity."
        ],
        list: [
          "a clear split of services (group walks vs. individual lessons)",
          "fast orientation in the content",
          "as few steps as possible to make an enquiry"
        ],
        afterList: "The website is designed mobile-first — because users often look for information during walks.",
        imageAlts: ["Psocházky – lo-fi design", "Psocházky – design proposal"],
        imageArias: ["Enlarge the Psocházky lo-fi design", "Enlarge the Psocházky design proposal"]
      },
      reflection: {
        paragraphs: [
          "Working on Psocházky made me realise how much design can change the perception of a service that used to be ‘hidden’ in the chaos of Facebook. The key was understanding the context the user is in — often tired and looking for help. I take away the experience that even a technically simple website can have a huge impact if it speaks to the user in a language they understand at that moment."
        ]
      },
      ctaLabel: "View psochazky.cz in a new window",
      carouselAlts: ["Psocházky – full-page preview", "Psocházky – desktop preview", "Psocházky – phone preview"]
    },
    "salon-u-potoka": {
      title: "A new identity and website for a dog salon",
      lead:
        "Modernising an outdated local dog salon identity, focused on building trust, making services easy to understand, and keeping the brand’s historical roots.",
      role: ["UX/UI Design", "Rebrand", "Website structure"],
      timeline: "In preparation",
      context: "The project is currently in the content and visual assets preparation phase.",
      projectIntro: ["The case study details will be added after the project is completed."],
      introImageAlt: "Salon U Potoka – website preview",
      introImageAria: "Enlarge the Salon U Potoka project preview",
      research: { paragraphs: ["This section is being prepared."] },
      idea: { paragraphs: ["This section is being prepared."] },
      design: { paragraphs: ["This section is being prepared."] },
      reflection: { paragraphs: ["This section is being prepared."] },
      carouselAlts: ["Salon U Potoka – website preview"],
      tags: ["Rebrand", "UX optimisation", "Local service"]
    }
  }
};
