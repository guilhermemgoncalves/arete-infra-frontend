import {Component, input} from '@angular/core';
import {ImageUrlDownloadPipe} from '../../../../core/pipes/image-url-download.pipe';
import {InstagramImageDto} from '../../../../core/dtos/instagram-image.dto';
import {FadeInOnScrollDirective} from '../../../../core/directives/fade-in-on-scroll.directive';
import {ContactsComponent} from '../contacts/contacts.component';

@Component({
  selector: 'insta-gallery',
  imports: [
    ImageUrlDownloadPipe,
    FadeInOnScrollDirective,
    ContactsComponent
  ],
  templateUrl: './insta-gallery.component.html',
  styleUrl: './insta-gallery.component.scss'
})
export class InstaGalleryComponent {


  constructor() {}

  images = input.required<Array<InstagramImageDto>>()
}
