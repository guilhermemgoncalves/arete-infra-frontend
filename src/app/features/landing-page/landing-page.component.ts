import {Component, signal} from '@angular/core';
import {VideoPresentationComponent} from './sections/video-presentation/video-presentation.component';
import {CustomersComponent} from './sections/customers/customers.component';
import {UtilityCompaniesComponent} from './sections/utility-companies/utility-companies.component';
import {ServicesComponent} from './sections/services/services.component';
import {InstaGalleryComponent} from './sections/insta-gallery/insta-gallery.component';
import {Meta, Title} from '@angular/platform-browser';
import {InstagramImageDto} from '../../core/dtos/instagram-image.dto';
import {LandingPageService} from './landing-page.service';
import {LogoImageDto} from '../../core/dtos/log-image.dto';
import {HeaderComponent} from './sections/header/header.component';



@Component({
  selector: 'landing-page',
  imports: [
    VideoPresentationComponent,
    CustomersComponent,
    UtilityCompaniesComponent,
    ServicesComponent,
    InstaGalleryComponent,
    HeaderComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  instagramImages = signal<Array<InstagramImageDto>>([]);
  customersLogos = signal<Array<LogoImageDto>>([]);
  companyLogos = signal<Array<LogoImageDto>>([]);

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private landingPageService: LandingPageService
  ) {
    this.fetchInstagramImages();
    this.fetchCustomersLogos();
    this.fetchCompanyLogos();
    this.updateMetaTags();
  }


  private fetchInstagramImages(): void {
    this.landingPageService.getInstaGallery().then(images => {
      this.instagramImages.set(images);
    }).catch(error => {
      console.error('Erro ao carregar imagens:', error);
      this.instagramImages.set([]);
    });
  }

  private fetchCustomersLogos(): void {
    this.landingPageService.getCustomersLogos().then(logos => {
      this.customersLogos.set(logos);
    }).catch(error => {
      console.error('Erro ao carregar logos:', error);
      this.customersLogos.set([]);
    });
  }
  private fetchCompanyLogos(): void {
    this.landingPageService.getCompanyLogos().then(logos => {
      this.companyLogos.set(logos);
    }).catch(error => {
      console.error('Erro ao carregar logos:', error);
      this.companyLogos.set([]);
    });
  }


  private updateMetaTags() {
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
