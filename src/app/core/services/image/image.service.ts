import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = environment.apiUrl;

  constructor() { }

  getImageUrl(key: string): string {
    return environment.apiUrl + '/image/' + key;
  }
}
