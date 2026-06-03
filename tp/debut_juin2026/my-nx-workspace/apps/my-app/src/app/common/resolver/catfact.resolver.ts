import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CatfactService } from '../service/catfact.service';
import { inject } from '@angular/core';
import { Catfact } from '../data/catfact';

export const catfactResolver : ResolveFn< Catfact > = 
( route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
    const catfactService = inject(CatfactService);
    console.log("via catfactResolver ...");
    return catfactService.getCatFactDataWithDelay$(2000);
}