import { Component, inject } from '@angular/core';
import { LucideMail, LucideMapPin, LucidePhone } from '@lucide/angular';
import { profile } from '../data/profile';
import { RevealDirective } from '../directives/reveal.directive';
import { I18nService } from '../services/i18n.service';
import { SectionHeadingComponent } from './ui/section-heading.component';
import { SocialIconComponent } from './ui/social-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SectionHeadingComponent,
    RevealDirective,
    SocialIconComponent,
    LucideMapPin,
    LucideMail,
    LucidePhone,
  ],
  template: `
    <section id="contact" class="scroll-mt-24 border-t border-slate-200 py-20 dark:border-slate-800">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <app-section-heading
          [eyebrow]="i18n.copy().contact.eyebrow"
          [title]="i18n.copy().contact.title"
          [description]="i18n.copy().contact.description"
        />

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (item of contacts; track item.key; let i = $index) {
            <div appReveal [appRevealDelay]="i * 50">
              @if (item.href; as href) {
                <a
                  [href]="href"
                  [attr.target]="href.startsWith('http') ? '_blank' : null"
                  [attr.rel]="href.startsWith('http') ? 'noreferrer' : null"
                  class="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 dark:border-slate-800 dark:bg-white/[0.03]"
                >
                  <span
                    class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-accent dark:border-slate-700 dark:bg-slate-900"
                  >
                    @switch (item.icon) {
                      @case ('mail') {
                        <svg lucideMail [size]="16"></svg>
                      }
                      @case ('phone') {
                        <svg lucidePhone [size]="16"></svg>
                      }
                      @case ('linkedin') {
                        <app-social-icon name="linkedin" [size]="16" />
                      }
                      @case ('github') {
                        <app-social-icon name="github" [size]="16" />
                      }
                    }
                  </span>
                  <span>
                    <span
                      class="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
                    >
                      {{ item.label }}
                    </span>
                    <span class="mt-1 block text-sm font-medium text-slate-900 dark:text-slate-100">
                      {{ item.value }}
                    </span>
                  </span>
                </a>
              } @else {
                <div
                  class="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-white/[0.03]"
                >
                  <span
                    class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-accent dark:border-slate-700 dark:bg-slate-900"
                  >
                    <svg lucideMapPin [size]="16"></svg>
                  </span>
                  <span>
                    <span
                      class="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
                    >
                      {{ item.label }}
                    </span>
                    <span class="mt-1 block text-sm font-medium text-slate-900 dark:text-slate-100">
                      {{ item.value }}
                    </span>
                  </span>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly i18n = inject(I18nService);

  get contacts() {
    const c = this.i18n.copy().contact;
    return [
      {
        key: 'location',
        label: c.location,
        value: c.locationValue,
        href: null as string | null,
        icon: 'map' as const,
      },
      {
        key: 'email',
        label: c.email,
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: 'mail' as const,
      },
      {
        key: 'phone',
        label: c.phone,
        value: profile.phone,
        href: `tel:${profile.phone.replace(/\s+/g, '')}`,
        icon: 'phone' as const,
      },
      {
        key: 'linkedin',
        label: c.linkedin,
        value: 'linkedin.com/in/alain-katayi',
        href: profile.linkedin,
        icon: 'linkedin' as const,
      },
      {
        key: 'github',
        label: c.github,
        value: 'github.com/alainkatayi',
        href: profile.github,
        icon: 'github' as const,
      },
    ];
  }
}
