import {Component} from '@angular/core';
import {ImageUrlDownloadPipe} from "../../pipes/image-url-download.pipe";
import {FormsModule} from '@angular/forms';
import {ImageDto} from '../../dtos/image-dto';
import {ImageService} from '../../services/image/image.service';
import {Endpoints} from '../../enums/enpoint-enums';

@Component({
  selector: 'app-image-selector',
  imports: [
    ImageUrlDownloadPipe,
    FormsModule
  ],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.scss'
})
export class ImageSelectorComponent {
  images : Array<ImageDto> = [];
  endpoints: Endpoints[] = Object.values(Endpoints);
  selectedEndpoint: Endpoints = Endpoints.INSTAGRAM;

  constructor(private imageService: ImageService) {
    this.getImages();
  }

  async getImages() {
    this.images = await this.imageService.listImages();
  }


  saveImages(){
    const imagesToSave: Array<ImageDto> = this.images.filter(image => image.selected);
    this.imageService.selectImages(imagesToSave, this.selectedEndpoint);
    console.log(imagesToSave);
  }

  getEndpointName(endpoint: string): string {
    return endpoint.replace('/', '').split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
