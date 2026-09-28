export type Lang = "et" | "en";

export const content = {
  en: {
    nav: { services: "Services", about: "About Us", contact: "Contact" },
    hero: {
      tagline: "Practical solutions backed by human expertise and driven by innovative software.",
      title: "AI that works for your business.",
      subtitle: "Helping businesses implement AI to operate faster and grow.",
      primary: "Our offers",
      secondary: "Let's talk business",
      est: "EST. 2025",
      scroll: "Scroll down to see our offers →",
    },
    services: {
      heading: "Our offers",
      phone: {
        title: "Telephone",
        caller: {
          title: "AI Caller",
          body: "An AI caller can pick up calls, handle customer support 24/7, set appointments, solve delegated problems and collect information.",
          points: [
            "24/7 answering and support",
            "In your tone of voice",
            "Information gathering and sales opportunities",
          ],
        },
        sms: {
          title: "SMS Text Back Automation",
          body: "When you miss a call, an automated text can immediately follow up. It can catch leads, schedule appointments or handle problems revealed through the conversation.",
          points: [
            "Catch every interested caller",
            "Synced appointment booking",
            "Smart and human",
          ],
        },
      },
      email: {
        title: "Email",
        body: "AI can sort your inbox, draft replies and send them where appropriate, support sales conversations, and make sure outbound emails reach the right people.",
      },
      website: {
        title: "Website",
        body: "Websites built around Google's algorithm and backed by psychology, designed to be the face of your brand and to actually convert visitors into customers.",
      },
      custom: {
        title: "Custom automation",
        body: "Tell us what's the issue you're dealing with and we'll build the software which solves it.",
      },
    },
    certs: { heading: "We are trained and certified by" },
    about: {
      heading: "About Us",
      paragraphs: [
        "D&P Automations was founded by Taavi Pastik and Max Dolnik. We started as roommates with an unmatched desire to build something meaningful with modern technology.",
        "The idea came when one of our relatives told us that he was extremely busy handling emails for his course. So we asked what it would look like if AI took all of that off his plate.",
        "He was far from the only one. Local businesses everywhere are stuck in the same loop. One study found that only about 38% of incoming calls to small businesses were answered by a live person, and in a 2025 survey, 78% of consumers said they had walked away from a business after an unanswered call. Every missed call is a customer who went to someone else.",
        "Email is no different: knowledge workers spend roughly 28% of their workweek, around 11 hours, managing it. That is time that should go to customers and growth.",
        "This is how we like to work, and it has proven itself.",
        "Our ideas won a hackathon in Copenhagen and became an app built for IKEA's employees, helping them save around 1,000,000 work hours a year across 28 countries for the company's Buyback&Resell campaign. That is what we bring now to business in Estonia, EU, and the US.",
        "We start with your problems, then build the software that solves them.",
        "We are the first in Estonia to bring AI callers, SMS text back and email answering to local businesses, which are trained on how you communicate. The AI becomes a clone of your voice and your patterns in talking, texting and writing, so every reply sounds like you.",
        "We started working with American real estate agents, then worked with European solar companies, and now we are bringing it home to Estonia.",
        "We believe good, ethical AI use should be accessible to every business that wants to grow.",
      ],
      sourcesLabel: "Sources",
    },
    contact: {
      heading: "Let's talk",
      personal: "Personal Collaborations",
      general: "General Inquiries",
      book: "Book a call",
    },
  },
  et: {
    nav: { services: "Teenused", about: "Meie", contact: "Kontakt" },
    hero: {
      tagline: "Lahendused, mis ühendavad inimliku ekspertiisi ja AI tarkvara.",
      title: "AI, mis töötab Sinu heaks.",
      subtitle:
        "Aitame ettevõtetel tehisintellekti (AI) abil kiiremini suhtlust hallata ning seeläbi kasvada.",
      primary: "Vaata pakkumisi",
      secondary: "Räägime asjast",
      est: "EST. 2025",
      scroll: "Vaata meie pakkumisi →",
    },
    services: {
      heading: "Meie pakkumised",
      phone: {
        title: "Telefon",
        caller: {
          title: "AI Räägib",
          body: "Vastab kõnedele ükskõik kuna, 24/7 klienditugi, broneerib aegu, lahendab probleeme ja kogub infot.",
          points: [
            "24/7 Vastamine ja Tugi",
            "Sinu Hääletoonis",
            "Info kogumine ja müügi võimalused",
          ],
        },
        sms: {
          title: "SMS tagasihelistamise automaatika",
          body: "Saadab vastamata kõnedele koheselt sõnumi: püüab vihjeid, broneerib või lahendab kliendi probleeme.",
          points: [
            "Püüa kinni iga huviline",
            "Sünkroniseeritud ajabroneering",
            "Nutikas ja inimlik",
          ],
        },
      },
      email: {
        title: "E-post",
        body: "Sorteerib kirju, koostab vastuseid ja veendub et väljaminevad kirjad lähevad õigetele adressaatidele.",
      },
      website: {
        title: "Veebileht",
        body: "Google'i algoritmidest ja psühholoogiast lähtuvad veebilehed, mis aitavad sinu brändi leitavusele kaasa ja selle kaudu ka rohkem müüa.",
      },
      custom: {
        title: "Tellimus tulenevalt kliendi vajadustest",
        body: "Räägi meile, millise probleemiga silmitsi seisad, ja me ehitame midagi, mis selle lahendab.",
      },
    },
    certs: { heading: "Meid on koolitanud ja sertifitseerinud" },
    about: {
      heading: "Meie",
      paragraphs: [
        "D&P asutajad on Taavi Pastik ja Max Dolnik. Alustasime toakaaslastena, keda ühendas tugev soov ehitada AI abil midagi imelist.",
        "Meie idee sündis siis, kui kuulsime ühelt tuttavalt, et tal on tõeline ajaprobleem e-kirjadele vastamisega. Kuna tegemist oli kursusega, mida ta ise läbi viis, hakkas see päris tööd segama. Seega tuli mõte see probleem AI abil lahendada. Ta polnud kaugeltki ainus, kes sellise probleemiga silmitsi seisis.",
        "Kohalikud ettevõtted on kõikjal samas olukorras. Üks uuring leidis, et väikeettevõtetele saabunud kõnedest vastati vaid umbes 38% kordadest, ja 2025. aasta küsitluses ütles 78% tarbijatest, et on vastamata kõne tõttu ettevõttest loobunud. Iga vastamata kõne on klient, kes leidis abi kelleltki teiselt.",
        "Meie ideed võitsid Kopenhaagenis Open Innovation häkatoni ja nendest sai IKEA töötajatele ehitatud rakendus, mis aitab nende „Buyback&Resell“ kampaania raames 28 riigis säästa umbes 1 000 000 töötundi aastas. Selliseid ideid toome igasse oma projekti nii Eestis, Euroopas kui ka USAs.",
        "Kuulame teie probleeme ja ehitame selle ümber tarkvara, mis need lahendab.",
        "Oleme Eestis esimesed, kes toovad kohalikele ettevõtetele AI kõnesüsteemi, SMSi teel vastamise ja e-kirjadele vastamise, mis on õpetatud järgima sinu kõnetooni. AI muutub sinu tooni koopiaks, nii et iga vastus kõlab just nagu sina.",
        "Alustasime Ameerika kinnisvaramaakleritega, seejärel töötasime Euroopa päikeseenergia ettevõtetega ja nüüd toome selle koju Eestisse.",
        "Usume, et korrektne ja eetiline AI kasutus peaks olema kättesaadav igale ettevõttele, kes seda tahab.",
      ],
      sourcesLabel: "Allikad",
    },
    contact: {
      heading: "Räägime",
      personal: "Personaalne koostöö",
      general: "Üldised päringud",
      book: "Broneeri kõne",
    },
  },
} as const;

export const certifications = [
  "Copenhagen Business School",
  "Tartu Ülikool",
  "Harvard University",
  "Google",
  "Anthropic",
  "IBM",
  "GitHub",
];

export const sources = [
  {
    text: 'Aira. (2026, March 29). "62% of business calls go unanswered: The $126K cost [Data]".',
    url: "https://www.getaira.io/blog/missed-business-calls-statistics",
  },
  {
    text: 'Ainora. (2026). "Missed call statistics: What every small business owner should know (2026)".',
    url: "https://ainora.lt/blog/missed-call-statistics-small-business-2026",
  },
  {
    text: 'Chui, M., Manyika, J., Bughin, J., Dobbs, R., Roxburgh, C., Sarrazin, H., Sands, G., & Westergren, M. (2012, July). "The social economy: Unlocking value and productivity through social technologies". McKinsey Global Institute.',
    url: null,
  },
];

export const contactDetails = {
  name: "Taavi Pastik",
  phone: "+372 5907 4547",
  phoneHref: "tel:+37259074547",
  personalEmail: "tpastik@dpautomations.com",
  generalEmail: "info@dpautomations.com",
  booking: "https://cal.com/taavi-pastik-0y2k3l/30min",
};
