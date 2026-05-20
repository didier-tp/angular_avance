import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZippopotamResponse } from '../data/Zippopotam';

@Injectable({
  providedIn: 'root',
})
export class ZipService {

  private http = inject(HttpClient);

  public getZippopotamData$(zipCode:string): Observable<ZippopotamResponse>{
    let url=`http://api.zippopotam.us/fr/${zipCode}`;
    return this.http.get<ZippopotamResponse>(url);
  }
  
}
