import { Routes } from '@angular/router';
import { routes as remoteRoutes } from './remote-entry/entry.routes';

export const routes: Routes = [
  {
    path: '',
    children: remoteRoutes
  }
];
