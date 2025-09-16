import { Component } from '@angular/core';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-crumb',
  imports: [MatSelect, MatOption, MatFormField],
  template: `
    <div class="flex items-center justify-between pt-3 mb-4">
      <h3 class="font-bold text-lg text-side">找到642間飯店</h3>
      <div class="px-4 py-2 min-w-40 rounded shadow-md cursor-pointer bg-white">
        <div class="flex gap-2 items-center">
          <i class="fa-solid fa-up-down fa-sm"></i>
          <span>排序方式: Trip.com推薦</span>
          <i class="fa-solid fa-chevron-down fa-sm"></i>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Crumb {}
