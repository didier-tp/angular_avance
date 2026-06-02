import { Route } from "@angular/router";
import { CurrencyComponent } from "./currency/currency.component";
import { ZipComponent } from "./zip/zip.component";
import { ZipCurrencyComponent } from "./zipCurrency.component";

export const zipCurrencyRoutes: Route[] = [
    
{ path: "" ,
 /* providers: [
        provideXyzDomain(config)
    ], */
  component: ZipCurrencyComponent , children:
        [
             { path: "zip" , component: ZipComponent},
             { path: "currency" , component: CurrencyComponent},
             { path: "" , redirectTo : "zip" , pathMatch: "prefix"},
        ]
    },
];