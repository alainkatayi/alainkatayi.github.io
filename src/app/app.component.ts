import { Component } from '@angular/core';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { ContactNudgeComponent } from './components/contact-nudge.component';
import { FooterComponent } from './components/footer.component';
import { HeroComponent } from './components/hero.component';
import { LanguageFabComponent } from './components/language-fab.component';
import { NavbarComponent } from './components/navbar.component';
import { PhilosophyComponent } from './components/philosophy.component';
import { ProjectsComponent } from './components/projects.component';
import { StarfieldComponent } from './components/starfield.component';
import { TechStackComponent } from './components/tech-stack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StarfieldComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    PhilosophyComponent,
    ContactComponent,
    FooterComponent,
    LanguageFabComponent,
    ContactNudgeComponent,
  ],
  template: `
    <div class="relative min-h-screen">
      <app-starfield />
      <app-navbar />
      <main>
        <app-hero />
        <app-about />
        <app-tech-stack />
        <app-projects />
        <app-philosophy />
        <app-contact />
      </main>
      <app-footer />
      <app-language-fab />
      <app-contact-nudge />
    </div>
  `,
  styles: [],
})
export class AppComponent {}
