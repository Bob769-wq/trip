import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { Card } from './card/card';
import { Crumb } from './crumb/crumb';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Sidenav, Card, Crumb, Footer],
  template: `
    <app-header />
    <div class="flex max-w-6.5xl mx-auto mt-4 px-6">
      <app-sidenav class="mr-4 w-sidenav" />
      <div class="flex-1">
        <app-crumb />
        <app-card />
        <app-footer />
      </div>
    </div>
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('trip');
}
