import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Catfact } from '../data/catfact';

@Injectable({
  providedIn: 'root',
})
export class CatfactService {

  private http = inject(HttpClient);

  public getCatFactDataWithDelay$(nb_ms:number) : Observable<Catfact>{
    const wsURL="https://catfact.ninja/fact";
    return this.http.get<Catfact>(wsURL).pipe(
      delay(nb_ms)
    );
  }

   public getCatFactData$() : Observable<Catfact>{
    return this.getCatFactDataWithDelay$(0);
   }
  
}
