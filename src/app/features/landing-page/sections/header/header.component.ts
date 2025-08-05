import {Component, HostListener, Renderer2, ElementRef, inject} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

interface NavItems  {
  label: string;
  sectionId: string;
  type?: 'navigation' | 'section' | 'scroll';
}

@Component({
  selector: 'app-header',
  imports: [
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private route$ = inject(ActivatedRoute);

  private readonly router = inject(Router);

  navItems: NavItems[] = []
  isMobile = false;
  activeSection: string | null = null;

  constructor(private renderer: Renderer2, private el: ElementRef, private route: ActivatedRoute) {
    this.checkMobileView();
    route.url.subscribe(data => {
      const segmentsName = data.map(segment => segment.path);

      if (segmentsName.includes('contato')) {
        this.activeSection = 'contato';
        this.navItems = this.getFeatureHeaderItems();
        return;
      }

      if (segmentsName.includes('login')) {
        this.activeSection = 'login';
        return;
      }

      this.navItems = this.getHomeHeaderItems();
    })


  }

  navigate(section: NavItems): void {
    if (section.type === 'navigation') {
      this.router.navigate([section.sectionId]);
    }

    if (section.type === 'section') {
      this.navigateToSection(section.sectionId);
    }

    if (section.type === 'scroll') {
      this.router.navigate(['/'], {fragment: section.sectionId})
        .then(
          ()=>{
            setTimeout(() => {

                window.scrollTo({top: window.scrollY - 55, behavior: 'smooth'});

            }, 600);
          }
        );
    }


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

      section.scrollIntoView({behavior: 'smooth'});
      setTimeout(() => {
        if (Math.abs(currentScroll - targetPosition) > 5) {
          window.scrollTo({top: targetPosition, behavior: 'smooth'});
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

    this.updateActiveSection();
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

  private updateActiveSection(): void {
    const sections = this.navItems.filter(item => !item.type).map(item => item.sectionId);


    if (this.router.url.includes('contato')) {
      this.activeSection = 'contato';
      return;
    }

    for (const sectionId of sections) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = sectionId;
          return;
        }
      }
    }
    this.activeSection = null;
  }

  getHomeHeaderItems(): Array<NavItems> {
    return [
      {label: 'Home', sectionId: 'video-presentation', type: 'section'},
      {label: 'Clientes', sectionId: 'customers', type: 'section'},
      {label: 'Concessionárias', sectionId: 'utility-companies', type: 'section'},
      {label: 'Atuação', sectionId: 'services', type: 'section'},
      {label: 'Galeria', sectionId: 'insta-gallery', type: 'section'},
      {label: 'Contato', sectionId: 'contato', type: 'navigation'},
      {label: 'Área interna', sectionId: 'login', type: 'navigation'},
    ];
  }

  getFeatureHeaderItems(): Array<NavItems> {
    return [
      {label: 'Home', sectionId: 'video-presentation', type: 'scroll'},
      {label: 'Clientes', sectionId: 'customers', type: 'scroll'},
      {label: 'Concessionárias', sectionId: 'utility-companies', type: 'scroll'},
      {label: 'Atuação', sectionId: 'services', type: 'scroll'},
      {label: 'Galeria', sectionId: 'insta-gallery', type: 'scroll'},
      {label: 'Contato', sectionId: 'contato', type: 'navigation'},
      {label: 'Área interna', sectionId: 'login', type: 'navigation'}
    ];
  }
}
