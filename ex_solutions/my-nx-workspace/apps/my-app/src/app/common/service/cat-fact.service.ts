import { inject, Injectable } from '@angular/core';
import { CatFact } from '../data/catFact';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {

  private http = inject(HttpClient);

  public getCatFact$(): Observable<CatFact>{
    let url=`https://catfact.ninja/fact`;
    return this.http.get<CatFact>(url);
  }

  public getCatFactWithDelay$(msDelay : number): Observable<CatFact>{
    let url=`https://catfact.ninja/fact`;
    return this.http.get<CatFact>(url).pipe(
      delay(msDelay)
    );
  }
  
}
