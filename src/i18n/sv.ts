export const sv = {
  'nav.home': 'Hem',
  'nav.guides': 'Guider',
  'a11y.skipToContent': 'Hoppa till innehåll',
  'a11y.nav.label': 'Huvudnavigering',
  'home.hero.heading': 'Teknik behöver inte vara krångligt',
  'home.hero.body': 'Välkommen till Teknikguider — en plats där vi förklarar datorteknik på ett lugnt och tydligt sätt. Inga konstiga fackord, inget onödigt krångel. Bara tydliga svar på vanliga frågor.',
  'home.hero.cta': 'Se alla guider',
  'home.categories.heading': 'Vad kan du lära dig?',
  'guides.heading': 'Guider',
  'guides.intro': 'Tydliga guider om datorteknik — skrivna för dig som inte är expert.',
  'guides.empty': 'Inga guider publicerade ännu. Kom tillbaka snart!',
  'guide.readingTime': '{minutes} min läsning',
  'footer.copyright': '© {year} Teknikguider',
} as const;

export type UIStringKey = keyof typeof sv;
