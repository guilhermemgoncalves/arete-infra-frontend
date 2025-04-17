import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'stage',
    loadComponent: () =>
      import('./features/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
  {
    path: 'internal',
    loadComponent: () =>
      import('./features/internal/internal.component').then(
        (m) => m.InternalComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/components/coming-soon/coming-soon.component').then(
        (m) => m.ComingSoonComponent
      ),
  },
];
