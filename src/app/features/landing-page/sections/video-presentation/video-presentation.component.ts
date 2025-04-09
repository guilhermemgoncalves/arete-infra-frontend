import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'video-presentation',
  imports: [],
  templateUrl: './video-presentation.component.html',
  styleUrl: './video-presentation.component.scss'
})
export class VideoPresentationComponent {

  url = 'https://www.youtube.com/embed/Dh7HJdPKVaY?si=0jBvFFZRrhND01Ae' +
    '?modesbranding=1&rel=0&showinfo=0&autoplay=1&mute=1&cc_load_policy=0&loop=1';
  safeUrl

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
