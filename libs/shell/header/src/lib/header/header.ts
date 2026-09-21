import { Component, OnInit, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import navData from '@shared/assets/nav-items.json';
import { I18nService } from '../i18n.service';
import { TranslatePipe } from '../translate.pipe';
import { SupportedLanguage } from '@shared/i18n';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    TranslatePipe
  ],
  template: `
    <mat-toolbar class="sticky-header" [class.hidden]="isHidden">
      <div class="toolbar-content">
        <div class="logo">
          <img src="/img/headshot.jpg" alt="Antin headshot" />
        </div>

        <span class="spacer"></span>

        <!-- Mobile Button -->
        <div class="mobile-menu-btn">
          <button mat-icon-button (click)="drawer.toggle()" aria-label="Open menu">
            <mat-icon>menu</mat-icon>
          </button>
        </div>

        <!-- Desktop Nav -->
        <div class="desktop-nav">
          <button mat-button *ngFor="let item of navItems" (click)="scrollToSection(item.target, item.isRoute)">
            {{ (navKeyMap[item.label] ? (navKeyMap[item.label] | translate) : item.label) | uppercase }}
          </button>

          <!-- Language Selector -->
          <button mat-button [matMenuTriggerFor]="langMenu" class="lang-btn" aria-label="Select language">
            <mat-icon class="lang-icon">language</mat-icon>
            <span class="lang-code">{{ i18n.currentLanguage() | uppercase }}</span>
            <mat-icon class="dropdown-icon">arrow_drop_down</mat-icon>
          </button>
          <mat-menu #langMenu="matMenu">
            <button mat-menu-item *ngFor="let lang of i18n.supportedLanguages" (click)="selectLanguage(lang.code)">
              <span class="flag-icon">{{ lang.flag }}</span>
              <span>{{ lang.label }}</span>
            </button>
          </mat-menu>
        </div>
      </div>
    </mat-toolbar>

    <!-- Global Drawer Overlay Container -->
    <mat-sidenav-container class="global-sidenav-container" [class.drawer-open]="drawer.opened">
      <mat-sidenav #drawer fixedInViewport="true" position="start" mode="over">
        <div class="drawer-header">
          <h2>Philip Antin</h2>
        </div>
        <mat-nav-list>
          <a mat-list-item *ngFor="let item of navItems" (click)="scrollToSection(item.target, item.isRoute); drawer.close()">
            <span matListItemTitle>{{ navKeyMap[item.label] ? (navKeyMap[item.label] | translate) : item.label }}</span>
          </a>
        </mat-nav-list>

        <mat-divider></mat-divider>

        <div class="drawer-lang-section">
          <div class="drawer-lang-title">
            <mat-icon>language</mat-icon>
            <span>Language</span>
          </div>
          <div class="drawer-lang-buttons">
            <button
              mat-stroked-button
              *ngFor="let lang of i18n.supportedLanguages"
              [color]="i18n.currentLanguage() === lang.code ? 'primary' : undefined"
              [class.active-lang]="i18n.currentLanguage() === lang.code"
              (click)="selectLanguage(lang.code); drawer.close()"
            >
              {{ lang.flag }} {{ lang.code | uppercase }}
            </button>
          </div>
        </div>
      </mat-sidenav>
    </mat-sidenav-container>
  `,
  styles: [`
    :host {
      display: block;
    }

    /* Toolbar Layout */
    .sticky-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }

    .sticky-header.hidden {
      transform: translateY(-100%);
    }

    .toolbar-content {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 16px;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .logo {
      display: flex;
      align-items: center;
    }

    .logo img {
      height: 50px;
      border-radius: 50%;
      margin-right: 12px;
    }

    .desktop-nav {
      display: none;
    }

    .desktop-nav button {
      color: var(--theme-text-primary);
    }

    .desktop-nav button:hover {
      color: var(--theme-primary-main);
    }

    .lang-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 0 8px;
    }

    .lang-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .lang-code {
      font-weight: 600;
      font-size: 14px;
    }

    .dropdown-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      margin-left: -4px;
    }

    .flag-icon {
      margin-right: 8px;
      font-size: 16px;
    }

    .mobile-menu-btn {
      display: block;
      color: var(--theme-text-primary);
    }

    @media (min-width: 900px) {
      .desktop-nav {
        display: flex;
        gap: 16px;
        align-items: center;
      }
      .mobile-menu-btn {
        display: none;
      }
    }

    /* Drawer Overlay Styling */
    .global-sidenav-container {
      position: fixed;
      inset: 0;
      z-index: 1200;
      pointer-events: none;
      background: transparent;
    }

    .global-sidenav-container.drawer-open {
      pointer-events: auto;
    }

    .mat-sidenav {
      width: 280px;
      background-color: var(--theme-bg-paper);
    }

    .drawer-header {
      padding: 24px 16px;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    
    .drawer-header h2 {
      margin: 0;
      font-size: 1.5rem;
      color: var(--theme-primary-main);
    }

    .mat-nav-list a {
      color: var(--theme-text-primary);
    }

    .mat-nav-list a:hover {
      color: var(--theme-primary-main);
      background-color: rgba(0, 0, 0, 0.04);
    }

    .drawer-lang-section {
      padding: 16px;
    }

    .drawer-lang-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: var(--theme-text-secondary, #666);
      margin-bottom: 12px;
    }

    .drawer-lang-buttons {
      display: flex;
      gap: 8px;
    }

    .drawer-lang-buttons button {
      flex: 1;
      font-size: 12px;
      padding: 0 4px;
    }

    .active-lang {
      font-weight: bold;
      border-color: var(--theme-primary-main) !important;
    }
  `]
})
export class Header implements OnInit {
  i18n = inject(I18nService);
  navItems = navData.navItems;
  isHidden = false;
  private lastScrollPosition = 0;
  isHome = false;

  readonly navKeyMap: Record<string, string> = {
    'About Philip': 'nav.about',
    'Competencies': 'nav.competencies',
    'Contact Philip': 'nav.contact',
    'Time Warp': 'nav.past',
  };

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Determine if we are exactly on home
      const url = event.urlAfterRedirects;
      this.isHome = url === '/' || url.startsWith('/#');

      // Scroll handling for hash logic
      if (this.router.url.includes('#')) {
        const id = this.router.url.split('#')[1];
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.isHome = this.router.url === '/' || this.router.url.startsWith('/#');
  }

  selectLanguage(lang: SupportedLanguage) {
    this.i18n.setLanguage(lang);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 64) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollPosition = currentScrollPosition;
  }

  scrollToSection(target: string, isRoute?: boolean) {
    if (target === 'contact') {
      this.router.navigate([], { queryParams: { contact: 'true' }, queryParamsHandling: 'merge' });
      return;
    }

    if (isRoute) {
      this.router.navigate([target]);
      return;
    }

    if (!this.isHome) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
      return;
    }

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
