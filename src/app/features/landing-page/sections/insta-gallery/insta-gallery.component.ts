import { Component } from '@angular/core';
import {ImageService} from '../../../../core/services/image/image.service';
import {ImageUrlDownloadPipe} from '../../../../core/pipes/image-url-download.pipe';
import {InstagramImageDto} from './instagram-image.dto';

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

  images: Array<InstagramImageDto> =  [
    {
      key: '62a753a8-d733-4a50-8f98-943889c8ff94',
      link: 'https://www.instagram.com/p/DBcmW7psNc_/?img_index=1',
      likes: 10,
      comments: 12
    }, {
      key: '62a753a8-d733-4a50-8f98-943889c8ff94',
      link: 'https://www.instagram.com/p/DBcmW7psNc_/?img_index=1',
      likes: 10,
      comments: 12
    }, {
      key: '62a753a8-d733-4a50-8f98-943889c8ff94',
      link: 'https://www.instagram.com/p/DBcmW7psNc_/?img_index=1',
      likes: 10,
      comments: 12
    }
  ]
}
