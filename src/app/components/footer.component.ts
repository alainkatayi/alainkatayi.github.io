import { Component, inject } from '@angular/core';
import { LucideMoon, LucideSun } from '@lucide/angular';
import { profile } from '../data/profile';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideSun, LucideMoon],
  template: `
    <footer class="border-t border-slate-200 py-10 dark:border-slate-800">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <div>
          <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ profile.name }}</p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {{ profile.role }} · Kinshasa, RDC
          </p>
          <p class="mt-3 text-xs text-slate-500">
            © {{ year }} Alain Katayi. Built for clarity, scale, and systems thinking.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <a
            [href]="'mailto:' + profile.email"
            class="text-sm text-slate-600 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
          >
            {{ profile.email }}
          </a>
          <a
            [href]="profile.linkedin"
            target="_blank"
            rel="noreferrer"
            class="text-sm text-slate-600 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
          >
            LinkedIn
          </a>
          <a
            [href]="profile.github"
            target="_blank"
            rel="noreferrer"
            class="text-sm text-slate-600 transition-colors hover:text-accent dark:text-slate-400 dark:hover:text-accent-soft"
          >
            GitHub
          </a>

          <button
            type="button"
            class="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-accent/40 hover:text-accent dark:border-slate-700 dark:bg-white/5 dark:text-slate-200 dark:hover:text-accent-soft lg:ml-2"
            [attr.aria-label]="
              themeService.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            "
            (click)="themeService.toggle()"
          >
            @if (themeService.theme() === 'dark') {
              <svg lucideSun [size]="16"></svg>
            } @else {
              <svg lucideMoon [size]="16"></svg>
            }
          </button>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly profile = profile;
  readonly themeService = inject(ThemeService);
  readonly year = new Date().getFullYear();
}
