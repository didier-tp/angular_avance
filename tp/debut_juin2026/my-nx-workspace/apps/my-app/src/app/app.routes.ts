import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ZipCurrencyComponent } from './zipCurrency/zipCurrency.component';
import { FinancialComponent } from './financial/financial.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CatfactComponent } from './catfact/catfact.component';
import { catfactResolver } from './common/resolver/catfact.resolver';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './notAuthorized/notAuthorized.component';
import { authGuard } from './common/guard/auth-guard';

export const appRoutes: Route[] = [
      { path: 'welcome',  component: WelcomeComponent },
       { path: 'dynamic',  component: DynamicComponent },
       { path: 'login',  component: LoginComponent },
       { path: 'notAuthorized',  component: NotAuthorizedComponent },
      //  { path: 'catfact',  component: CatfactComponent },
          { path: 'catfact',  component: CatfactComponent , resolve : {catfactData : catfactResolver } , canActivate : [authGuard] },

     //  { path: 'zip_currency',  component: ZipCurrencyComponent }, 
     { path: 'zip_currency',   loadChildren: () => import('./zipCurrency/zipCurrency.routes').then((m) => m.zipCurrencyRoutes) }, 
      { path: 'financial',  component: FinancialComponent }, 
      {  path: '',  redirectTo: '/welcome',  pathMatch: 'full'},
      { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
