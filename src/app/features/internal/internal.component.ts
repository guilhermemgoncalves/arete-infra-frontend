import { Component } from '@angular/core';
import {ImageUploaderComponent} from '../../core/components/image-uploader/image-uploader.component';

@Component({
  selector: 'app-internal',
  imports: [
    ImageUploaderComponent
  ],
  templateUrl: './internal.component.html',
  styleUrl: './internal.component.scss'
})
export class InternalComponent {

}
