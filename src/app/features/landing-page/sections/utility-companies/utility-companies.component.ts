import { Component } from '@angular/core';
import {FadeInOnScrollDirective} from '../../../../core/directives/fade-in-on-scroll.directive';
import {GroupingLogoComponent} from "../../../../core/components/grouping-logo/grouping-logo.component";

@Component({
  selector: 'utility-companies',
    imports: [
        FadeInOnScrollDirective,
        GroupingLogoComponent
    ],
  templateUrl: './utility-companies.component.html',
  styleUrl: './utility-companies.component.scss'
})
export class UtilityCompaniesComponent {

  companiesText: string = `
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
