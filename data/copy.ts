import type { Locale } from "@/data/projects";

export const uiCopy: Record<
  Locale,
  {
    navAria: string;
    navProjects: string;
    navAbout: string;
    navContact: string;
    homeAria: string;
    langSwitchAria: string;
    statusLabel: string;
    ctaProjects: string;
    allProjects: string;
    projectDetail: string;
    aboutMeTitle: string;
    aboutMeIntro: string;
    aboutMeSubtitle: string;
    moreAbout: string;
    steps: { number: string; title: string; description: string }[];
    homeContactEyebrow: string;
    homeContactSubtitle: string;
    heroContactCta: string;
    homeContactCta: string;
    footerAria: string;
    footerNavAria: string;
    aboutTitle: string;
    aboutGreeting: string;
    aboutIntro: string;
    aboutSections: { title: string; text: string }[];
    aboutSkillsTitle: string;
    aboutSkills: { label: string; items: string }[];
    aboutFreeTimeTitle: string;
    aboutFreeTimeText: string;
    aboutCollabPrompt: string;
    aboutCollabLink: string;
    contactEyebrow: string;
    contactSubtitle: string;
    contactEmailCta: string;
    projectsTitle: string;
    processTitle: string;
    caseRole: string;
    caseTools: string;
    caseTimeline: string;
    caseContext: string;
    caseAbout: string;
    caseResearch: string;
    caseIdea: string;
    caseDesign: string;
    caseReflection: string;
    caseNextEyebrow: string;
    caseNextTitle: string;
    caseNotFound: string;
    caseNavAria: string;
    metadataDescription: string;
  }
> = {
  cz: {
    navAria: "Hlavní navigace",
    navProjects: "Projekty",
    navAbout: "O mně",
    navContact: "Kontakt",
    homeAria: "Domů",
    langSwitchAria: "Výběr jazyka",
    statusLabel: "Otevřená novým projektům",
    ctaProjects: "Přejít na projekty",
    allProjects: "Všechny projekty",
    projectDetail: "Detail projektu",
    aboutMeTitle: "Barbora Vašíčková — Product, UX & Quality Assurance",
    aboutMeIntro:
      "Pomáhám měnit složitá zadání v přehledná a spolehlivá digitální rozhraní. Mým cílem je navrhovat a testovat produkty, ve kterých se uživatelé přirozeně orientují, fungují bez chyb a zároveň plní byznysové cíle.",
    aboutMeSubtitle: "Jaký je můj postup při navrhování produktů?",
    moreAbout: "Více o mně",
    steps: [
      {
        number: "01",
        title: "Od zadání k problému",
        description:
          "Místo slepého kreslení hledám, co přesně má produkt vyřešit a kde jsou třecí plochy. Dobrý design začíná tím, že se ptám na věci, které ostatní považují za jasné."
      },
      {
        number: "02",
        title: "Kostra, která drží",
        description:
          "Stavím logiku aplikace tak, aby ji uživatel nemusel luštit. Wireframy jsou pro mě nástroj, jak si potvrdit, že cesta k cíli je co nejkratší a bez zbytečných odboček."
      },
      {
        number: "03",
        title: "Precizní exekuce",
        description:
          "Tady se potkává logika s estetikou. Navrhuji rozhraní, která jsou vizuálně čistá, ale hlavně technicky dotažená - tak, aby vývojáři přesně věděli, co a jak mají postavit."
      },
      {
        number: "04",
        title: "Ladění detailů",
        description:
          "První návrh je jen začátek. Sleduji, jak lidé s produktem reálně pracují, a podle toho odstraňuji poslední bariéry. Design pro mě končí až ve chvíli, kdy všechno hladce funguje."
      }
    ],
    homeContactEyebrow: "KONTAKT",
    homeContactSubtitle:
      "Ráda proberu možnosti spolupráce, nové projekty nebo konzultace v oblasti UX a testování digitálních produktů.",
    heroContactCta: "Napsat zprávu",
    homeContactCta: "Propojme se",
    footerAria: "Patička webu",
    footerNavAria: "Navigace Product design",
    aboutTitle: "O mně",
    aboutGreeting: "Ahoj, jsem Bára.",
    aboutIntro:
      "Mám přesah mezi UX/UI designem, frontendovým vývojem a manuálním testováním (QA). Baví mě propojovat vizuální stránku produktů s jejich logickou strukturou a technickou spolehlivostí. Věřím, že dobrý produkt je nejen intuitivní na pohled, ale hlavně funguje bez chyb na jakémkoliv zařízení.",
    aboutSections: [
      {
        title: "Od detailu v grafice k odhalování chyb v softwaru",
        text: "Z práce v technické přípravě výroby a grafice jsem zvyklá na absolutní preciznost - když se přehlédne malý detail, v praxi to má velké následky. Tuhle pečlivost jsem přenesla do digitálního světa. Při práci na projektech (např. webu Psocházky nebo aplikaci Lagom) neřeším jen to, jak rozhraní vypadá, ale aktivně testuji průchody na různých zařízeních a dohlížím na to, aby kód odpovídal zadání."
      }
    ],
    aboutSkillsTitle: "Dovednosti a nástroje:",
    aboutSkills: [
      {
        label: "QA & Testování",
        items: "Manuální testování (iOS, Android, Web), psaní chybových reportů, Chrome DevTools, základy JIRA"
      },
      {
        label: "Design & UX",
        items: "Figma, Procreate, Wireframing, UX výzkum, návrhové systémy"
      },
      {
        label: "Tech & Dev",
        items: "HTML5, CSS3, JavaScript, Git/GitHub/GitHub Pages, Shoptet"
      }
    ],
    aboutFreeTimeTitle: "Co dělám, když zrovna netestuji aplikace?",
    aboutFreeTimeText:
      "Ve volném čase mě potkáte na horských hřebenech se psem nebo u ilustrování. Zároveň mě baví neustále se vzdělávat v technických směrech a objevovat nové technologie.",
    aboutCollabPrompt: "Máte zájem o spolupráci?",
    aboutCollabLink: "Napište mi →",
    contactEyebrow: "KONTAKT",
    contactSubtitle: "Ráda proberu možnosti spolupráce, nové projekty nebo konzultace v oblasti UX a testování digitálních produktů.",
    contactEmailCta: "Napsat e-mail",
    projectsTitle: "Projekty",
    processTitle: "O mně",
    caseRole: "ROLE",
    caseTools: "NÁSTROJE",
    caseTimeline: "TIMELINE",
    caseContext: "KONTEXT",
    caseAbout: "O projektu",
    caseResearch: "Research",
    caseIdea: "Idea",
    caseDesign: "Design",
    caseReflection: "Reflexe",
    caseNextEyebrow: "PROJEKTY",
    caseNextTitle: "Další projekt",
    caseNotFound: "Projekt nenalezen",
    caseNavAria: "Navigace case study",
    metadataDescription: "Portfolio UX a produktového designu – Barbora Vašíčková."
  },
  en: {
    navAria: "Main navigation",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    homeAria: "Home",
    langSwitchAria: "Language selection",
    statusLabel: "Open to new projects",
    ctaProjects: "Go to projects",
    allProjects: "All projects",
    projectDetail: "Project details",
    aboutMeTitle: "Barbora Vašíčková — Product, UX & Quality Assurance",
    aboutMeIntro:
      "I help turn complex briefs into clear and reliable digital interfaces. My goal is to design and test products where users naturally find their way, that work without errors and meet business goals.",
    aboutMeSubtitle: "How do I approach product design?",
    moreAbout: "More about me",
    steps: [
      {
        number: "01",
        title: "From brief to problem",
        description:
          "Instead of jumping straight into screens, I look for what the product actually needs to solve and where the friction is. Good design starts by asking questions that others treat as obvious."
      },
      {
        number: "02",
        title: "A structure that holds",
        description:
          "I build the logic of an app so the user doesn’t have to decode it. Wireframes help me confirm that the path to the goal is as short as possible, without unnecessary detours."
      },
      {
        number: "03",
        title: "Precise execution",
        description:
          "This is where logic meets aesthetics. I design interfaces that are visually clean, but above all technically considered — so developers know exactly what to build and how."
      },
      {
        number: "04",
        title: "Tuning the details",
        description:
          "The first design is only the beginning. I watch how people actually use the product and remove the last barriers. For me, design is finished only when everything works smoothly."
      }
    ],
    homeContactEyebrow: "CONTACT",
    homeContactSubtitle:
      "I’d be happy to discuss collaboration opportunities, new projects, or consultations in UX and digital product testing.",
    heroContactCta: "Send a message",
    homeContactCta: "Let's connect",
    footerAria: "Site footer",
    footerNavAria: "Product design navigation",
    aboutTitle: "About",
    aboutGreeting: "Hi, I’m Bára.",
    aboutIntro:
      "I work across UX/UI design, front-end development, and manual testing (QA). I enjoy connecting the visual side of products with their logical structure and technical reliability. I believe a good product is not only intuitive at first glance, but above all works flawlessly on any device.",
    aboutSections: [
      {
        title: "From detail in graphics to finding bugs in software",
        text: "Working in technical production preparation and graphic design taught me absolute precision - when a small detail is overlooked, it has big consequences in practice. I’ve brought that care into the digital world. When working on projects (such as the Psocházky website or the Lagom app), I don’t only focus on how the interface looks — I actively test user flows across devices and make sure the code matches the specification."
      }
    ],
    aboutSkillsTitle: "Skills and tools:",
    aboutSkills: [
      {
        label: "QA & Testing",
        items: "Manual testing (iOS, Android, Web), bug reporting, Chrome DevTools, JIRA basics"
      },
      {
        label: "Design & UX",
        items: "Figma, Procreate, Wireframing, UX research, design systems"
      },
      {
        label: "Tech & Dev",
        items: "HTML5, CSS3, JavaScript, Git/GitHub/GitHub Pages, Shoptet"
      }
    ],
    aboutFreeTimeTitle: "What do I do when I’m not testing apps?",
    aboutFreeTimeText:
      "In my free time you’ll find me on mountain ridges with my dog or illustrating. I also enjoy continuously learning in technical fields and discovering new technologies.",
    aboutCollabPrompt: "Interested in working together?",
    aboutCollabLink: "Write to me →",
    contactEyebrow: "CONTACT",
    contactSubtitle: "I’d be happy to discuss collaboration opportunities, new projects, or consultations in UX and digital product testing.",
    contactEmailCta: "Send an email",
    projectsTitle: "Projects",
    processTitle: "About",
    caseRole: "ROLE",
    caseTools: "TOOLS",
    caseTimeline: "TIMELINE",
    caseContext: "CONTEXT",
    caseAbout: "About the project",
    caseResearch: "Research",
    caseIdea: "Idea",
    caseDesign: "Design",
    caseReflection: "Reflection",
    caseNextEyebrow: "PROJECTS",
    caseNextTitle: "Next project",
    caseNotFound: "Project not found",
    caseNavAria: "Case study navigation",
    metadataDescription: "UX and product design portfolio – Barbora Vašíčková."
  }
};
