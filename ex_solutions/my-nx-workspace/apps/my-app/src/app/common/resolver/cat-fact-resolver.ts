import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CatFact } from '../data/catFact';
import { CatFactService } from '../service/cat-fact.service';

export const catFactResolver : ResolveFn<CatFact>= 
( route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
    const catFactService = inject(CatFactService);
    console.log("via NewsResolver ...");
    return catFactService.getCatFactWithDelay$(2000);
}

/*
{ path : "catFact" , component : CatFactComponent , resolve : { cactFact : CatFactResolver}},
*/