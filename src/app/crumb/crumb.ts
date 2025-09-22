import { Component } from '@angular/core';

@Component({
  selector: 'app-crumb',
  imports: [],
  template: `
    <div class="flex md:block">
      <div class="flex flex-wrap w-full justify-between items-center pt-3 px-6 s-m:px-0 mb-4">
        <h3 class="font-bold text-lg text-side">找到642間飯店</h3>
        <div
          class="px-4 py-2 mr-2 min-w-40 rounded shadow-md cursor-pointer bg-white hover:outline-primary-blue hover:outline"
        >
          <div class="flex gap-2 items-center">
            <i class="fa-solid fa-up-down fa-sm"></i>
            <span>排序方式: Trip.com推薦</span>
            <i class="fa-solid fa-chevron-down fa-sm"></i>
          </div>
        </div>
      </div>
      <div class="w-map ml-auto mb-2 md:hidden">
        <div
          class="relative  cursor-pointer w-full h-full bg-[url('/sidenav-pic.png')] bg-no-repeat bg-cover bg-center"
        >
          <div class="flex flex-col gap-2 items-center absolute top-1/2 left-0 right-0">
            <i class="fa-solid fa-location-dot fa-lg" style="color: #fa0000;"></i>
            <p class="font-bold">在地圖上顯示</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Crumb {}
