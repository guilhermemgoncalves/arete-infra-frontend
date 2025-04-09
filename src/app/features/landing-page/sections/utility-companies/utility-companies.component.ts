import { Component } from '@angular/core';
import {FadeInOnScrollDirective} from '../../../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'utility-companies',
  imports: [
    FadeInOnScrollDirective
  ],
  templateUrl: './utility-companies.component.html',
  styleUrl: './utility-companies.component.scss'
})
export class UtilityCompaniesComponent {

}
