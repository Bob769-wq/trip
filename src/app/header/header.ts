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
    <header class="bg-white flex flex-col">
      <div class="search-col:px-8 flex">
        <div class="py-4 px-3 search-col:pr-8  max-w-up-header cursor-pointer">
          <a class="inline-block w-s-logo h-s-logo md:w-logo search-col:h-logo my-mini"
            ><img src="/logo.svg" alt="logo"
          /></a>
        </div>
        <div class="mb-2 mt-6">
          <ul class="hidden items-center xxl:flex">
            @for (item of navItemXXL; track item.id) {
              <li
                class="pr-8 text-base text-header-list font-normal cursor-pointer hover:text-primary-blue group relative"
                [class.text-primary-blue]="item.title === '住宿'"
              >
                <a [routerLink]="item.link" class="relative group"
                  >{{ item.title }}
                  <div
                    class="w-0 h-mini bg-primary-blue absolute top-6 transition-all duration-300"
                    [class.w-full]="item.title === '住宿'"
                    [class.w-0]="item.title !== '住宿'"
                    [class.group-hover:w-full]="item.title !== '住宿'"
                  ></div>
                </a>
                @if (item.children && item.children.length > 0) {
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
                }
              </li>
            }
          </ul>
          <ul class="hidden lg:flex items-center xxl:hidden">
            @for (item of navItem; track item.id) {
              <li
                class="pr-8 text-base text-header-list font-normal cursor-pointer hover:text-primary-blue group relative"
                [class.text-primary-blue]="item.title === '住宿'"
              >
                <a [routerLink]="item.link" class="relative group"
                  >{{ item.title }}
                  <div
                    class="w-0 h-mini bg-primary-blue absolute top-6 transition-all duration-300"
                    [class.w-full]="item.title === '住宿'"
                    [class.w-0]="item.title !== '住宿'"
                    [class.group-hover:w-full]="item.title !== '住宿'"
                  ></div>
                </a>
                @if (item.children && item.children.length > 0) {
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
                }
              </li>
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
          <ul class="hidden md:flex items-center font-medium text-sm">
            @for (item of navFunction; track item.id) {
              @if (item.title === 'TWD') {
                <li
                  class="rounded flex p-2 mx-1 my-4 h-list-right hover:text-primary-blue hover:bg-input-container-hover cursor-pointer"
                >
                  <span>繁</span>
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
          <ul class="md:hidden">
            <li
              class="rounded flex p-2 mx-1 my-2 h-list-right hover:text-primary-blue hover:bg-input-container-hover cursor-pointer"
            >
              <span>繁</span>
              <span>TWD</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="px-8">
        <ul class="hidden md:flex items-center lg:hidden mb-4">
          @for (item of nav900; track item.id) {
            <li
              class="pr-8 text-base text-header-list font-normal cursor-pointer hover:text-primary-blue group relative"
              [class.text-primary-blue]="item.title === '住宿'"
            >
              <a [routerLink]="item.link" class="relative group"
                >{{ item.title }}
                <div
                  class="w-0 h-mini bg-primary-blue absolute top-6 transition-all duration-300 z-50"
                  [class.w-full]="item.title === '住宿'"
                  [class.w-0]="item.title !== '住宿'"
                  [class.group-hover:w-full]="item.title !== '住宿'"
                ></div>
              </a>
              @if (item.children && item.children.length > 0) {
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
              }
            </li>
          }
          <button [matMenuTriggerFor]="menu" class="flex gap-1 cursor-pointer group">
            <div class="w-1 h-1 group-hover:bg-primary-blue bg-header-list"></div>
            <div class="w-1 h-1 group-hover:bg-primary-blue bg-header-list"></div>
            <div class="w-1 h-1 group-hover:bg-primary-blue bg-header-list"></div>
          </button>
          <mat-menu #menu="matMenu" class="mt-3">
            <a routerLink="/header" mat-menu-item>Trip.com 獎勵計劃</a>
            <a routerLink="/header" mat-menu-item>優惠</a>
          </mat-menu>
        </ul>
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
      title: '火車票',
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
  nav900: NavList[] = [
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
      title: '火車票',
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
    {
      id: 8,
      title: '跟團遊',
      link: '/group',
    },
    {
      id: 9,
      title: '旅遊靈感',
      link: '/pop-up',
    },
  ];
  navItemXXL: NavList[] = [
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
      title: '火車票',
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
    {
      id: 8,
      title: '跟團遊',
      link: '/group',
    },
    {
      id: 9,
      title: '旅遊靈感',
      link: '/pop-up',
    },
    {
      id: 10,
      title: '旅遊地圖',
      link: '/map',
    },
    {
      id: 11,
      title: 'Trip.com獎勵計畫',
      link: '/bonus',
    },
    {
      id: 12,
      title: '優惠',
      link: '/discount',
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
