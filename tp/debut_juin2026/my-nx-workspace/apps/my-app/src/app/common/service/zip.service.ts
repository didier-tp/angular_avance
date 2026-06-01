import { inject, Injectable } from '@angular/core';
import { ZippopotamResponse } from '../data/zippopotam';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GeoCoord } from '../data/geoCoord';

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

  public getGeoCoord$(zipCode:string): Observable<GeoCoord>{
    let url=`http://api.zippopotam.us/fr/${zipCode}`;
    return this.http.get<ZippopotamResponse>(url).pipe(
      map ((zr : ZippopotamResponse)=> new GeoCoord(zr.places[0].longitude , zr.places[0].latitude ))
    )
  }

  
}
