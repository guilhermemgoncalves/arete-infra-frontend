import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="video-background">
        <iframe
          [src]="videoUrl"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>
      </div>
      <div class="overlay">
        <div class="hero-content">
          <div class="title-wrapper fade-in">
             <img src="/assets/images/logo/arete-icon.svg" class="hero-logo" alt="Arete Icon" />
             <h1>ARETÉ</h1>
          </div>
          <h2 class="fade-in">INFRAESTRUTURA</h2>
          <p class="fade-in">ENGENHARIA QUE TRANSFORMA LEGADOS EM ARTE</p>
          <div class="scroll-hint">
             <span>ROLE</span>
             <div class="line"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden;
      background-color: #000;
    }

    .video-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .video-background iframe {
      width: 100vw;
      height: 56.25vw; /* 16:9 aspect ratio */
      min-height: 100vh;
      min-width: 177.77vh; /* 16:9 aspect ratio */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7));
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .hero-content h1 {
      font-size: clamp(3rem, 10vw, 9rem);
      font-weight: 900;
      letter-spacing: 0.1em;
      margin-inline: 1rem;
      color: #fff;
      display: inline-block;
      vertical-align: middle;
    }

    .hero-content h2 {
      font-size: clamp(1rem, 4vw, 2.5rem);
      font-weight: 400;
      letter-spacing: 0.5em;
      color: #fff;
      margin-top: -1rem;
      margin-bottom: 2rem;
    }

    .hero-logo {
      height: clamp(50px, 10vw, 150px);
      display: inline-block;
      vertical-align: middle;
      opacity: 0.9;
    }

    .hero-content p {
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.35em;
      color: var(--color-primary-light);
      text-transform: uppercase;
      opacity: 0.8;
    }

    .scroll-hint {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 700;
      font-size: 0.7rem;
      letter-spacing: 0.3em;
      opacity: 0.6;
    }

    .scroll-hint .line {
      width: 1px;
      height: 60px;
      background: var(--color-light);
      margin-top: 1rem;
      animation: heightPulse 2s infinite ease-in-out;
    }

    @keyframes heightPulse {
      0%, 100% { height: 40px; transform: scaleY(1); transform-origin: top; }
      50% { height: 80px; transform: scaleY(1.2); }
    }

    .fade-in {
      animation: fadeIn 2s forwards ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HeroComponent {
  private sanitizer = inject(DomSanitizer);
  videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://player.vimeo.com/video/1123062036?autoplay=1&loop=1&muted=1&background=1'
  );
}
