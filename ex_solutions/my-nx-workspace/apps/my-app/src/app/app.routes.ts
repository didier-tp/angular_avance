import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FinancialComponent } from './financial/financial.component';

export const appRoutes: Route[] = [
    { path : "welcome" , component : WelcomeComponent},
    //{ path : "zip" , component : ZipComponent},
    // { path : "zip" , loadComponent: () => import('./zip/zip.component').then(m => m.ZipComponent) },
      { path : "zip" , loadChildren: () => import('./zip/zip.routes').then(m => m.zipRoutes) },
    { path : "financial" , component : FinancialComponent},
    { path : "" , redirectTo: "/welcome" , pathMatch : 'full'}
];
