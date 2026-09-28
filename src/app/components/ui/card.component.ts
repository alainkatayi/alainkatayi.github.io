import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 dark:border-slate-800 dark:bg-white/[0.03]"
      [ngClass]="[
        hover
          ? 'hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_40px_-28px_rgba(14,165,233,0.45)]'
          : '',
        className,
      ]"
    >
      <ng-content />
    </div>
  `,
})
export class CardComponent {
  @Input() hover = true;
  @Input() className = '';
}
