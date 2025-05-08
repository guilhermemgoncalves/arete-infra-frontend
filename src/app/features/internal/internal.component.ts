import { Component } from '@angular/core';
import {ImageUploaderComponent} from '../../core/components/image-uploader/image-uploader.component';
import {ImageSelectorComponent} from '../../core/components/image-selector/image-selector.component';

@Component({
  selector: 'app-internal',
  imports: [
    ImageUploaderComponent,
    ImageSelectorComponent
  ],
  templateUrl: './internal.component.html',
  styleUrl: './internal.component.scss'
})
export class InternalComponent {

}
