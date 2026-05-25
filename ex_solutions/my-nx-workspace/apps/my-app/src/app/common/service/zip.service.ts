import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ZippopotamResponse } from '../data/Zippopotam';
import { GeoCoord } from '../data/geoCoord';

@Injectable({
  providedIn: 'root',
})
export class ZipService {

  private http = inject(HttpClient);

  public getZippopotamData$(zipCode:string): Observable<ZippopotamResponse>{
    let url=`http://api.zippopotam.us/fr/${zipCode}`;
    return this.http.get<ZippopotamResponse>(url);
  }

 public getGeoCoord$(zipCode:string): Observable<GeoCoord>{
    let url=`http://api.zippopotam.us/fr/${zipCode}`;
    return this.http.get<ZippopotamResponse>(url).pipe(
      map ((zr : ZippopotamResponse)=> new GeoCoord(zr.places[0].longitude , zr.places[0].latitude ))
    )
  }
  
}
