/** Formats a UTC-midnight frontmatter date without shifting by the build host's local time zone. */
export function formatDate(date: Date, locale: string = 'sv-SE'): string {
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
