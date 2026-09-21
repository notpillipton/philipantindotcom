import { Injectable, signal } from '@angular/core';
import {
  i18next,
  changeAppLanguage,
  getCurrentLanguage,
  SupportedLanguage,
  SUPPORTED_LANGUAGES,
} from '@shared/i18n';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  readonly currentLanguage = signal<SupportedLanguage>(getCurrentLanguage());
  readonly supportedLanguages = SUPPORTED_LANGUAGES;

  constructor() {
    i18next.on('languageChanged', () => {
      this.currentLanguage.set(getCurrentLanguage());
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('app:locale-changed', (e: any) => {
        const lang = e?.detail?.lang;
        if (lang && lang !== this.currentLanguage()) {
          this.currentLanguage.set(lang);
        }
      });
    }
  }

  setLanguage(lang: SupportedLanguage): Promise<any> {
    this.currentLanguage.set(lang);
    return changeAppLanguage(lang);
  }

  t(key: string, options?: any): string {
    return i18next.t(key, options as any) as string;
  }
}
