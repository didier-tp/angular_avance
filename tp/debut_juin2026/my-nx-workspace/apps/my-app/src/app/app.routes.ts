import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ZipCurrencyComponent } from './zipCurrency/zipCurrency.component';

export const appRoutes: Route[] = [
      { path: 'welcome',  component: WelcomeComponent },
       { path: 'zip_cuurency',  component: ZipCurrencyComponent }, 
      {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
      { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
