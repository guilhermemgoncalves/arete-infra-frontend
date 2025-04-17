import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = environment.apiUrl;

  constructor() {}

  uploadImages(formData: FormData) {
    return from(
      fetch(this.apiUrl+'/image/upload', {
        method: 'POST',
        body: formData,
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
    );
  }
}
