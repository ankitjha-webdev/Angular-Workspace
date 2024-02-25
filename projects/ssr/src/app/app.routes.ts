import { Routes } from '@angular/router';
import { CsrOnlyGuard } from './guards/csr-only.guard';

export const routes: Routes = [
  // CSR(Portal) Routes
  {
    path: 'demo/:template/:name',
    loadComponent: () =>
      import('@csrcompoent/home/home.component').then(
        (mod) => mod.HomeComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@csrcompoent/showwork/showwork.component').then(
        (mod) => mod.ShowworkComponent
      ),
  },
  //   {
  //     path: 'map',
  //     loadComponent: () =>
  //       import('@csrcompoent/map/map.component').then(
  //         (mod) => mod.MapComponent
  //       ),
  //   },
  {
    path: 'map',
    loadComponent: () =>
      import('@csrcompoent/map/map.component').then((mod) => mod.MapComponent),
    canActivate: [CsrOnlyGuard], // Apply the guard here
  },
  // SSR Routes
  {
    path: 'templates',
    loadComponent: () =>
      import('./templates/templates.component').then(
        (mod) => mod.TemplatesComponent
      ),
  },
  {
    path: 'power',
    loadComponent: () =>
      import('./power/power.component').then((mod) => mod.PowerComponent),
  },
  {
    path: 'point',
    loadComponent: () =>
      import('./point/point.component').then((mod) => mod.PointComponent),
  },
];
