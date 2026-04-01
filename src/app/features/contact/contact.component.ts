import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  showSuccess = signal(false);

  contactForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    assunto: ['', [Validators.required]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const { nome, email, assunto, mensagem } = this.contactForm.value;
      const recipient = 'contato@areteinfra.com.br';
      
      const subject = encodeURIComponent(`[Contato Site] ${assunto} - ${nome}`);
      const body = encodeURIComponent(
        `NOME: ${nome}\n` +
        `E-MAIL: ${email}\n` +
        `ASSUNTO: ${assunto}\n\n` +
        `MENSAGEM:\n${mensagem}`
      );
      
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
      
      // Abrir o cliente de e-mail padrão
      window.location.href = mailtoUrl;

      // Feedback visual de sucesso
      this.showSuccess.set(true);
      this.contactForm.reset();
      
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000); // 5 segundos para o usuário ver a mensagem antes de voltar
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
