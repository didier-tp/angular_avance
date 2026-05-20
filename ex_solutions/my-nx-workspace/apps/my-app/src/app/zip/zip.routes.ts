import { Route } from '@angular/router';
import { ZipComponent } from './zip.component';
import { OneZipComponent } from './oneZip.component';
import { MultiZipComponent } from './multiZip.component';

export const zipRoutes: Route[] = [
    
{ path: "" ,
 /* providers: [
        provideXyzDomain(config)
    ], */
  component: ZipComponent , children:
        [
             { path: "oneZip" , component: OneZipComponent},
             { path: "multiZip" , component: MultiZipComponent},
             { path: "" , redirectTo : "oneZip" , pathMatch: "prefix"},
        ]
    },
];