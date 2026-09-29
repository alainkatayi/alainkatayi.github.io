import { Injectable, computed, effect, signal } from '@angular/core';
import { type AppCopy, type Lang, translations } from '../i18n/translations';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('portfolio-lang');
  if (stored === 'en' || stored === 'fr') return stored;
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(readInitialLang());
  readonly copy = computed<AppCopy>(() => translations[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      localStorage.setItem('portfolio-lang', lang);
      document.documentElement.lang = lang;
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.update((current) => (current === 'en' ? 'fr' : 'en'));
  }
}
