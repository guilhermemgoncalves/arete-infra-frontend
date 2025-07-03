import { Component, inject } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent {

  private readonly router = inject(Router);

  navigateHome() {
    this.router.navigateByUrl('/')
  }
}
