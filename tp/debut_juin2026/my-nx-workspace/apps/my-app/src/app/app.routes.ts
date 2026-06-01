import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Route[] = [
      { path: 'welcome',  component: WelcomeComponent }, 
      {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
      { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
