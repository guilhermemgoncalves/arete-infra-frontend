import {Component, HostListener, Renderer2, ElementRef} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', sectionId: 'video-presentation' },
    { label: 'Clientes', sectionId: 'customers' },
    { label: 'Concessionárias', sectionId: 'utility-companies' },
    { label: 'Serviços', sectionId: 'services' },
    { label: 'Galeria', sectionId: 'insta-gallery' }
  ];
  isMobile = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.checkMobileView();
  }

  navigateToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 55;
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const targetPosition = section.getBoundingClientRect().top + currentScroll - offset;

      if (Math.abs(currentScroll - targetPosition) <= 5) {
        return;
      }

      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if (Math.abs(currentScroll - targetPosition) > 5) {
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }, 600);
    }
  }

  reloadHomePage(): void {
    window.location.href = '/';
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const navbarElement = this.el.nativeElement.querySelector('.navbar');
    if (navbarElement) {
      if (scrollPosition > 40) {
        this.renderer.addClass(navbarElement, 'shrink');
      } else {
        this.renderer.removeClass(navbarElement, 'shrink');
      }
    }
  }

  @HostListener('mouseover', ['$event.target'])
  onMouseOver(target: HTMLElement): void {
    if (target.classList.contains('nav-link') || target.classList.contains('whatsapp-icon')) {
      this.renderer.setStyle(target, 'cursor', 'pointer');
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkMobileView();
  }

  private checkMobileView(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}
