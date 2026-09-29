import { Component, inject } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';
import { I18nService } from '../services/i18n.service';
import { SectionHeadingComponent } from './ui/section-heading.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section id="about" class="scroll-mt-24 border-t border-slate-200 py-20 dark:border-slate-800">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <app-section-heading
          [eyebrow]="i18n.copy().about.eyebrow"
          [title]="i18n.copy().about.title"
          [description]="i18n.copy().about.description"
        />

        <div class="grid gap-6 lg:grid-cols-3">
          @for (paragraph of i18n.copy().about.paragraphs; track paragraph; let i = $index) {
            <article
              class="rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-white/[0.03]"
              appReveal
              [appRevealDelay]="i * 80"
            >
              <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {{ paragraph }}
              </p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
}
