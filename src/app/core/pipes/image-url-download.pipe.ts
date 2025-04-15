import { Pipe, PipeTransform } from '@angular/core';
import {ImageService} from '../services/image/image.service';

@Pipe({
  name: 'imageUrlDownload'
})
export class ImageUrlDownloadPipe implements PipeTransform {

  constructor(private imageService: ImageService) {}

  transform(uuid: string): string {
    return this.imageService.getImageUrl(uuid);
  }
}
