import { Component } from '@angular/core';
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
  selector: 'app-card',
  imports: [RouterLink],
  template: `
    <div>
      <ul>
        @for (item of hotelCard; track item.id) {
          <li class="mb-4 hover:shadow-lg">
            <a [routerLink]="item.link">
              <div class="flex bg-white rounded-lg overflow-hidden">
                <div class="w-card-img self-stretch object-cover overflow-hidden">
                  <img [src]="item.img" class="h-full w-full" [alt]="item.title" />
                </div>
                <div class="p-4 flex-1 flex flex-col">
                  <div class="flex items-center mb-2">
                    <h3 class="font-medium text-lg">{{ item.title }}</h3>
                    @for (i of [].constructor(item.star); track $index) {
                      <i class="fa-solid fa-star fa-sm" style="color: #FFD43B;"></i>
                    }
                  </div>
                  <div class="flex gap-1 mb-1">
                    <div class="bg-rating rounded-full rounded-tr-none py-xxs px-1">
                      <span class="text-white">{{ item.rating }}</span
                      ><span class="text-rating-total">/10</span>
                    </div>
                    <div class="text-rating font-medium">{{ item.shortComment }}</div>
                    <div>{{ item.commentNum }}條評論．</div>
                    <div>{{ item.comment }}</div>
                  </div>
                  <div class="flex">
                    <div class="text-location">{{ item.location }}</div>
                    <div class="text-primary-blue">在地圖上顯示</div>
                  </div>
                  <div class="bg-[#F6F7FA] mt-2 pl-4 flex-1 rounded">
                    <div class="flex  justify-between">
                      <div class="py-2">
                        <p class="font-medium">{{ item.room }}</p>
                        <p>最新預訂：{{ item.reserve }}前</p>
                      </div>
                      <div class="text-right flex flex-col items-end">
                        <div
                          class="bg-tag-background text-tag-text py-mini px-1 mb-2 rounded-sm text-xs"
                        >
                          {{ item.tag1 }}
                        </div>
                        <div class="flex gap-1 items-center">
                          <span class="line-through text-location">{{ item.oldPrice }}</span>
                          <span class="font-bold text-xl">{{ item.price }}</span>
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
        }
      </ul>
    </div>
  `,
  styles: ``,
})
export class Card {
  hotelCard: stayItem[] = [
    {
      id: 1,
      title: '德立莊酒店',
      location: '鄰近西門地鐵站．西門町商圈',
      price: 'NT$1,947',
      oldPrice: 'NT$3,329',
      rating: 9.2,
      comment: '"游泳池很棒" "泳池乾淨"',
      shortComment: '很好',
      commentNum: 1471,
      link: '/hotel1',
      img: '/hotel1.webp',
      star: 4,
      room: '精緻雙床房（無窗）',
      reserve: '6分鐘',
      tag1: '限時優惠',
      tag2: '-42%',
    },
    {
      id: 2,
      title: '德立莊酒店',
      location: '鄰近西門地鐵站．西門町商圈',
      price: 'NT$1,947',
      oldPrice: 'NT$3,329',
      rating: 9.2,
      comment: '"游泳池很棒" "泳池乾淨"',
      shortComment: '很好',
      commentNum: 1471,
      link: '/hotel1',
      img: '/hotel1.webp',
      star: 4,
      room: '精緻雙床房（無窗）',
      reserve: '6分鐘',
      tag1: '限時優惠',
      tag2: '-42%',
    },
    {
      id: 3,
      title: '德立莊酒店',
      location: '鄰近西門地鐵站．西門町商圈',
      price: 'NT$1,947',
      oldPrice: 'NT$3,329',
      rating: 9.2,
      comment: '"游泳池很棒" "泳池乾淨"',
      shortComment: '很好',
      commentNum: 1471,
      link: '/hotel1',
      img: '/hotel1.webp',
      star: 4,
      room: '精緻雙床房（無窗）',
      reserve: '6分鐘',
      tag1: '限時優惠',
      tag2: '-42%',
    },
    {
      id: 4,
      title: '德立莊酒店',
      location: '鄰近西門地鐵站．西門町商圈',
      price: 'NT$1,947',
      oldPrice: 'NT$3,329',
      rating: 9.2,
      comment: '"游泳池很棒" "泳池乾淨"',
      shortComment: '很好',
      commentNum: 1471,
      link: '/hotel1',
      img: '/hotel1.webp',
      star: 4,
      room: '精緻雙床房（無窗）',
      reserve: '6分鐘',
      tag1: '限時優惠',
      tag2: '-42%',
    },
  ];
}
