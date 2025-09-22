import { Component, HostListener, signal } from '@angular/core';
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
    <div class="flex max-w-6.5xl mx-auto mt-4 px-6 relative">
      <app-sidenav
        class="hidden md:block"
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

    <div class="fixed right-4 bottom-20 hidden md:block">
      <div
        [class]="isScrolled() ? 'rounded-full bg-primary-blue p-5 mb-1 cursor-pointer' : 'hidden'"
        (click)="scrollToTop()"
      >
        <i class="fa-solid fa-chevron-up fa-xl" style="color: #ffffff;"></i>
      </div>

      <div class="rounded-full bg-primary-blue p-5 mb-1 cursor-pointer">
        <i class="fa-solid fa-heart fa-xl" style="color: #ffffff;"></i>
      </div>
      <div class="rounded-full bg-primary-blue p-5 cursor-pointer">
        <i class="fa-solid fa-mobile-screen-button fa-2xl" style="color: #ffffff;"></i>
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
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
