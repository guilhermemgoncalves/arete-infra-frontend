import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageService } from '../../core/services/landing-page.service';
import { LogoImageDto } from '../../core/dtos/log-image.dto';
import { InstagramImageDto } from '../../core/dtos/instagram-image.dto';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BrandGridComponent } from './components/brand-grid/brand-grid.component';
import { ActionSectionComponent } from './components/action-section/action-section.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    BrandGridComponent,
    ActionSectionComponent,
    GalleryComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  private landingPageService = inject(LandingPageService);

  customers = signal<LogoImageDto[]>([]);
  concessionarias = signal<LogoImageDto[]>([]);
  instagramPosts = signal<InstagramImageDto[]>([]);

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const [cust, conc, insta] = await Promise.all([
      this.landingPageService.getCustomersLogos(),
      this.landingPageService.getCompanyLogos(),
      this.landingPageService.getInstaGallery()
    ]);
    this.customers.set(cust);
    this.concessionarias.set(conc);
    this.instagramPosts.set(insta);
  }
}
