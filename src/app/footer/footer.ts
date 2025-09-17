import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div class="py-4">
      <div class="flex items-center gap-2 justify-end text-primary-blue">
        <a>Trip.com</a>
        <i class="fa-solid fa-chevron-right fa-xs" style="color: #000000;"></i>
        <a>飯店</a>
        <i class="fa-solid fa-chevron-right fa-xs" style="color: #000000;"></i>
        <a>在中國的飯店</a>
        <i class="fa-solid fa-chevron-right fa-xs" style="color: #000000;"></i>
        <a>在台灣的飯店</a>
        <i class="fa-solid fa-chevron-right fa-xs" style="color: #000000;"></i>
        <a>在台北的飯店</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class Footer {}
