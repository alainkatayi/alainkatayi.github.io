import { Component, Input } from '@angular/core';
import type { SimpleIcon } from 'simple-icons';

@Component({
  selector: 'app-brand-icon',
  standalone: true,
  template: `
    <svg
      role="img"
      viewBox="0 0 24 24"
      [attr.aria-hidden]="true"
      [class]="className"
      [style.fill]="color || '#' + icon.hex"
    >
      <path [attr.d]="icon.path" />
    </svg>
  `,
})
export class BrandIconComponent {
  @Input({ required: true }) icon!: SimpleIcon;
  @Input() color?: string;
  @Input() className = 'h-4 w-4';
}
