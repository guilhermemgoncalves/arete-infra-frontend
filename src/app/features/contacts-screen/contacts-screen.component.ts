import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ComingSoonComponent } from '../../core/components/coming-soon/coming-soon.component';
import {HeaderComponent} from '../landing-page/sections/header/header.component';

@Component({
  selector: 'app-contacts-screen',
  imports: [
    ComingSoonComponent,
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './contacts-screen.component.html',
  styleUrl: './contacts-screen.component.scss'
})
export class ContactsScreenComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required], // Novo campo
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
