import { Component } from '@angular/core';
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
      comments: 12,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    }, {
      key: '62a753a8-d733-4a50-8f98-943889c8ff94',
      link: 'https://www.instagram.com/p/DBcmW7psNc_/?img_index=1',
      likes: 10,
      comments: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    }, {
      key: '62a753a8-d733-4a50-8f98-943889c8ff94',
      link: 'https://www.instagram.com/p/DBcmW7psNc_/?img_index=1',
      likes: 10,
      comments: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]
}
