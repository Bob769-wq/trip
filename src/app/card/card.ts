import { Component } from '@angular/core';
import { Dumb } from '../dumb/dumb';
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
  imports: [Dumb],
  template: `
    <div>
      <ul>
        @for (item of hotelCard; track item.id) {
          <app-dumb [product]="item"></app-dumb>
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
