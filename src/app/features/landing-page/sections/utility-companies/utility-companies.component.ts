import {Component, input, signal} from '@angular/core';
import {FadeInOnScrollDirective} from '../../../../core/directives/fade-in-on-scroll.directive';
import {GroupingLogoComponent} from "../../../../core/components/grouping-logo/grouping-logo.component";
import {LogoImageDto} from '../../../../core/dtos/log-image.dto';

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
  companyLogos= input.required<Array<LogoImageDto>>();
  columns= signal(4);
}
