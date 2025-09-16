import { Component } from '@angular/core';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-crumb',
  imports: [MatSelect, MatOption],
  template: `
    <div class="flex items-center justify-between pt-3 mt-4">
      <h3 class="font-bold text-lg text-side">找到642間飯店</h3>
      <select class="border"></select>
    </div>
  `,
  styles: ``,
})
export class Crumb {}
