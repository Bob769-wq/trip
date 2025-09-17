import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { Card } from './card/card';
import { Crumb } from './crumb/crumb';
import { Footer } from './footer/footer';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [Header, Sidenav, Card, Crumb, Footer, SearchBar],
  template: `
    <app-header />
    <app-search-bar />
    <div class="flex max-w-6.5xl mx-auto mt-4 px-6">
      <app-sidenav
        class=""
        [class]="
          isScrolled()
            ? 'mr-4 w-sidenav h-screen sticky top-0 overflow-y-auto overscroll-y-contain'
            : 'mr-4 w-sidenav h-screen overflow-y-auto overscroll-y-contain'
        "
      />
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
  isScrolled = signal(false);
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 72);
  }
}
