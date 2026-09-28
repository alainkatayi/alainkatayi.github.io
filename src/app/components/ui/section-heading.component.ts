import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [NgClass],
  template: `
    <div class="mb-10 max-w-3xl" [ngClass]="align === 'center' ? 'mx-auto text-center' : ''">
      @if (eyebrow) {
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {{ eyebrow }}
        </p>
      }
      <h2
        class="text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl"
      >
        {{ title }}
      </h2>
      @if (description) {
        <p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          {{ description }}
        </p>
      }
      <ng-content />
    </div>
  `,
})
export class SectionHeadingComponent {
  @Input() eyebrow?: string;
  @Input({ required: true }) title!: string;
  @Input() description?: string;
  @Input() align: 'left' | 'center' = 'left';
}
