import {Component} from '@angular/core';
import {VideoPresentationComponent} from './sections/video-presentation/video-presentation.component';
import {CustomersComponent} from './sections/customers/customers.component';
import {UtilityCompaniesComponent} from './sections/utility-companies/utility-companies.component';
import {ServicesComponent} from './sections/services/services.component';
import {InstaGalleryComponent} from './sections/insta-gallery/insta-gallery.component';
import {ContactsComponent} from './sections/contacts/contacts.component';
import {Meta, Title} from '@angular/platform-browser';
import {ImageUploaderComponent} from '../../core/components/image-uploader/image-uploader.component';

@Component({
  selector: 'landing-page',
  imports: [
    VideoPresentationComponent,
    CustomersComponent,
    UtilityCompaniesComponent,
    ServicesComponent,
    InstaGalleryComponent,
    ContactsComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {
    this.titleService.setTitle('Areté - Landing Page');
    this.metaService.updateTag({name: 'description', content: 'Areté infraestrutura landing page'});
    this.metaService.updateTag({
      name: 'keywords',
      content: 'areté, infraestrutura, areté-infra, engenharia, saneamento, esgoto, pluviais, portifólio, ' +
        'estação elevatória, agua, Construção civil, obras públicas, urbanismo, hidráulica, tratamento de água, ' +
        'tratamento de esgoto, drenagem urbana, recursos hídricos, rede de abastecimento, eficiência hídrica, ' +
        'meio ambiente, sustentabilidade, projetos estruturais, infraestrutura urbana, engenharia ambiental, ' +
        'sistemas de bombeamento, reservatórios, tubulações, gestão de resíduos, qualidade da água, modernização urbana'
    });
  }
}
