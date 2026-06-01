import { inject, Injectable } from '@angular/core';
import { ZippopotamResponse } from '../data/zippopotam';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ZipService {

  private http = inject(HttpClient);

  getZipppotamData$(zip:string): Observable<ZippopotamResponse>{
    const wsUrl=`http://api.zippopotam.us/fr/${zip}`;
    console.log(`wsUrl=${wsUrl}`);
    return this.http.get<ZippopotamResponse>(wsUrl);
  }

  
}
