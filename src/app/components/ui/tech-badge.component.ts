import { Component, Input } from '@angular/core';
import type { SimpleIcon } from 'simple-icons';
import { BrandIconComponent } from './brand-icon.component';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [BrandIconComponent],
  template: `
    <span
      class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
    >
      @if (icon) {
        <app-brand-icon [icon]="icon" [color]="color" className="h-3.5 w-3.5" />
      }
      {{ name }}
    </span>
  `,
})
export class TechBadgeComponent {
  @Input({ required: true }) name!: string;
  @Input() icon?: SimpleIcon;
  @Input() color?: string;
}
