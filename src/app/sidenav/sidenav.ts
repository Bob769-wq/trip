import { Component } from '@angular/core';
interface SideList {
  id: number;
  title: string;
}
@Component({
  selector: 'app-sidenav',
  imports: [],
  template: `
    <div class="relative">
      <img src="/sidenav-pic.png" alt="map" />
      <button
        class="py-2 px-6 text-white rounded bg-primary-blue hover:bg-primary-blue-hover
        absolute inset-x-16 inset-y-8"
      >
        在地圖上顯示
      </button>
    </div>
    <div class="mt-2"></div>
  `,
  styles: ``,
})
export class Sidenav {
  tpPop: SideList[] = [
    { id: 1, title: '西門町商圈' },
    { id: 2, title: '2張床' },
    { id: 3, title: '極佳9+' },
    { id: 4, title: '包含早餐' },
    { id: 5, title: '飯店' },
    { id: 6, title: '提供車位' },
    { id: 7, title: '浴缸' },
    { id: 8, title: '中山區' },
    { id: 9, title: '免費取消' },
    { id: 10, title: '台北101大樓' },
  ];
}
