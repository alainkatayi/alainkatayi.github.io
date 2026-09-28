import { Component } from '@angular/core';
import { techCategories } from '../data/tech';
import { RevealDirective } from '../directives/reveal.directive';
import { BrandIconComponent } from './ui/brand-icon.component';
import { CardComponent } from './ui/card.component';
import { SectionHeadingComponent } from './ui/section-heading.component';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [SectionHeadingComponent, CardComponent, BrandIconComponent, RevealDirective],
  template: `
    <section
      id="expertise"
      class="scroll-mt-24 border-t border-slate-200 py-20 dark:border-slate-800"
    >
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <app-section-heading
          eyebrow="Expertise"
          title="Technical tools that serve robust system design"
          description="Stack choices are secondary to architecture. These are the instruments I use to ship reliable FinTech and banking backends."
        />

        <div class="grid gap-6 md:grid-cols-2">
          @for (category of techCategories; track category.id; let i = $index) {
            <div appReveal [appRevealDelay]="i * 70">
              <app-card className="h-full">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
                  {{ category.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {{ category.description }}
                </p>
                <ul class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  @for (item of category.items; track item.name) {
                    <li
                      class="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition-all duration-200 hover:border-accent/40 hover:bg-white dark:border-slate-700 dark:bg-slate-900/50 dark:hover:bg-white/5"
                    >
                      <span
                        class="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition-transform duration-200 group-hover:scale-105 dark:bg-slate-950 dark:ring-slate-700"
                      >
                        <app-brand-icon
                          [icon]="item.icon"
                          [color]="item.color"
                          className="h-4 w-4"
                        />
                      </span>
                      <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        {{ item.name }}
                      </span>
                    </li>
                  }
                </ul>
              </app-card>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class TechStackComponent {
  readonly techCategories = techCategories;
}
