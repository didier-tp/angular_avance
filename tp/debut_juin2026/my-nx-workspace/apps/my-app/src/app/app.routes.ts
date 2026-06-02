import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ZipCurrencyComponent } from './zipCurrency/zipCurrency.component';
import { FinancialComponent } from './financial/financial.component';

export const appRoutes: Route[] = [
      { path: 'welcome',  component: WelcomeComponent },
     //  { path: 'zip_currency',  component: ZipCurrencyComponent }, 
     { path: 'zip_currency',   loadChildren: () => import('./zipCurrency/zipCurrency.routes').then((m) => m.zipCurrencyRoutes) }, 
      { path: 'financial',  component: FinancialComponent }, 
      {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
      { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
