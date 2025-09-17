import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
interface NavList {
  id: number;
  title: string;
  link?: string;
  children?: NavList[];
  isExpanded?: boolean;
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, MatMenu, MatMenuTrigger, MatMenuItem],
  template: `
    <header class="bg-white">
      <div class="px-8 flex">
        <div class="py-4 pr-8 max-w-up-header cursor-pointer">
          <a class="inline-block w-logo h-logo my-mini"><img src="/logo.svg" alt="logo" /></a>
        </div>
        <div class="mb-2 mt-6">
          <ul class="flex items-center">
            @for (item of navItem; track item.id) {
              @if (item.children && item.children.length > 0) {
                <li
                  class="pr-8 text-base text-header-list font-normal cursor-pointer hover:text-primary-blue group relative"
                >
                  <a [routerLink]="item.link" class="relative group"
                    >{{ item.title }}
                    <div
                      class="w-0 h-mini bg-primary-blue absolute top-6 group-hover:w-full transition-all duration-300"
                    ></div>
                  </a>
                  <div class="absolute top-7 z-50 hidden group-hover:block">
                    <ul class="rounded bg-white border py-2 w-32">
                      @for (child of item.children; track child.id) {
                        <li
                          class="text-header-list hover:text-primary-blue hover:bg-menu-hover cursor-pointer"
                        >
                          <a class="block  px-4 py-2">{{ child.title }}</a>
                        </li>
                      }
                    </ul>
                  </div>
                </li>
              } @else if (item.title === '住宿') {
                <li
                  class="pr-8 text-base text-header-list font-normal cursor-pointer hover:text-primary-blue"
                >
                  <a [routerLink]="item.link" class="relative group"
                    >{{ item.title }}
                    <div class="w-full h-mini bg-primary-blue absolute top-6"></div>
                  </a>
                </li>
              } @else {
                <li
                  class="pr-8 text-base text-header-list font-normal cursor-pointer hover:text-primary-blue"
                >
                  <a [routerLink]="item.link" class="relative group"
                    >{{ item.title }}
                    <div
                      class="w-0 h-mini bg-primary-blue absolute top-6 group-hover:w-full transition-all duration-300"
                    ></div>
                  </a>
                </li>
              }
            }
            <button [matMenuTriggerFor]="menu" class="flex gap-1 cursor-pointer group">
              <div class="w-1 h-1 group-hover:bg-primary-blue bg-header-list"></div>
              <div class="w-1 h-1 group-hover:bg-primary-blue bg-header-list"></div>
              <div class="w-1 h-1 group-hover:bg-primary-blue bg-header-list"></div>
            </button>
            <mat-menu #menu="matMenu" class="mt-3">
              <a routerLink="/header" mat-menu-item>旅遊攻略</a>
              <a routerLink="/header" mat-menu-item>排行榜</a>
              <a routerLink="/header" mat-menu-item>旅遊地圖</a>
              <a routerLink="/header" mat-menu-item>Trip.com 獎勵計劃</a>
              <a routerLink="/header" mat-menu-item>優惠</a>
            </mat-menu>
          </ul>
        </div>
        <div class="ml-auto">
          <ul class="flex items-center font-medium text-sm">
            @for (item of navFunction; track item.id) {
              @if (item.title === 'TWD') {
                <li
                  class="rounded flex p-2 mx-1 my-4 h-list-right hover:text-primary-blue hover:bg-input-container-hover cursor-pointer"
                >
                  <span>繁</span>
                  <span class=""></span>
                  <span>{{ item.title }}</span>
                </li>
              } @else {
                <li class=" h-list-right mx-1 my-4 cursor-pointer">
                  <a
                    class="inline-block p-2 rounded hover:text-primary-blue hover:bg-input-container-hover"
                    >{{ item.title }}</a
                  >
                </li>
              }
            }
            <li
              class="bg-primary-blue hover:bg-primary-blue-hover p-2 mx-1 my-4 h-list-right cursor-pointer rounded text-white"
            >
              登入／註冊會員
            </li>
          </ul>
        </div>
      </div>
    </header>
  `,
  styles: ``,
})
export class Header {
  navItem: NavList[] = [
    {
      id: 1,
      title: '住宿',
      link: '/stay',
    },
    {
      id: 2,
      title: '機票',
      link: '/ticket',
    },
    {
      id: 3,
      title: '高鐵／火車票',
      link: '/train',
    },
    {
      id: 4,
      title: '租車&機場接送',
      link: '/rent',
      children: [
        { id: 1, title: '租車', link: '/car' },
        { id: 2, title: '機場接送', link: '/airport' },
      ],
    },
    {
      id: 5,
      title: '門票/體驗',
      link: '/experience',
      children: [
        { id: 1, title: '門票/體驗', link: '/car' },
        { id: 2, title: 'eSIM＆SIM', link: '/car' },
      ],
    },
    {
      id: 6,
      title: '機+酒',
      link: '/package',
    },
    {
      id: 7,
      title: '私人包團',
      link: '/private',
    },
  ];
  navFunction: NavList[] = [
    {
      id: 1,
      title: '上架我的住宿',
      link: '/update',
    },
    {
      id: 2,
      title: 'TWD',
    },
    {
      id: 3,
      title: '客服支援',
      link: '/service',
    },
    {
      id: 4,
      title: '尋找訂單',
      link: '/search',
    },
  ];
}
