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
  | 'comments.heading'
  | 'comments.empty'
  | 'comments.loading'
  | 'comments.loadError'
  | 'comments.formHeading'
  | 'comments.name'
  | 'comments.body'
  | 'comments.submit'
  | 'comments.success'
  | 'comments.error'
  | 'comments.notice'
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
  'comments.heading': 'Kommentarer',
  'comments.empty': 'Inga kommentarer ännu. Bli först!',
  'comments.loading': 'Laddar kommentarer …',
  'comments.loadError': 'Kommentarerna kunde inte laddas just nu.',
  'comments.formHeading': 'Skriv en kommentar',
  'comments.name': 'Ditt namn',
  'comments.body': 'Din kommentar',
  'comments.submit': 'Skicka kommentar',
  'comments.success': 'Tack! Din kommentar visas när den har granskats.',
  'comments.error': 'Något gick fel. Försök igen om en stund.',
  'comments.notice': 'Kommentarer granskas innan de visas. Skriv inga personuppgifter.',
  'footer.copyright': '© {year} Teknikguider',
};
