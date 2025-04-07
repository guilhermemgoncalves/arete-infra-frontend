import { Component } from '@angular/core';
import { VideoPresentationComponent } from './sections/video-presentation/video-presentation.component';
import { CustomersComponent } from './sections/customers/customers.component';
import { UtilityCompaniesComponent } from './sections/utility-companies/utility-companies.component';
import { ServicesComponent } from './sections/services/services.component';
import { InstaGalleryComponent } from './sections/insta-gallery/insta-gallery.component';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'landing-page',
  imports: [
    VideoPresentationComponent,
    CustomersComponent,
    UtilityCompaniesComponent,
    ServicesComponent,
    InstaGalleryComponent,
    ContactsComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {
    this.titleService.setTitle('Areté - Landing Page');
    this.metaService.updateTag({ name: 'description', content: 'Areté infraestrutura landing page' });
    this.metaService.updateTag({ name: 'keywords', content: 'areté, infraestrutura, areté-infra, engenharia, saneamento, esgoto, pluviais, portifólio, estação elevatória, agua' });
  }
}
