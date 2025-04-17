import { Injectable } from '@angular/core';
import {InstagramImageDto} from './sections/insta-gallery/instagram-image.dto';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  private apiUrl = environment.apiUrl;


  constructor() { }

  async getInstaGallery(): Promise<InstagramImageDto[]> {
    try {
      const response = await fetch(this.apiUrl+ '/insta-gallery', );
      if (!response.ok) {
        throw new Error('Erro ao buscar imagens do Instagram');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro no serviço Instagram:', error);
      throw error;
    }
  }
}
