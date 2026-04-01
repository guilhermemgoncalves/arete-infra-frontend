import { Routes } from '@angular/router';

export const FormRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./template-generator/template-generator.component').then(
        (m) => m.TemplateGeneratorComponent
      ),
  },
];
