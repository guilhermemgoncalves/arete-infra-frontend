import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoImageDto } from '../../../../core/dtos/log-image.dto';

@Component({
  selector: 'app-brand-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="brand-grid-section" [style.background]="background()">
      <div class="lp-container">
        <div class="section-header">
          <h2 class="section-title">{{ title() }}</h2>
          @if (subtitle()) {
            <p class="section-subtitle">{{ subtitle() }}</p>
          }
        </div>
        <div class="grid-container">
          @for (logo of logos(); track logo.key) {
            <div class="logo-item">
              <img [src]="logo.key" [alt]="logo.description" />
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .brand-grid-section {
      padding: 180px 0;
      width: 100%;
    }

    .section-header {
      margin-bottom: 6rem;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      text-align: center;
      align-items: center;
    }

    .section-title {
      font-size: clamp(1.5rem, 5vw, 2.8rem);
      font-weight: 900;
      letter-spacing: -0.01em;
      color: hsl(160, 80%, 45%);
      margin: 0;
      line-height: 1.1;
      opacity: 0.95;
      text-transform: uppercase;
      text-align: center;
    }

    .section-subtitle {
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--color-light);
      text-transform: uppercase;
      margin: 0.6rem 0 0 0;
      letter-spacing: 0.25em;
      opacity: 0.7;
      text-align: center;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 6rem;
    }

    .logo-item {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      filter: grayscale(100%) brightness(2);
      opacity: 0.3;
      height: 60px;
    }

    .logo-item:hover {
      filter: grayscale(0%) brightness(1);
      opacity: 1;
      transform: translateY(-5px);
    }

    .logo-item img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    @media (max-width: 1024px) {
      .grid-container { grid-template-columns: repeat(3, 1fr); }
    }

    @media (max-width: 600px) {
      .grid-container { grid-template-columns: repeat(2, 1fr); }
    }
  `]
})
export class BrandGridComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  logos = input.required<LogoImageDto[]>();
  background = input<string>('transparent');
}
