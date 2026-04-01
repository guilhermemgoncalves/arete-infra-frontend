import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstagramImageDto } from '../../../../core/dtos/instagram-image.dto';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="galeria" class="gallery-section">
      <div class="lp-container">
        <h2 class="section-title">GALERIA</h2>
        <div class="gallery-grid">
          @for (post of posts(); track post.key) {
            <a [href]="post.link" target="_blank" rel="noopener" class="gallery-item">
              <img [src]="post.key" [alt]="post.description" />
              <div class="overlay">
                <span class="view-link">ABRIR POST</span>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      padding: 180px 0;
      background-color: #080808;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .gallery-item {
      position: relative;
      aspect-ratio: 1;
      overflow: hidden;
      border-radius: 4px;
      display: block;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(23, 166, 151, 0.4);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .view-link {
      color: #fff;
      font-weight: 800;
      letter-spacing: 0.2em;
      border-bottom: 2px solid #fff;
      padding-bottom: 0.3rem;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    .gallery-item:hover .overlay {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .gallery-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class GalleryComponent {
  posts = input.required<InstagramImageDto[]>();
}
