import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideTerminal } from '@lucide/angular';
import { philosophyTabs } from '../data/philosophy';
import { I18nService } from '../services/i18n.service';
import { SectionHeadingComponent } from './ui/section-heading.component';

@Component({
  selector: 'app-philosophy',
  standalone: true,
  imports: [SectionHeadingComponent, NgClass, LucideTerminal],
  template: `
    <section class="border-t border-slate-200 py-20 dark:border-slate-800">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <app-section-heading
          [eyebrow]="i18n.copy().philosophy.eyebrow"
          [title]="i18n.copy().philosophy.title"
          [description]="i18n.copy().philosophy.description"
        />

        <div
          class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-frame dark:border-slate-800"
        >
          <div
            class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-4 py-3"
          >
            <div class="flex items-center gap-2 text-slate-300">
              <svg lucideTerminal [size]="16" class="text-accent-soft"></svg>
              <span class="font-mono text-xs">alain&#64;systems:~</span>
            </div>
            <div class="flex flex-wrap gap-2" role="tablist" aria-label="Philosophy topics">
              @for (tab of philosophyTabs; track tab.id) {
                <button
                  type="button"
                  role="tab"
                  [attr.aria-selected]="tab.id === activeId"
                  class="rounded-lg px-3 py-1.5 font-mono text-xs transition-colors"
                  [ngClass]="
                    tab.id === activeId
                      ? 'bg-accent/20 text-accent-soft'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  "
                  (click)="activeId = tab.id"
                >
                  {{ i18n.copy().philosophy.tabs[tab.id].label }}
                </button>
              }
            </div>
          </div>

          <div class="min-h-[260px] p-5 sm:p-6" role="tabpanel">
            <p class="mb-4 font-mono text-xs text-accent-soft">$ {{ active.prompt }}</p>
            <pre
              class="overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-7 text-slate-300 transition-opacity duration-250"
            >{{ i18n.copy().philosophy.tabs[active.id].lines.join('\n') }}</pre>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PhilosophyComponent {
  readonly philosophyTabs = philosophyTabs;
  readonly i18n = inject(I18nService);
  activeId = philosophyTabs[0].id;

  get active() {
    return this.philosophyTabs.find((tab) => tab.id === this.activeId) ?? this.philosophyTabs[0];
  }
}
