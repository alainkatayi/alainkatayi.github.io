import { Component, HostListener, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideLanguages } from '@lucide/angular';
import { type Lang } from '../i18n/translations';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-language-fab',
  standalone: true,
  imports: [NgClass, LucideLanguages],
  template: `
    <div
      class="fixed z-[70] select-none"
      [style.left.px]="x()"
      [style.top.px]="y()"
      (pointerdown)="onPointerDown($event)"
    >
      <div class="relative">
        <button
          type="button"
          class="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white/95 text-slate-800 shadow-lg shadow-slate-900/10 backdrop-blur-md transition hover:border-accent/40 hover:text-accent dark:border-slate-700 dark:bg-[#0B0F19]/95 dark:text-slate-100 dark:shadow-black/40 dark:hover:text-accent-soft"
          [attr.aria-label]="i18n.copy().language.title"
          [attr.title]="i18n.copy().language.dragHint"
          (click)="onClick($event)"
        >
          <svg lucideLanguages [size]="22"></svg>
        </button>

        @if (menuOpen()) {
          <div
            class="absolute bottom-[calc(100%+10px)] right-0 w-44 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-[#0B0F19]/95"
            role="menu"
          >
            <p class="px-2 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              {{ i18n.copy().language.title }}
            </p>
            <button
              type="button"
              role="menuitem"
              class="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition"
              [ngClass]="
                i18n.lang() === 'fr'
                  ? 'bg-accent/15 text-accent-muted dark:text-accent-soft'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5'
              "
              (click)="choose('fr')"
            >
              <span>{{ i18n.copy().language.french }}</span>
              <span class="text-xs opacity-70">FR</span>
            </button>
            <button
              type="button"
              role="menuitem"
              class="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition"
              [ngClass]="
                i18n.lang() === 'en'
                  ? 'bg-accent/15 text-accent-muted dark:text-accent-soft'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5'
              "
              (click)="choose('en')"
            >
              <span>{{ i18n.copy().language.english }}</span>
              <span class="text-xs opacity-70">EN</span>
            </button>
          </div>
        }
      </div>
    </div>
  `,
})
export class LanguageFabComponent {
  readonly i18n = inject(I18nService);
  readonly menuOpen = signal(false);
  readonly x = signal(0);
  readonly y = signal(0);

  private dragging = false;
  private moved = false;
  private startX = 0;
  private startY = 0;
  private originX = 0;
  private originY = 0;
  private readonly size = 56;

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-lang-fab');
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as { x: number; y: number };
          this.x.set(parsed.x);
          this.y.set(parsed.y);
        } catch {
          this.setDefaultPosition();
        }
      } else {
        this.setDefaultPosition();
      }
    }
  }

  private setDefaultPosition(): void {
    this.x.set(Math.max(16, window.innerWidth - 88));
    this.y.set(Math.max(16, window.innerHeight - 120));
  }

  onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) return;
    this.dragging = true;
    this.moved = false;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.originX = this.x();
    this.originY = this.y();
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.dragging) return;
    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      this.moved = true;
      this.menuOpen.set(false);
    }
    const nextX = Math.min(window.innerWidth - this.size - 8, Math.max(8, this.originX + dx));
    const nextY = Math.min(window.innerHeight - this.size - 8, Math.max(8, this.originY + dy));
    this.x.set(nextX);
    this.y.set(nextY);
  }

  @HostListener('document:pointerup')
  onPointerUp(): void {
    if (!this.dragging) return;
    this.dragging = false;
    localStorage.setItem(
      'portfolio-lang-fab',
      JSON.stringify({ x: this.x(), y: this.y() }),
    );
  }

  onClick(event: MouseEvent): void {
    if (this.moved) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.menuOpen.update((open) => !open);
  }

  choose(lang: Lang): void {
    this.i18n.setLang(lang);
    this.menuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('app-language-fab')) {
      this.menuOpen.set(false);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.x.update((value) => Math.min(window.innerWidth - this.size - 8, Math.max(8, value)));
    this.y.update((value) => Math.min(window.innerHeight - this.size - 8, Math.max(8, value)));
  }
}
