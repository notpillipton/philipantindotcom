import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import navData from '@shared/assets/nav-items.json';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  template: `
    <mat-toolbar color="primary" class="sticky-header" [class.hidden]="isHidden">
      <div class="toolbar-content">
        <div class="logo">
          <img src="/img/headshot.jpg" alt="Antin headshot" />
        </div>

        <span class="spacer"></span>

        <!-- Mobile Button -->
        <div class="mobile-menu-btn">
          <button mat-icon-button (click)="drawer.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
        </div>

        <!-- Desktop Nav -->
        <div class="desktop-nav">
          <button mat-button *ngFor="let item of navItems" (click)="scrollToSection(item.target, item.isRoute)">
            {{ item.label | uppercase }}
          </button>
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
            <span matListItemTitle>{{ item.label }}</span>
          </a>
        </mat-nav-list>
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
      height: 40px;
      border-radius: 50%;
      margin-right: 12px;
      border: 2px solid var(--theme-primary-main);
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

    .mobile-menu-btn {
      display: block;
      color: var(--theme-text-primary);
    }

    @media (min-width: 900px) {
      .desktop-nav {
        display: flex;
        gap: 24px;
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
  `]
})
export class Header implements OnInit {
  navItems = navData.navItems;
  isHidden = false;
  private lastScrollPosition = 0;
  isHome = false;

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
