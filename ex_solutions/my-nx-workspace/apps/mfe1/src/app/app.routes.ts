import { Route } from '@angular/router';

export const appRoutes: Route[] = [
     { path : "zip_currency" , loadChildren: () => import('./zipCurrency/zipCurrency.routes').then(m => m.zipCurrencyRoutes) },
    { path : "" , redirectTo: "/zip_currency" , pathMatch : 'full'}
];
