import { Routes } from '@angular/router';
import {ComingSoonComponent} from './core/components/coming-soon/coming-soon.component';
import {LandingPageComponent} from './features/landing-page/landing-page.component';

export const routes: Routes = [
  {path: 'stage', component: LandingPageComponent},
  {path: '', component: ComingSoonComponent}
];

