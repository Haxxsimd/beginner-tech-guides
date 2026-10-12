import { sv } from './sv';

export const defaultLang = 'sv' as const;
export const locales = ['sv'] as const;
export type Locale = (typeof locales)[number];

const translations: Record<Locale, typeof sv> = { sv };

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (locales.includes(lang as Locale)) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof sv, vars?: Record<string, string | number>): string {
    let str: string = translations[lang][key] ?? translations[defaultLang][key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{${k}}`, String(v));
      }
    }
    return str;
  };
}
