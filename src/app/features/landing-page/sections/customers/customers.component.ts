import { Component } from '@angular/core';
import {GroupingLogoComponent} from '../../../../core/components/grouping-logo/grouping-logo.component';

@Component({
  selector: 'customers',
  imports: [
    GroupingLogoComponent
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  customersText: string = `
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
