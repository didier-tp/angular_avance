import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FinancialComponent } from './financial/financial.component';
import { CatFactComponent } from './catFact/catFact.component';
import { catFactResolver } from './common/resolver/cat-fact-resolver';
import { PersonComponent } from './person/person.component';

export const appRoutes: Route[] = [
    { path : "welcome" , component : WelcomeComponent},
    //{ path : "zip_currency" , component : ZiCurrencyComponent},
    // { path : "zip_currency" , loadComponent: () => import('./zipCurrency/zipCurrency.component').then(m => m.ZipCurrencyComponent) },
      { path : "zip_currency" , loadChildren: () => import('./zipCurrency/zipCurrency.routes').then(m => m.zipCurrencyRoutes) },
    { path : "catFact" , component : CatFactComponent , resolve : { catFact : catFactResolver}},
    { path : "financial" , component : FinancialComponent},
    { path : "person" , component : PersonComponent},
    { path : "" , redirectTo: "/welcome" , pathMatch : 'full'}
];
