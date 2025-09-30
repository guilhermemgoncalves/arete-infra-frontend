import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'video-presentation',
  imports: [],
  templateUrl: './video-presentation.component.html',
  styleUrl: './video-presentation.component.scss'
})
export class VideoPresentationComponent {

  url = 'https://player.vimeo.com/video/1123062036?autoplay=1&loop=1&muted=1&background=1';
  safeUrl

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
