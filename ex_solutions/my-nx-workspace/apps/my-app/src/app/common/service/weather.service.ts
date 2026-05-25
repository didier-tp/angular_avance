import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { ZippopotamResponse } from '../data/Zippopotam';
import { Weather } from '../data/weather';
import { GeoCoord } from '../data/geoCoord';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private http = inject(HttpClient);

  public getWheatherFromGeoCoord$(geoCoord: GeoCoord): Observable<Weather>{
   let apiKey = "27a68278aebee75af9d4fc23d7a68f75";
    //let lat = 48.856614;//latitude (ici de Paris)
    //let lon = 2.3522219;//longitude (ici de Paris)
    let  wsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoCoord.lat}&lon=${geoCoord.lon}&appid=${apiKey}` 
    return this.http.get<Weather>(wsUrl);
  }

  
 public getWheatherFromZip$(zipCode:string): Observable<Weather>{
    let url=`http://api.zippopotam.us/fr/${zipCode}`;
    return this.http.get<ZippopotamResponse>(url).pipe(
      mergeMap ((zr : ZippopotamResponse)=> {
        let geoCoord = new GeoCoord(zr.places[0].longitude , zr.places[0].latitude );
        return this.getWheatherFromGeoCoord$(geoCoord);
      }));
    }
  
}
