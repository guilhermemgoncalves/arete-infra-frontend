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

  async getCompanyLogosMock(): Promise<LogoImageDto[]> {

    const logos: LogoImageDto[] = [
      {
        key: './assets/images/photos/concessionarias/1.png',
        description: 'sanasa logo'
      },
      {
        key: './assets/images/photos/concessionarias/7.png',
        description: 'sanasa logo'
      },
      {
        key: './assets/images/photos/concessionarias/3.png',
        description: 'embasa logo'
      },
      {
        key: './assets/images/photos/concessionarias/10.png',
        description: 'brk ambiental logo'
      },
      {
        key: './assets/images/photos/concessionarias/5.png',
        description: 'deso logo'
      },
      {
        key: './assets/images/photos/concessionarias/6.png',
        description: 'saae logo'
      },
    ]

    return Promise.resolve(logos)
  }

  async getCustomersLogosMock(): Promise<LogoImageDto[]> {

    const logos: LogoImageDto[] = [
      {
        key: './assets/images/photos/clientes/1.png',
        description: 'Teriva logo'
      },
      {
        key: './assets/images/photos/clientes/2.png',
        description: 'Longitude Incorporações logo'
      },
      {
        key: './assets/images/photos/clientes/3.png',
        description: 'Tallento logo'
      },
      {
        key: './assets/images/photos/clientes/4.png',
        description: 'Guepardo logo'
      },
      {
        key: './assets/images/photos/clientes/5.png',
        description: 'AB Mais logo'
      },
      {
        key: './assets/images/photos/clientes/6.png',
        description: 'Alphaville logo'
      }
    ]

    return Promise.resolve(logos)
  }

  getInstaGalleryMock(): Promise<InstagramImageDto[]> {
    const images: InstagramImageDto[] = [

      {
        key: './assets/images/photos/instagram-profile/post1.png',
        description: 'Imagem 1',
        link: 'https://www.instagram.com/p/DBcmW7psNc_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
      },
      {
        key: './assets/images/photos/instagram-profile/post2.png',
        description: 'Imagem 2',
        link: 'https://www.instagram.com/p/DBcjjFRsrzg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
      },
      {
        key: './assets/images/photos/instagram-profile/post3.png',
        description: 'Imagem 3',
        link: 'https://www.instagram.com/p/DBci1Khsuyy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
      }
    ];

    return Promise.resolve(images);
  }
}
