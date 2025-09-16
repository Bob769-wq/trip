import { Component } from '@angular/core';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';
interface SideList {
  id: number;
  title: string;
}

interface theList {
  id: number;
  title: string;
  isTruncated?: boolean;
  children?: theList[];
}

@Component({
  selector: 'app-sidenav',
  imports: [MatSelect, MatOption, MatFormField, MatLabel],
  template: `
    <div class="overflow-y-auto">
      <div class="relative mb-2 cursor-pointer">
        <img src="/sidenav-pic.png" alt="map" />
        <button
          class="py-2 px-6 text-white rounded bg-primary-blue hover:bg-primary-blue-hover
        absolute inset-x-16 inset-y-8"
        >
          在地圖上顯示
        </button>
      </div>
      <div class="px-2 pt-4 mb-mini bg-white">
        <h3 class="font-semibold">台北的熱門篩選條件</h3>
        <ul class="mt-2">
          @for (item of tpPop; track item.id) {
            <li class="flex gap-2">
              <input type="checkbox" />
              <span class="my-2">{{ item.title }}</span>
            </li>
          }
        </ul>
      </div>
      <div class="px-2 pt-4 mb-mini bg-white">
        <h3 class="font-semibold">預算 <span class="text-location">(NT$0 - NT$7,500+)</span></h3>
        <mat-form-field>
          <mat-label class="">每間每晚價格（含稅及附加費）</mat-label>
          <mat-select>
            <mat-option>每間每晚價格（未含稅及附加費）</mat-option>
            <mat-option>每間每晚價格（含稅及附加費）</mat-option>
            <mat-option>住宿總價（含稅及附加費）</mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      @for (item of checkItems; track item.id) {
        <div class="px-2 pt-4 mb-mini bg-white">
          <h3 class="font-semibold">{{ item.title }}</h3>
          <ul>
            @if (item.children && item.children.length > 0) {
              @for (
                child of item.isTruncated ? item.children.slice(0, 5) : item.children;
                track child.title
              ) {
                <li class="flex gap-2">
                  <input type="checkbox" />
                  <span class="my-2">{{ child.title }}</span>
                </li>
              }
              @if (item.children.length > 5) {
                <li
                  class="text-primary-blue cursor-pointer hover:underline my-2"
                  (click)="toggleTruncated(item)"
                >
                  顯示全部
                </li>
              }
            }
          </ul>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class Sidenav {
  toggleTruncated(item: theList) {
    if (item && typeof item.isTruncated === 'boolean') {
      item.isTruncated = !item.isTruncated;
    }
  }

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

  checkItems: theList[] = [
    {
      id: 1,
      title: '房客評分',
      isTruncated: false,
      children: [
        { id: 1, title: '愉快 6+' },
        { id: 2, title: '好 7+' },
        { id: 3, title: '很好 8+' },
        { id: 4, title: '極佳 9+' },
      ],
    },
    {
      id: 2,
      title: '位置',
      isTruncated: true,
      children: [
        { id: 1, title: '西門町商圈' },
        { id: 2, title: '台北101大樓' },
        { id: 3, title: '台北火車站地區' },
        { id: 4, title: '中山區' },
        { id: 5, title: '台灣桃園國際機場' },
        { id: 6, title: '總統府' },
        { id: 7, title: '立法院' },
        { id: 8, title: '陶朱隱園' },
      ],
    },
    {
      id: 3,
      title: '住宿類型',
      isTruncated: true,
      children: [
        { id: 1, title: '飯店' },
        { id: 2, title: '民宿及公寓' },
        { id: 3, title: '酒店式公寓' },
        { id: 4, title: '青年旅館' },
        { id: 5, title: '旅店' },
        { id: 6, title: '宿舍' },
        { id: 7, title: '胯下痛公寓' },
        { id: 8, title: '雞飛狗跳莊' },
      ],
    },
    {
      id: 4,
      title: '飯店設施及服務',
      isTruncated: true,
      children: [
        { id: 1, title: '提供車位' },
        { id: 2, title: '游泳池' },
        { id: 3, title: '外幣兌換' },
        { id: 4, title: '健身房' },
        { id: 5, title: '可攜寵物' },
        { id: 6, title: '禁煙' },
        { id: 7, title: '牙刷' },
        { id: 8, title: 'WIFI' },
      ],
    },
    {
      id: 5,
      title: '客房設施和服務',
      isTruncated: true,
      children: [
        { id: 1, title: '浴缸' },
        { id: 2, title: '陽台' },
        { id: 3, title: '洗衣機' },
        { id: 4, title: '智慧型馬桶' },
        { id: 5, title: '空調' },
        { id: 6, title: '糞坑' },
        { id: 7, title: '防空洞' },
        { id: 8, title: '密室' },
      ],
    },
    {
      id: 6,
      title: '開業/裝修時間',
      isTruncated: false,
      children: [
        { id: 1, title: '6個月內' },
        { id: 2, title: '1年內' },
        { id: 3, title: '2年內' },
      ],
    },
    {
      id: 7,
      title: '床型',
      isTruncated: true,
      children: [
        { id: 1, title: '1張雙人床' },
        { id: 2, title: '2張床' },
        { id: 3, title: '1張單人床' },
        { id: 4, title: '3張床' },
        { id: 5, title: '1張特大床' },
        { id: 6, title: '打地鋪' },
      ],
    },
    {
      id: 8,
      title: '房間特色',
      isTruncated: true,
      children: [
        { id: 1, title: '家庭房' },
        { id: 2, title: '套房' },
        { id: 3, title: '陽台' },
        { id: 4, title: '江河景致' },
        { id: 5, title: '山景房' },
        { id: 6, title: '海景房' },
      ],
    },
    {
      id: 9,
      title: '臥室數量',
      isTruncated: false,
      children: [
        { id: 1, title: '1間臥室/獨立套房' },
        { id: 2, title: '2間臥室' },
        { id: 3, title: '3+間臥室' },
      ],
    },
    {
      id: 10,
      title: '客房方案',
      isTruncated: false,
      children: [
        { id: 1, title: '機場送機服務' },
        { id: 2, title: '房型升等服務' },
        { id: 3, title: '自助晚餐服務' },
      ],
    },
    { id: 11, title: '房間面積', children: [] },
    { id: 12, title: '餐點', children: [] },
    { id: 13, title: '特色主題', children: [] },
    { id: 14, title: '旅客印象', children: [] },
    { id: 15, title: '評論', children: [] },
    { id: 16, title: '品牌', children: [] },
    { id: 17, title: '優惠', children: [] },
    { id: 18, title: '付款方式', children: [] },
    { id: 19, title: '訂房政策', children: [] },
  ];
}
