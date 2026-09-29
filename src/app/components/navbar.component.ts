import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideCircleDot, LucideMenu, LucideX } from '@lucide/angular';
import { profile } from '../data/profile';
import { I18nService } from '../services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, LucideCircleDot, LucideMenu, LucideX],
  template: `
    <header
      class="sticky top-0 z-50 border-b transition-all duration-300"
      [ngClass]="
        scrolled
          ? 'border-slate-200/80 bg-white/75 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#0B0F19]/75'
          : 'border-transparent bg-transparent'
      "
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#top" class="group flex min-w-0 items-center gap-3">
          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-bold text-accent dark:border-slate-700 dark:bg-white/5"
          >
            AK
          </span>
          <span
            class="hidden text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:block"
          >
            {{ profile.name }}
          </span>
        </a>

        <nav class="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Primary">
          @for (link of navLinks; track link.href) {
            <a
              [href]="link.href"
              class="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <div class="hidden items-center xl:flex">
          <span
            class="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-muted dark:text-accent-soft"
          >
            <svg lucideCircleDot [size]="14" class="shrink-0"></svg>
            {{ i18n.copy().availability }}
          </span>
        </div>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
          [attr.aria-label]="open ? i18n.copy().nav.closeMenu : i18n.copy().nav.openMenu"
          (click)="toggleMenu()"
        >
          @if (open) {
            <svg lucideX [size]="20"></svg>
          } @else {
            <svg lucideMenu [size]="20"></svg>
          }
        </button>
      </div>

      @if (open) {
        <div
          class="border-t border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-[#0B0F19]/95 md:hidden"
        >
          <nav class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4" aria-label="Mobile">
            @for (link of navLinks; track link.href) {
              <a
                [href]="link.href"
                class="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
                (click)="closeMenu()"
              >
                {{ link.label }}
              </a>
            }
            <span
              class="mt-2 inline-flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/10 px-3 py-3 text-xs font-medium text-accent-muted dark:text-accent-soft"
            >
              <svg lucideCircleDot [size]="14"></svg>
              {{ i18n.copy().availability }}
            </span>
          </nav>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent implements OnDestroy {
  readonly profile = profile;
  readonly i18n = inject(I18nService);
  open = false;
  scrolled = false;

  get navLinks() {
    const nav = this.i18n.copy().nav;
    return [
      { href: '#about', label: nav.about },
      { href: '#skills', label: nav.skills },
      { href: '#projects', label: nav.projects },
      { href: '#contact', label: nav.contact },
    ];
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  toggleMenu(): void {
    this.open = !this.open;
    document.body.style.overflow = this.open ? 'hidden' : '';
  }

  closeMenu(): void {
    this.open = false;
    document.body.style.overflow = '';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }
}
