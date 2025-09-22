import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
interface SideList {
  id: number;
  title: string;
}

interface SideFooter {
  id: number;
  title: string;
  content: string;
  img: string;
}

interface theList {
  id: number;
  title: string;
  isTruncated?: boolean;
  children?: theList[];
  selectionType?: 'checkbox' | 'radio';
}

@Component({
  selector: 'app-sidenav',
  imports: [NgStyle],
  template: `
    <div class="relative mb-2 cursor-pointer">
      <img src="/sidenav-pic.png" alt="map" />
      <button
        class="py-2 px-6 text-white rounded bg-primary-blue hover:bg-primary-blue-hover
            absolute inset-x-16 inset-y-8"
      >
        在地圖上顯示
      </button>
    </div>
    <div class="px-4 pt-4 mb-mini bg-white">
      <h3 class="font-semibold mb-3">台北的熱門篩選條件</h3>
      <ul class="mt-2">
        @for (item of tpPop; track item.id) {
          <li class="flex gap-2">
            <input type="checkbox" />
            <span class="my-2">{{ item.title }}</span>
          </li>
        }
      </ul>
    </div>
    <div class="px-4 pt-4 mb-mini bg-white">
      <h3 class="font-semibold mb-3">預算 <span class="text-location">(NT$0 - NT$7,500+)</span></h3>
      <div
        class="p-2 mb-6 min-w-40 rounded cursor-pointer bg-side-button hover:outline-primary-blue hover:outline"
      >
        <div class="flex justify-between gap-2 items-center">
          <span class="text-ellipsis max-w-48">每間每晚價格（含稅及附加費）</span>
          <i class="fa-solid fa-chevron-down fa-sm"></i>
        </div>
      </div>
      <div class="h-mini w-full bg-black"></div>
      <div class="flex mt-4 flex-wrap">
        <div class="p-2 rounded mb-2 mr-1 max-w-60 bg-side-button text-xs">NT$0 - NT$1,700</div>
        <div class="p-2 rounded mb-2 mr-1 max-w-60 bg-side-button text-xs">NT$1,700 - NT$2,500</div>
        <div class="p-2 rounded mb-2 mr-1 max-w-60 bg-side-button text-xs">NT$2,500 - NT$3,400</div>
        <div class="p-2 rounded mb-2 mr-1 max-w-60 bg-side-button text-xs">NT$3,400 - NT$4,900</div>
        <div class="p-2 rounded mb-2 mr-1 max-w-60 bg-side-button text-xs">NT$4,900 - NT$7,500</div>
        <div class="p-2 rounded mb-2 mr-1 max-w-60 bg-side-button text-xs">>NT$7,500</div>
      </div>
    </div>
    <div class="px-4 pt-4 mb-mini bg-white">
      <h3 class="font-semibold mb-3">星級</h3>
      <div class="flex items-center">
        <div
          class="flex items-center justify-center gap-1 w-14 h-8 rounded mb-2 mr-1 bg-side-button text-xs"
        >
          <span>≤2</span><i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i>
        </div>
        <div
          class="flex items-center justify-center gap-1 w-14 h-8 rounded mb-2 mr-1 bg-side-button text-xs"
        >
          <span>3</span><i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i>
        </div>
        <div
          class="flex items-center justify-center gap-1 w-14 h-8 rounded mb-2 mr-1 bg-side-button text-xs"
        >
          <span>4</span><i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i>
        </div>
        <div
          class="flex items-center justify-center gap-1 w-14 h-8 rounded mb-2 mr-1 bg-side-button text-xs"
        >
          <span>5</span><i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i>
        </div>
      </div>
    </div>

    @for (item of checkItems; track item.id) {
      <div class="px-4 pt-4 mb-mini bg-white">
        <h3 class="font-semibold mb-3">{{ item.title }}</h3>
        <ul>
          @if (item.children && item.children.length > 0) {
            @for (
              child of item.isTruncated ? item.children.slice(0, 5) : item.children;
              track child.title
            ) {
              <li>
                <label class="flex gap-2 cursor-pointer">
                  @if (item.selectionType === 'radio') {
                    <input type="radio" [name]="item.id" />
                  } @else {
                    <input type="checkbox" />
                  }

                  <span class="my-2">{{ child.title }}</span>
                </label>
              </li>
            }
            @if (item.children.length > 5) {
              <li
                class="text-primary-blue cursor-pointer hover:underline py-2"
                (click)="toggleTruncated(item)"
              >
                顯示全部
              </li>
            }
          }
        </ul>
      </div>
    }
    <div class="m-4 flex flex-col">
      <h3 class="mb-4">為何選擇 Trip.com?</h3>
      @for (item of footer; track item.id) {
        <div class="flex gap-2 mb-4">
          <div
            class="w-6 h-6 bg-cover bg-no-repeat flex-shrink-0"
            [ngStyle]="{ 'background-image': 'url(' + item.img + ')' }"
          ></div>
          <div class="flex flex-col gap-1">
            <h4 class="font-bold">{{ item.title }}</h4>
            <p class="text-xs text-side-footer">
              {{ item.content }}
            </p>
          </div>
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

  footer: SideFooter[] = [
    {
      id: 1,
      title: '買貴退價差',
      img: '/side-footer-1.png',
      content: ' 我們致力提供最優惠的價格，若您在其他地方找到更便宜的選項，我們將退款差價。',
    },
    {
      id: 2,
      title: '獲得旅遊獎勵',
      img: '/side-foot-2.png',
      content: ' 每筆訂單均可獲得折扣獎勵，如何使用均無限制',
    },
    { id: 3, title: '4.8', img: '/side-footer-3.png', content: ' 206,715 條評論' },
    { id: 4, title: '4.7', img: '/side-footer-4.png', content: ' 20,234 條評論' },
  ];

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
      selectionType: 'checkbox',
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
      selectionType: 'radio',
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
      selectionType: 'checkbox',
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
      selectionType: 'checkbox',
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
      selectionType: 'checkbox',
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
      selectionType: 'checkbox',
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
      selectionType: 'radio',
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
      selectionType: 'radio',
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
      selectionType: 'checkbox',
      children: [
        { id: 1, title: '機場送機服務' },
        { id: 2, title: '房型升等服務' },
        { id: 3, title: '自助晚餐服務' },
      ],
    },
    {
      id: 11,
      title: '房間面積',
      isTruncated: false,
      selectionType: 'radio',
      children: [
        { id: 1, title: '≥25㎡' },
        { id: 2, title: '≥30㎡' },
        { id: 3, title: '≥45㎡' },
      ],
    },
    {
      id: 12,
      title: '餐點',
      isTruncated: false,
      selectionType: 'checkbox',
      children: [
        { id: 1, title: '包含早餐' },
        { id: 2, title: '含午餐' },
        { id: 3, title: '含晚餐' },
      ],
    },
    {
      id: 13,
      title: '特色主題',
      isTruncated: true,
      selectionType: 'checkbox',
      children: [
        { id: 1, title: '特色溫泉' },
        { id: 2, title: '親子友善' },
        { id: 3, title: '特色泳池' },
        { id: 4, title: '絕佳景觀' },
        { id: 5, title: '浪漫氛圍' },
        { id: 6, title: '原始風格' },
      ],
    },
    {
      id: 14,
      title: '旅客印象',
      isTruncated: true,
      selectionType: 'checkbox',
      children: [
        { id: 1, title: '位置便利' },
        { id: 2, title: '乾淨整潔' },
        { id: 3, title: '完善服務' },
        { id: 4, title: '安靜房間' },
        { id: 5, title: '活動豐富' },
        { id: 6, title: '店員很棒' },
      ],
    },
    {
      id: 15,
      title: '評論',
      isTruncated: false,
      selectionType: 'checkbox',
      children: [
        { id: 1, title: '500+' },
        { id: 2, title: '200+' },
        { id: 3, title: '100+' },
      ],
    },
    {
      id: 16,
      title: '品牌',
      isTruncated: true,
      selectionType: 'checkbox',
      children: [
        { id: 1, title: 'citizenM' },
        { id: 2, title: 'Fun Stay Inn' },
        { id: 3, title: 'Grand Fresa' },
        { id: 4, title: 'Hyatt' },
        { id: 5, title: 'i hotel電競旅館' },
        { id: 6, title: 'Hilton' },
      ],
    },

    {
      id: 17,
      title: '付款方式',
      isTruncated: false,
      selectionType: 'radio',
      children: [
        { id: 1, title: '線上付款' },
        { id: 2, title: '飯店付款' },
      ],
    },
    {
      id: 18,
      title: '訂房政策',
      isTruncated: false,
      selectionType: 'checkbox',
      children: [
        { id: 1, title: '即時確認' },
        { id: 2, title: '免費取消' },
      ],
    },
  ];
}
