import { Injectable, signal } from '@angular/core';
import { firstValueFrom, timer } from 'rxjs';

export interface ContactMessage {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  isSending = signal(false);

  async sendMessage(message: ContactMessage): Promise<boolean> {
    this.isSending.set(true);
    
    // Simula latência de rede entre 500ms e 1200ms
    const delay = Math.floor(Math.random() * (1200 - 500 + 1)) + 500;
    await firstValueFrom(timer(delay));
    
    console.log('Mensagem enviada com sucesso (Simulação):', message);
    
    this.isSending.set(false);
    return true;
  }
}
