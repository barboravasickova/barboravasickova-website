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
    aboutMeRole: string;
    aboutMeIntro: string;
    aboutMeSubtitle: string;
    aboutMeCtaText: string;
    moreAbout: string;
    steps: { number: string; title: string; description: string }[];
    homeContactTitle: string;
    homeContactSubtitle: string;
    heroContactCta: string;
    homeContactCta: string;
    footerAria: string;
    footerNavAria: string;
    aboutTitle: string;
    aboutGreeting: string;
    aboutIntro: string[];
    aboutSections: { title: string; text: string[] }[];
    aboutSkillsTitle: string;
    aboutSkills: { label: string; items: string }[];
    aboutFreeTimeTitle: string;
    aboutFreeTimeText: string[];
    aboutCollabPrompt: string;
    aboutCollabLink: string;
    contactTitle: string;
    contactSubtitle: string;
    contactFormNameLabel: string;
    contactFormSurnameLabel: string;
    contactFormEmailLabel: string;
    contactFormMessageLabel: string;
    contactFormMessagePlaceholder: string;
    contactFormSubmit: string;
    contactFormStatus: string;
    contactEmailSubject: string;
    contactDetailsTitle: string;
    contactEmailLabel: string;
    contactLocationLabel: string;
    contactLocation: string;
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
    aboutMeTitle: "Barbora Vašíčková",
    aboutMeRole: "Product designerka se zaměřením na UX/UI a přesahem do QA",
    aboutMeIntro:
      "Navrhuji a tvořím digitální produkty s důrazem na přehledné rozhraní, použitelnost a funkčnost. Baví mě propojovat design s frontendem a testováním, aby výsledný web nebo aplikace nejen dobře vypadaly, ale také správně fungovaly.",
    aboutMeSubtitle: "Jaký je můj postup při navrhování produktů?",
    aboutMeCtaText: "Chcete zjistit více o mých zkušenostech, dovednostech a přístupu k práci?",
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
    homeContactTitle:
      "Máte nápad na nový projekt\nnebo potřebujete konzultaci v oblasti UX/QA?",
    homeContactSubtitle: "Napište mi a probereme možnosti spolupráce.",
    heroContactCta: "Napsat zprávu",
    homeContactCta: "Kontakt",
    footerAria: "Patička webu",
    footerNavAria: "Navigace Product design",
    aboutTitle: "O mně",
    aboutGreeting: "Ahoj, jsem Bára.",
    aboutIntro: [
      "Pracuji jako grafička a ve volném čase se věnuji UX/UI designu, frontendu a manuálnímu testování (QA). Baví mě hledat průsečík mezi vizuální stránkou produktu, jeho použitelností a tím, jak funguje po technické stránce.",
      "Nejsem vystudovaná vývojářka ani testerka – v těchto oblastech se vzdělávám jako samouk a své znalosti si rozšiřuji také prostřednictvím kurzů Czechitas a Skillmea. Díky tomu se na digitální produkty dokážu dívat z více úhlů: jako grafička řeším detail a vizuální konzistenci, při návrhu přemýšlím nad uživatelským prostředím a při testování hledám místa, kde něco nefunguje podle očekávání."
    ],
    aboutSections: [
      {
        title: "Od grafiky k testování digitálních produktů",
        text: [
          "Z práce v technické přípravě výroby a grafice jsem zvyklá na přesnost a práci s detailem. Vím, že i zdánlivě malá chyba může mít v praxi velký dopad. Právě tuto pečlivost přenáším i do digitální tvorby.",
          "Na vlastních projektech, jako jsou například web Psocházky nebo aplikace Lagom, se proto nezaměřuji pouze na vzhled. Zkouším uživatelské scénáře, testuji průchody na různých zařízeních a hledám chyby nebo místa, která by mohla uživatele zbytečně brzdit. Zároveň mě baví rozumět tomu, co se děje „pod kapotou“ a jak návrh souvisí s výslednou implementací."
        ]
      }
    ],
    aboutSkillsTitle: "Dovednosti a nástroje",
    aboutSkills: [
      {
        label: "QA & testování",
        items: "Manuální testování webů a mobilních aplikací · iOS · Android · psaní bug reportů · Chrome DevTools · základy JIRA"
      },
      {
        label: "UX/UI & grafika",
        items: "Figma · wireframing · UX výzkum · návrhové systémy · Procreate · grafický design"
      },
      {
        label: "Frontend & technologie",
        items: "HTML5 · CSS3 · JavaScript · Git · GitHub · GitHub Pages · Shoptet"
      }
    ],
    aboutFreeTimeTitle: "Co dělám, když zrovna netvořím?",
    aboutFreeTimeText: [
      "Nejčastěji mě najdete na horách se psem nebo u ilustrace. A když zrovna nedělám ani jedno, pravděpodobně objevuji něco nového z oblasti technologií, designu nebo vývoje.",
      "Baví mě učit se nové věci, propojovat zdánlivě odlišné oblasti a postupně rozšiřovat své zkušenosti od vizuální tvorby směrem k digitálním produktům."
    ],
    aboutCollabPrompt: "Máte zájem o spolupráci?",
    aboutCollabLink: "Napište mi →",
    contactTitle: "S čím vám mohu pomoci?",
    contactSubtitle: "Popište mi svůj projekt a najdeme spolu řešení.",
    contactFormNameLabel: "Jméno",
    contactFormSurnameLabel: "Příjmení",
    contactFormEmailLabel: "E-mail",
    contactFormMessageLabel: "Vaše představa:",
    contactFormMessagePlaceholder: "Popište svůj projekt, nápad nebo otázku…",
    contactFormSubmit: "Odeslat zprávu",
    contactFormStatus: "Pokračujte odesláním připravené zprávy ve svém e-mailovém programu.",
    contactEmailSubject: "Zpráva z webu",
    contactDetailsTitle: "KONTAKT",
    contactEmailLabel: "E-mail",
    contactLocationLabel: "Lokalita",
    contactLocation: "Brno, CZ",
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
    aboutMeTitle: "Barbora Vašíčková",
    aboutMeRole: "Product designer focused on UX/UI with a focus on QA",
    aboutMeIntro:
      "I design and build digital products with a focus on clear interfaces, usability, and functionality. I enjoy connecting design with frontend development and testing so the finished website or app not only looks good, but also works as it should.",
    aboutMeSubtitle: "How do I approach product design?",
    aboutMeCtaText: "Would you like to learn more about my experience, skills, and approach to work?",
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
    homeContactTitle:
      "Do you have an idea for a new project\nor need a consultation in UX/QA?",
    homeContactSubtitle: "Write to me and we can discuss the possibilities for working together.",
    heroContactCta: "Send a message",
    homeContactCta: "Contact",
    footerAria: "Site footer",
    footerNavAria: "Product design navigation",
    aboutTitle: "About",
    aboutGreeting: "Hi, I’m Bára.",
    aboutIntro: [
      "I work across UX/UI design, front-end development, and manual testing (QA). I enjoy connecting the visual side of products with their logical structure and technical reliability. I believe a good product is not only intuitive at first glance, but above all works flawlessly on any device."
    ],
    aboutSections: [
      {
        title: "From detail in graphics to finding bugs in software",
        text: [
          "Working in technical production preparation and graphic design taught me absolute precision - when a small detail is overlooked, it has big consequences in practice. I’ve brought that care into the digital world. When working on projects (such as the Psocházky website or the Lagom app), I don’t only focus on how the interface looks — I actively test user flows across devices and make sure the code matches the specification."
        ]
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
    aboutFreeTimeText: [
      "In my free time you’ll find me on mountain ridges with my dog or illustrating. I also enjoy continuously learning in technical fields and discovering new technologies."
    ],
    aboutCollabPrompt: "Interested in working together?",
    aboutCollabLink: "Write to me →",
    contactTitle: "How can I help you?",
    contactSubtitle: "Tell me about your project and we’ll find a solution together.",
    contactFormNameLabel: "Name",
    contactFormSurnameLabel: "Surname",
    contactFormEmailLabel: "Email",
    contactFormMessageLabel: "Your idea:",
    contactFormMessagePlaceholder: "Describe your project, idea, or question…",
    contactFormSubmit: "Send message",
    contactFormStatus: "Continue by sending the prepared message in your email app.",
    contactEmailSubject: "Website contact message",
    contactDetailsTitle: "CONTACT",
    contactEmailLabel: "Email",
    contactLocationLabel: "Location",
    contactLocation: "Brno, CZ",
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
    caseNextTitle: "Next project",
    caseNotFound: "Project not found",
    caseNavAria: "Case study navigation",
    metadataDescription: "UX and product design portfolio – Barbora Vašíčková."
  }
};
