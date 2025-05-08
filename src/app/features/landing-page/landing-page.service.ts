import { Injectable } from '@angular/core';
import {InstagramImageDto} from '../../core/dtos/instagram-image.dto';
import {environment} from '../../../environments/environment';
import {LogoImageDto} from '../../core/dtos/log-image.dto';

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

  async getCustomersLogos(): Promise<LogoImageDto[]> {
    try {
      const response = await fetch(this.apiUrl + '/customers');
      if (!response.ok) {
        throw new Error('Erro ao buscar logos dos clientes');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro no serviço de logos dos clientes:', error);
      throw error;
    }
  }

  async getCompanyLogos(): Promise<LogoImageDto[]> {
    try {
      const response = await fetch(this.apiUrl + '/utility-companies');
      if (!response.ok) {
        throw new Error('Erro ao buscar logos dos clientes');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro no serviço de logos dos clientes:', error);
      throw error;
    }
  }
}
