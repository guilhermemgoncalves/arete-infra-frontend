import {Component, Input, input, signal} from '@angular/core';
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

  @Input() columnsCount = signal(5);

  logos= input.required<Array<LogoImageDto>>();

  get cssVar() {
    return { '--logo-columns': this.columnsCount() };
  }
}
