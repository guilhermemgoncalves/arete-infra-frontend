import { Routes } from '@angular/router';
import {LandingPageComponent} from './features/landing-page/landing-page.component';
import {ComingSoonComponent} from './core/components/coming-soon/coming-soon.component';

export const routes: Routes = [
  // {path: '', component: LandingPageComponent}
  {path: '', component: ComingSoonComponent}
];
