import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ImageDto} from '../../dtos/image-dto';
import {InstagramImageDto} from '../../dtos/instagram-image.dto';
import {Endpoints} from '../../enums/enpoint-enums';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = environment.apiUrl;

  constructor() { }

  getImageUrl(key: string): string {
    return environment.apiUrl + '/image/' + key;
  }

  async listImages(): Promise<Array<ImageDto>> {
    return fetch(this.apiUrl + '/image')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar imagens');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Erro no serviço de imagens:', error);
        throw error;
      });
  }

  async selectImages(images: Array<ImageDto>, endpoint: Endpoints): Promise<void> {
    const imageToSelect: InstagramImageDto[] = images.map(x => ({
      key: x.key,
      description: '',
      link: ''
    }));

    const url = `${this.apiUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(imageToSelect)
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const text = await response.text();
      if (!text) return;

      return JSON.parse(text);
    } catch (error) {
      console.error('Erro no serviço de imagens:', error);
      throw error;
    }
  }
}
