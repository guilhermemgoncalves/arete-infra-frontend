import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled()">
      <div class="header-container lp-container">
        <div class="logo">
          <img src="/assets/images/logo/logo_full-white.png" alt="Arete Infra Logo" routerLink="/" style="cursor: pointer;" />
        </div>
        <nav>
          <ul>
            <li><a routerLink="/" fragment="home">HOME</a></li>
            <li><a routerLink="/" fragment="clientes">CLIENTES</a></li>
            <li><a routerLink="/" fragment="concessionarias">CONCESSIONÁRIAS</a></li>
            <li><a routerLink="/" fragment="atuacao">ATUAÇÃO</a></li>
            <li><a routerLink="/" fragment="galeria">GALERIA</a></li>
            <li><button class="cta-button" routerLink="/contato">FALE CONOSCO</button></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: background-color 0.3s ease, padding 0.3s ease;
      padding: 2rem 0;
    }

    header.scrolled {
      background-color: rgba(16, 16, 16, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo img {
      height: 40px;
      object-fit: contain;
    }

    nav ul {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      margin: 0;
      padding: 0;
    }

    nav li {
      list-style: none;
    }

    nav a {
      color: var(--color-light);
      text-decoration: none;
      font-weight: 700;
      font-size: 0.85rem;
      letter-spacing: 0.2em;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: var(--color-primary-light);
    }

    .cta-button {
      background-color: transparent;
      color: var(--color-primary-light);
      border: 1px solid var(--color-primary-light);
      padding: 0.8rem 1.5rem;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.15em;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background-color: var(--color-primary-light);
      color: var(--color-primary-dark);
    }

    @media (max-width: 1024px) {
      nav { display: none; } /* Mobile nav implementation would go here */
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
