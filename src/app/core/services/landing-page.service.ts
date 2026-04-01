import { Injectable, signal } from '@angular/core';
import { LogoImageDto } from '../dtos/log-image.dto';
import { InstagramImageDto } from '../dtos/instagram-image.dto';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor() { }

  async getCustomersLogos(): Promise<LogoImageDto[]> {
    const logos: LogoImageDto[] = [
      { key: '/assets/images/photos/clientes/1.png', description: 'Teriva' },
      { key: '/assets/images/photos/clientes/2.png', description: 'Longitude Incorporações' },
      { key: '/assets/images/photos/clientes/3.png', description: 'Tallento' },
      { key: '/assets/images/photos/clientes/4.png', description: 'Guepardo' },
      { key: '/assets/images/photos/clientes/5.png', description: 'AB Mais' },
      { key: '/assets/images/photos/clientes/1.png', description: 'Teriva' },
      { key: '/assets/images/photos/clientes/2.png', description: 'Longitude Incorporações' },
      { key: '/assets/images/photos/clientes/3.png', description: 'Tallento' },
      { key: '/assets/images/photos/clientes/4.png', description: 'Guepardo' },
      { key: '/assets/images/photos/clientes/5.png', description: 'AB Mais' },
    ];
    return this.simulateLatency(logos);
  }

  async getCompanyLogos(): Promise<LogoImageDto[]> {
    const logos: LogoImageDto[] = [
      { key: '/assets/images/photos/concessionarias/1.png', description: 'Sanasa' },
      { key: '/assets/images/photos/concessionarias/7.png', description: 'Sanasa Alt' },
      { key: '/assets/images/photos/concessionarias/3.png', description: 'Embasa' },
      { key: '/assets/images/photos/concessionarias/10.png', description: 'BRK Ambiental' },
      { key: '/assets/images/photos/concessionarias/5.png', description: 'Deso' },
      { key: '/assets/images/photos/concessionarias/6.png', description: 'Saae' },
      { key: '/assets/images/photos/concessionarias/1.png', description: 'Sanasa' },
      { key: '/assets/images/photos/concessionarias/7.png', description: 'Sanasa Alt' },
      { key: '/assets/images/photos/concessionarias/3.png', description: 'Embasa' },
      { key: '/assets/images/photos/concessionarias/10.png', description: 'BRK Ambiental' },
    ];
    return this.simulateLatency(logos);
  }

  async getInstaGallery(): Promise<InstagramImageDto[]> {
    const images: InstagramImageDto[] = [
      {
        key: '/assets/images/photos/instagram-profile/post1.png',
        description: 'Arete Infra Post 1',
        link: 'https://www.instagram.com/p/DBcmW7psNc_/'
      },
      {
        key: '/assets/images/photos/instagram-profile/post2.png',
        description: 'Arete Infra Post 2',
        link: 'https://www.instagram.com/p/DBcjjFRsrzg/'
      },
      {
        key: '/assets/images/photos/instagram-profile/post3.png',
        description: 'Arete Infra Post 3',
        link: 'https://www.instagram.com/p/DBci1Khsuyy/'
      }
    ];
    return this.simulateLatency(images);
  }

  private simulateLatency<T>(data: T): Promise<T> {
    const latency = Math.floor(Math.random() * (800 - 300 + 1)) + 300;
    return new Promise(resolve => setTimeout(() => resolve(data), latency));
  }
}
