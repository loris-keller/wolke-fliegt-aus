import { Routes } from '@angular/router';
import { Packliste } from './containers/packliste/packliste';
import { Startpunkt } from './containers/startpunkt/startpunkt';

export const routes: Routes = [
  { path: 'packliste', component: Packliste },
  { path: 'startpunkt', component: Startpunkt },
];
