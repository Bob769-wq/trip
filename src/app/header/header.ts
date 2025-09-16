import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
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
        <div class="py-4 pr-8 max-w-up-header">
          <a class="inline-block w-logo h-logo my-mini"><img src="/logo.svg" alt="logo" /></a>
        </div>
        <div class="mb-2 mt-6">
          <ul class="flex items-center">
            @for (item of navItem; track item.id) {
              <li
                class="pr-8 text-base text-header-list font-normal cursor-pointer hover:text-primary-blue"
              >
                <a [routerLink]="item.link">{{ item.title }}</a>
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
              class="bg-primary-blue hover:bg-primary-blue-hover p-2 mx-1 my-4 h-list-right  rounded text-white"
            >
              登入／註冊會員
            </li>
          </ul>
        </div>
      </div>
    </header>

    <div class="px-1 py-4 -mt-4 sticky top-0 bg-white z-10 shadow-lg">
      <div
        class="max-w-6.5xl mx-auto py-2 pl-2 pr-1 h-16 min-w-input-container border-4 rounded-lg border-primary-blue flex items-center"
      >
        <div
          class="flex items-center w-full h-full mr-2 rounded max-w-1/3 relative hover:bg-input-container-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mx-2"
            height="22"
            width="22"
            viewBox="0 0 640 640"
          >
            <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              fill="#0F294D"
              d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
            />
          </svg>
          <div class="w-72 h-full max-w-input-max flex items-center">
            <input
              type="text"
              class="w-full h-full rounded text-base font-bold outline-none bg-transparent"
              value="台北"
              placeholder="打算去哪玩？"
            />
          </div>
          <div class="absolute top-3 right-6">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="#0f294d"
                d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C240.4 221.6 255.6 221.6 264.9 231L319.9 286L374.9 231C384.3 221.6 399.5 221.6 408.8 231C418.1 240.4 418.2 255.6 408.8 264.9L353.8 319.9L408.8 374.9C418.2 384.3 418.2 399.5 408.8 408.8C399.4 418.1 384.2 418.2 374.9 408.8L319.9 353.8L264.9 408.8C255.5 418.2 240.3 418.2 231 408.8C221.7 399.4 221.6 384.2 231 374.9L286 319.9L231 264.9C221.6 255.5 221.6 240.3 231 231z"
              />
            </svg>
          </div>
        </div>
        <div class="min-w-divider h-8 bg-divider"></div>
        <div
          class="flex justify-between items-center w-3/10 h-full rounded pl-2 mx-2 max-w-1/3 relative hover:bg-input-container-hover cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            class="mr-2"
            viewBox="0 0 640 640"
          >
            <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
            <path
              fill="#0f294d"
              d="M224 64C241.7 64 256 78.3 256 96L256 128L384 128L384 96C384 78.3 398.3 64 416 64C433.7 64 448 78.3 448 96L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 96C192 78.3 206.3 64 224 64zM160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288C167.2 288 160 295.2 160 304zM288 304L288 336C288 344.8 295.2 352 304 352L336 352C344.8 352 352 344.8 352 336L352 304C352 295.2 344.8 288 336 288L304 288C295.2 288 288 295.2 288 304zM432 288C423.2 288 416 295.2 416 304L416 336C416 344.8 423.2 352 432 352L464 352C472.8 352 480 344.8 480 336L480 304C480 295.2 472.8 288 464 288L432 288zM160 432L160 464C160 472.8 167.2 480 176 480L208 480C216.8 480 224 472.8 224 464L224 432C224 423.2 216.8 416 208 416L176 416C167.2 416 160 423.2 160 432zM304 416C295.2 416 288 423.2 288 432L288 464C288 472.8 295.2 480 304 480L336 480C344.8 480 352 472.8 352 464L352 432C352 423.2 344.8 416 336 416L304 416zM416 432L416 464C416 472.8 423.2 480 432 480L464 480C472.8 480 480 472.8 480 464L480 432C480 423.2 472.8 416 464 416L432 416C423.2 416 416 423.2 416 432z"
            />
          </svg>
          <div class="w-24">
            <input
              type="text"
              value="9月15日 週一"
              placeholder="選擇日期"
              readonly
              class="w-full h-full rounded text-base font-bold outline-none bg-transparent cursor-pointer"
            />
          </div>
          <div>-</div>
          <div class="w-24">
            <input
              type="text"
              value="9月19日 週五"
              placeholder="選擇日期"
              readonly
              class="w-full h-full rounded text-base font-bold outline-none bg-transparent cursor-pointer"
            />
          </div>
          <div class="rounded-lg bg-night px-2">
            <span>4晚</span>
          </div>
        </div>
        <div class="min-w-divider h-8 bg-divider"></div>

        <div
          class="flex items-center h-full flex-1 rounded pl-2 mx-2 relative hover:bg-input-container-hover cursor-pointer"
        >
          <div class="flex w-full items-center py-2 pl-2 pr-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              width="22"
              class="mr-3"
              viewBox="0 0 640 640"
            >
              <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="#0f294d"
                d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"
              />
            </svg>
            <p>1房, 1位成人, 0位兒童</p>
          </div>
        </div>
        <div
          class="ml-auto
           h-full rounded "
        >
          <button class="bg-primary-blue hover:bg-primary-blue-hover h-full rounded font-bold px-4">
            <div class="flex gap-1 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M552 256L408 256C398.3 256 389.5 250.2 385.8 241.2C382.1 232.2 384.1 221.9 391 215L437.7 168.3C362.4 109.7 253.4 115 184.2 184.2C109.2 259.2 109.2 380.7 184.2 455.7C259.2 530.7 380.7 530.7 455.7 455.7C463.9 447.5 471.2 438.8 477.6 429.6C487.7 415.1 507.7 411.6 522.2 421.7C536.7 431.8 540.2 451.8 530.1 466.3C521.6 478.5 511.9 490.1 501 501C401 601 238.9 601 139 501C39.1 401 39 239 139 139C233.3 44.7 382.7 39.4 483.3 122.8L535 71C541.9 64.1 552.2 62.1 561.2 65.8C570.2 69.5 576 78.3 576 88L576 232C576 245.3 565.3 256 552 256z"
                />
              </svg>
              <span class="text-white">更新</span>
            </div>
          </button>
        </div>
      </div>
    </div>
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
      children: [{ id: 1, title: '租車', link: '/car' }],
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

  fb = inject(NonNullableFormBuilder);
  form = this.fb.group('');
}
