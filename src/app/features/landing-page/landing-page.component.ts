import { Component } from '@angular/core';
import {VideoPresentationComponent} from './sections/video-presentation/video-presentation.component';
import {CustomersComponent} from './sections/customers/customers.component';
import {UtilityCompaniesComponent} from './sections/utility-companies/utility-companies.component';
import {ServicesComponent} from './sections/services/services.component';
import {InstaGalleryComponent} from './sections/insta-gallery/insta-gallery.component';
import {ContactsComponent} from './sections/contacts/contacts.component';

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
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
