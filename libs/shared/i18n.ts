import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import es from './assets/locales/es.json';
import fr from './assets/locales/fr.json';

export type SupportedLanguage = 'en' | 'es' | 'fr';

export const SUPPORTED_LANGUAGES: { code: SupportedLanguage; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export const LOCALE_CHANGE_EVENT = 'app:locale-changed';
export const STORAGE_LOCALE_KEY = 'preferred_locale';

function getInitialLanguage(): SupportedLanguage {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_LOCALE_KEY);
    if (saved === 'en' || saved === 'es' || saved === 'fr') {
      return saved;
    }
    const navLang = navigator.language?.split('-')[0];
    if (navLang === 'es' || navLang === 'fr') {
      return navLang;
    }
  }
  return 'en';
}

const initialLang = getInitialLanguage();

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .init({
      lng: initialLang,
      fallbackLng: 'en',
      supportedLngs: ['en', 'es', 'fr'],
      resources: {
        en: { translation: en },
        es: { translation: es },
        fr: { translation: fr },
      },
      interpolation: {
        escapeValue: false,
      },
      returnEmptyString: false,
    });
}

export function changeAppLanguage(lang: SupportedLanguage): Promise<any> {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_LOCALE_KEY, lang);
    window.dispatchEvent(new CustomEvent(LOCALE_CHANGE_EVENT, { detail: { lang } }));
  }
  return i18next.changeLanguage(lang);
}

export function getCurrentLanguage(): SupportedLanguage {
  const current = (i18next.language?.split('-')[0] || 'en') as SupportedLanguage;
  return ['en', 'es', 'fr'].includes(current) ? current : 'en';
}

export { i18next };
export default i18next;
