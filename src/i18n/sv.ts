export type UIStringKey =
  | 'nav.home'
  | 'nav.guides'
  | 'a11y.skipToContent'
  | 'a11y.nav.label'
  | 'home.hero.heading'
  | 'home.hero.body'
  | 'home.hero.cta'
  | 'home.categories.heading'
  | 'guides.heading'
  | 'guides.intro'
  | 'guides.empty'
  | 'guide.readingTime'
  | 'footer.copyright';

export const sv: Record<UIStringKey, string> = {
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
};
