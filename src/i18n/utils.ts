import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (
      (ui[lang] as Record<string, string>)[key] ??
      (ui[defaultLang] as Record<string, string>)[key] ??
      key
    );
  };
}

export function getAlternateLangUrl(url: URL): string {
  const pathname = url.pathname;
  if (pathname.startsWith('/en')) {
    const stripped = pathname.replace(/^\/en/, '') || '/';
    return stripped;
  }
  return '/en' + pathname;
}
