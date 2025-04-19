import {Component, input} from '@angular/core';
import {ImageUrlDownloadPipe} from '../../../../core/pipes/image-url-download.pipe';
import {InstagramImageDto} from '../../../../core/dtos/instagram-image.dto';

@Component({
  selector: 'insta-gallery',
  imports: [
    ImageUrlDownloadPipe
  ],
  templateUrl: './insta-gallery.component.html',
  styleUrl: './insta-gallery.component.scss'
})
export class InstaGalleryComponent {


  constructor() {}

  images = input.required<Array<InstagramImageDto>>()
}
