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
    aboutSubheading: string;
    aboutItems: { title: string; text: string }[];
    aboutClosing: string;
    aboutBaiaLink: string;
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
    aboutMeTitle: "Barbora Vašíčková — Product & UX Designer",
    aboutMeIntro:
      "Pomáhám měnit složitá zadání v přehledná digitální rozhraní. Mým cílem je navrhovat produkty, ve kterých se uživatelé přirozeně orientují a které zároveň plní byznysové cíle.",
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
      "Ráda proberu nové projekty, UX konzultace nebo spolupráci na ilustracích pod mou značkou",
    heroContactCta: "Napsat zprávu",
    homeContactCta: "Propojme se",
    footerAria: "Patička webu",
    footerNavAria: "Navigace Product design",
    aboutTitle: "O mně",
    aboutSubheading: "Jak o designu přemýšlím:",
    aboutItems: [
      {
        title: "Navigace bez hádání",
        text: "Rozhraní stavím tak, aby člověk přirozeně věděl, co má udělat dál. Dobrý design je pro mě ten, který uživatel nemusí luštit."
      },
      {
        title: "Pořádek a souvislosti",
        text: "Ráda hledám řád v hromadě informací. Skládám si dílky k sobě, dokud celá logika produktu nepůsobí přirozeně."
      },
      {
        title: "Vizuál jako pomocník",
        text: "Estetika je pro mě důležitá, ale beru ji hlavně jako způsob, jak věci zpřehlednit a zpříjemnit jejich používání."
      }
    ],
    aboutClosing:
      "Ve volném čase tvořím pod jménem BAIA, kde kreslím ilustrace a věnuji se autorské tvorbě. Je to pro mě skvělý protipól k analytickému UX - učí mě to hlídat si vizuální detail a nezapomínat na to, že design má být i radost používat.",
    aboutBaiaLink: "Když zrovna neřeším UX, najdete mě u barev pod značkou BAIA →",
    contactEyebrow: "KONTAKT",
    contactSubtitle: "Ráda proberu nové projekty, UX konzultace nebo spolupráci pod značkou",
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
    aboutMeTitle: "Barbora Vašíčková — Product & UX Designer",
    aboutMeIntro:
      "I help turn complex briefs into clear digital interfaces. My goal is to design products where users naturally find their way while meeting business goals.",
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
      "I’d be happy to discuss new projects, UX consultations, or illustration work under my brand",
    heroContactCta: "Send a message",
    homeContactCta: "Let's connect",
    footerAria: "Site footer",
    footerNavAria: "Product design navigation",
    aboutTitle: "About",
    aboutSubheading: "How I think about design:",
    aboutItems: [
      {
        title: "Navigation without guessing",
        text: "I build interfaces so people naturally know what to do next. Good design, for me, is the kind users don’t have to decode."
      },
      {
        title: "Order and connections",
        text: "I like finding structure in a pile of information. I keep putting the pieces together until the whole product logic feels natural."
      },
      {
        title: "Visuals as a helper",
        text: "Aesthetics matter to me, but I mainly use them to make things clearer and more pleasant to use."
      }
    ],
    aboutClosing:
      "In my free time I create as BAIA, drawing illustrations and working on personal projects. It’s a great counterpart to analytical UX — it teaches me to look after visual detail and remember that design should also be a joy to use.",
    aboutBaiaLink: "When I’m not solving UX, you’ll find me with colour under the BAIA brand →",
    contactEyebrow: "CONTACT",
    contactSubtitle: "I’d be happy to discuss new projects, UX consultations, or collaboration under the",
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
