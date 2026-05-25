import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FinancialComponent } from './financial/financial.component';
import { CatFactComponent } from './catFact/catFact.component';
import { catFactResolver } from './common/resolver/cat-fact-resolver';
import { PersonComponent } from './person/person.component';

export const appRoutes: Route[] = [
    { path : "welcome" , component : WelcomeComponent},
    //{ path : "zip" , component : ZipComponent},
    // { path : "zip" , loadComponent: () => import('./zip/zip.component').then(m => m.ZipComponent) },
      { path : "zip" , loadChildren: () => import('./zip/zip.routes').then(m => m.zipRoutes) },
    { path : "catFact" , component : CatFactComponent , resolve : { catFact : catFactResolver}},
    { path : "financial" , component : FinancialComponent},
    { path : "person" , component : PersonComponent},
    { path : "" , redirectTo: "/welcome" , pathMatch : 'full'}
];
