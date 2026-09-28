import { Component } from '@angular/core';
import { LucideArrowDownRight, LucideMail } from '@lucide/angular';
import { profile } from '../data/profile';
import { ButtonComponent } from './ui/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, LucideArrowDownRight, LucideMail],
  template: `
    <section id="top" class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.08),transparent_28%)]"
      ></div>

      <div
        class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-10 lg:gap-16 lg:px-8 lg:py-24"
      >
        <div>
          <p
            class="mb-5 animate-fade-up text-sm font-medium text-slate-500 dark:text-slate-400"
            style="animation-delay: 0ms"
          >
            {{ profile.role }} | {{ profile.specialty }}
          </p>

          <h1
            class="animate-fade-up text-balance text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]"
            style="animation-delay: 80ms"
          >
            {{ profile.headline }}
          </h1>

          <p
            class="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-600 dark:text-slate-400"
            style="animation-delay: 160ms"
          >
            {{ profile.subheadline }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3 animate-fade-up" style="animation-delay: 240ms">
            <app-button className="cursor-pointer" (clicked)="scrollTo('architecture')">
              Explore Architecture
              <svg lucideArrowDownRight [size]="16"></svg>
            </app-button>
            <app-button
              variant="secondary"
              className="cursor-pointer"
              (clicked)="scrollTo('contact')"
            >
              Get in Touch
              <svg lucideMail [size]="16"></svg>
            </app-button>
          </div>

          <dl
            class="mt-10 grid max-w-lg grid-cols-2 gap-4 border-t border-slate-200 pt-8 animate-fade-up dark:border-slate-800 sm:grid-cols-3"
            style="animation-delay: 320ms"
          >
            @for (item of meta; track item.label) {
              <div>
                <dt class="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {{ item.label }}
                </dt>
                <dd class="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {{ item.value }}
                </dd>
              </div>
            }
          </dl>
        </div>

        <div class="relative mx-auto w-full max-w-md animate-fade-scale" style="animation-delay: 200ms">
          <div
            class="absolute -inset-[2px] rounded-[1.35rem] bg-gradient-to-br from-accent via-slate-400/40 to-accent-soft opacity-70 blur-[1px] animate-border-pulse dark:from-accent/80 dark:via-slate-600/40 dark:to-accent-soft/70"
          ></div>
          <div
            class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-frame dark:border-slate-700 dark:bg-galactic-soft"
          >
            <div
              class="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800"
            >
              <div class="flex gap-1.5">
                <span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
              </div>
              <span class="font-mono text-[11px] text-slate-500">profile.alc // engineer</span>
            </div>
            <div class="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="/alain-katayi.jpg"
                [alt]="profile.name + ', Software Engineer and System Designer'"
                class="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
              />
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent dark:from-galactic/50"
              ></div>
            </div>
            <div class="flex items-center justify-between gap-3 px-4 py-4">
              <div>
                <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ profile.name }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">Kinshasa, RDC</p>
              </div>
              <span
                class="rounded-lg border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent-muted dark:text-accent-soft"
              >
                Systems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly profile = profile;
  readonly meta = [
    { label: 'Focus', value: 'System Design' },
    { label: 'Domain', value: 'FinTech' },
    { label: 'Based in', value: 'Kinshasa, RDC' },
  ];

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
