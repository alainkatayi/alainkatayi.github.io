import { Component, inject } from '@angular/core';
import { LucideArrowUpRight, LucideExternalLink } from '@lucide/angular';
import { projects } from '../data/projects';
import { stackIcons } from '../data/tech';
import { RevealDirective } from '../directives/reveal.directive';
import { I18nService } from '../services/i18n.service';
import { CardComponent } from './ui/card.component';
import { SectionHeadingComponent } from './ui/section-heading.component';
import { SocialIconComponent } from './ui/social-icon.component';
import { TechBadgeComponent } from './ui/tech-badge.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    CardComponent,
    TechBadgeComponent,
    SocialIconComponent,
    RevealDirective,
    LucideArrowUpRight,
    LucideExternalLink,
  ],
  template: `
    <section
      id="projects"
      class="scroll-mt-24 border-t border-slate-200 py-20 dark:border-slate-800"
    >
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <app-section-heading
          [eyebrow]="i18n.copy().projects.eyebrow"
          [title]="i18n.copy().projects.title"
          [description]="i18n.copy().projects.description"
        />

        <div class="grid gap-6 lg:grid-cols-1 lg:max-w-3xl">
          @for (project of projects; track project.id; let i = $index) {
            <article appReveal [appRevealDelay]="i * 80">
              <app-card className="flex h-full flex-col">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {{ i18n.copy().projects.badge }}
                    </p>
                    <h3 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                      {{ i18n.copy().projects.items[project.id].title }}
                    </h3>
                    <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {{ i18n.copy().projects.items[project.id].subtitle }}
                    </p>
                  </div>
                  <svg lucideArrowUpRight [size]="20" class="mt-1 shrink-0 text-slate-400"></svg>
                </div>

                <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {{ i18n.copy().projects.items[project.id].description }}
                </p>

                <ul class="mt-5 space-y-2">
                  @for (
                    outcome of i18n.copy().projects.items[project.id].outcomes;
                    track outcome
                  ) {
                    <li class="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                      <span>{{ outcome }}</span>
                    </li>
                  }
                </ul>

                <dl
                  class="mt-6 grid grid-cols-3 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/50"
                >
                  @for (
                    metric of i18n.copy().projects.items[project.id].metrics;
                    track metric.label
                  ) {
                    <div>
                      <dt class="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        {{ metric.label }}
                      </dt>
                      <dd class="mt-1 text-xs font-semibold text-slate-900 dark:text-slate-100">
                        {{ metric.value }}
                      </dd>
                    </div>
                  }
                </dl>

                <div class="mt-5 flex flex-wrap gap-2">
                  @for (item of project.stack; track item) {
                    <app-tech-badge
                      [name]="item"
                      [icon]="stackIcons[item]?.icon"
                      [color]="stackIcons[item]?.color"
                    />
                  }
                </div>

                <div class="mt-auto flex gap-3 pt-6">
                  @if (project.github) {
                    <a
                      [href]="project.github"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-accent dark:text-slate-300 dark:hover:text-accent-soft"
                    >
                      <app-social-icon name="github" [size]="16" />
                      {{ i18n.copy().projects.github }}
                    </a>
                  }
                  @if (project.live) {
                    <a
                      [href]="project.live"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-accent dark:text-slate-300 dark:hover:text-accent-soft"
                    >
                      <svg lucideExternalLink [size]="16"></svg>
                      {{ i18n.copy().projects.live }}
                    </a>
                  }
                </div>
              </app-card>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  readonly projects = projects;
  readonly stackIcons = stackIcons;
  readonly i18n = inject(I18nService);
}
