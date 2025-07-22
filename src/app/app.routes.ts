import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
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
    path: 'login',
    loadComponent: () =>
      import('./core/components/coming-soon/coming-soon.component').then(
        (m) => m.ComingSoonComponent
      ),
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./features/contacts-screen/contacts-screen.component').then(
        (m) => m.ContactsScreenComponent
      ),
  },
];
