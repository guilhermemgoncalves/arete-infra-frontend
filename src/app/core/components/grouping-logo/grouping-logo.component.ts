import {Component, input} from '@angular/core';
import {LogoImageDto} from '../../dtos/log-image.dto';
import {ImageUrlDownloadPipe} from '../../pipes/image-url-download.pipe';

@Component({
  selector: 'app-grouping-logo',
  imports: [
    ImageUrlDownloadPipe
  ],
  templateUrl: './grouping-logo.component.html',
  styleUrl: './grouping-logo.component.scss'
})
export class GroupingLogoComponent {

  logos= input.required<Array<LogoImageDto>>();

}
