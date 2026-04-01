import {Component, input} from '@angular/core';
import {GroupingLogoComponent} from '../../../../core/components/grouping-logo/grouping-logo.component';
import {LogoImageDto} from '../../../../core/dtos/log-image.dto';
import {FadeInOnScrollDirective} from '../../../../core/directives/fade-in-on-scroll.directive';

@Component({
  selector: 'customers',
  imports: [
    GroupingLogoComponent,
    FadeInOnScrollDirective
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  customersLogos= input.required<Array<LogoImageDto>>();
}
