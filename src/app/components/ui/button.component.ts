import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      [attr.type]="type"
      [disabled]="disabled"
      class="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-galactic disabled:opacity-50"
      [ngClass]="[variants[variant], className]"
      (click)="clicked.emit($event)"
    >
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() className = '';
  @Output() clicked = new EventEmitter<MouseEvent>();

  readonly variants = {
    primary:
      'bg-accent text-white hover:bg-accent-muted shadow-sm shadow-accent/20 border border-transparent',
    secondary:
      'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 dark:bg-white/5 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-white/10 dark:hover:border-slate-600',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5',
  };
}
