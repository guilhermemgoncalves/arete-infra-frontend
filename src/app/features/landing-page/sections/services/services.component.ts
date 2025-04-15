import { Component } from '@angular/core';
import {FadeInOnScrollDirective} from '../../../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'services',
  imports: [
    FadeInOnScrollDirective
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesText!: string;

  constructor() {
    this.servicesText = `
      <p>Somos uma empresa totalmente focada na satisfa&ccedil;&atilde;o do cliente e contamos com os seguintes servi&ccedil;os:</p>
      <ul>
      <li>Dimensionamento de redes de esgoto</li>
      <li>Projetos conceituais e executivos</li>
      <li>Valida&ccedil;&atilde;o nas principais concessionarias do Brasil</li>
      <li>Consultoria em servi&ccedil;os de infraestrutura</li>
      <li>Projetos de esta&ccedil;&atilde;o elevat&oacute;ria</li>
      </ul>
    `;
  }
}
