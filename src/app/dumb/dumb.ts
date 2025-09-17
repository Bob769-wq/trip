import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface stayItem {
  id: number;
  title: string;
  rating: number;
  commentNum: number;
  comment: string;
  shortComment: string;
  link: string;
  img: string;
  location: string;
  price: string;
  oldPrice: string;
  star?: number;
  room: string;
  reserve: string;
  tag1: string;
  tag2?: string;
}
@Component({
  selector: 'app-dumb',
  imports: [RouterLink],
  template: `
    <li class="mb-4 hover:shadow-lg">
      <a [routerLink]="product().link">
        <div class="flex bg-white rounded-lg overflow-hidden">
          <div class="w-card-img self-stretch object-cover overflow-hidden relative">
            <img [src]="product().img" class="h-full w-full" [alt]="product().title" />

            <i class="fa-regular fa-heart bg-white absolute top-5 right-5 p-2 rounded-full"></i>
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex items-center mb-2">
              <h3 class="font-medium text-lg hover:underline">{{ product().title }}</h3>
              @for (i of starArray(); track $index) {
                <i class="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i>
              }
            </div>
            <div class="flex gap-1 mb-1">
              <div class="bg-rating rounded-full rounded-tr-none py-xxs px-1">
                <span class="text-white">{{ product().rating }}</span
                ><span class="text-rating-total">/10</span>
              </div>
              <div class="text-rating font-medium">{{ product().shortComment }}</div>
              <div>{{ product().commentNum }}條評論．</div>
              <div>{{ product().comment }}</div>
            </div>
            <div class="flex gap-2">
              <div class="text-location">{{ product().location }}</div>
              <div class="text-primary-blue hover:underline cursor-pointer">在地圖上顯示</div>
            </div>
            <div class="bg-[#F6F7FA] mt-2 pl-4 flex-1 rounded">
              <div class="flex  justify-between">
                <div class="py-2">
                  <p class="font-medium">{{ product().room }}</p>
                  <p>最新預訂：{{ product().reserve }}前</p>
                </div>
                <div class="text-right flex flex-col items-end">
                  <div class="bg-tag-background text-tag-text py-mini px-1 mb-2 rounded-sm text-xs">
                    {{ product().tag1 }}
                  </div>
                  <div class="flex gap-1 items-center">
                    <span class="line-through text-location">{{ product().oldPrice }}</span>
                    <span class="font-bold text-xl">{{ product().price }}</span>
                  </div>
                  <div class="text-location">含稅項及費用</div>

                  <button
                    class="flex text-right gap-2 mt-2 px-4 py-2 rounded text-white bg-primary-blue hover:bg-primary-blue-hover"
                  >
                    <span>查看空房情況</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 640 640"
                    >
                      <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                      <path
                        fill="#ffffff"
                        d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  `,
  styles: ``,
})
export class Dumb {
  product = input.required<stayItem>();

  starArray = computed(() => {
    const starCount = this.product().star ?? 0;
    return new Array(starCount);
  });
}
