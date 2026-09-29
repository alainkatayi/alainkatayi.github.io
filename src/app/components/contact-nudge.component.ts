import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { LucideMessageCircle, LucideX } from '@lucide/angular';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-contact-nudge',
  standalone: true,
  imports: [LucideMessageCircle, LucideX],
  template: `
    @if (visible()) {
      <aside
        class="fixed bottom-6 left-4 z-[65] w-[min(22rem,calc(100vw-2rem))] animate-fade-up rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl shadow-slate-900/15 backdrop-blur-md dark:border-slate-700 dark:bg-[#0B0F19]/95 dark:shadow-black/50 sm:left-6"
        role="dialog"
        [attr.aria-label]="i18n.copy().nudge.title"
      >
        <div class="flex items-start gap-3">
          <span
            class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent"
          >
            <svg lucideMessageCircle [size]="18"></svg>
          </span>
          <div class="min-w-0 flex-1">
            <div class="flex items-start justify-between gap-2">
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                {{ i18n.copy().nudge.title }}
              </p>
              <button
                type="button"
                class="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/5 dark:hover:text-slate-200"
                [attr.aria-label]="i18n.copy().nudge.close"
                (click)="dismiss()"
              >
                <svg lucideX [size]="16"></svg>
              </button>
            </div>
            <p class="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {{ i18n.copy().nudge.body }}
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-muted"
                (click)="dismiss()"
              >
                {{ i18n.copy().nudge.cta }}
              </a>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-white/5"
                (click)="dismiss()"
              >
                {{ i18n.copy().nudge.dismiss }}
              </button>
            </div>
          </div>
        </div>
      </aside>
    }
  `,
})
export class ContactNudgeComponent implements OnInit, OnDestroy {
  readonly i18n = inject(I18nService);
  readonly visible = signal(false);
  private timerId: number | undefined;

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('portfolio-nudge-dismissed') === '1') return;

    this.timerId = window.setTimeout(() => {
      this.visible.set(true);
    }, 25000);
  }

  dismiss(): void {
    this.visible.set(false);
    sessionStorage.setItem('portfolio-nudge-dismissed', '1');
  }

  ngOnDestroy(): void {
    if (this.timerId) window.clearTimeout(this.timerId);
  }
}
