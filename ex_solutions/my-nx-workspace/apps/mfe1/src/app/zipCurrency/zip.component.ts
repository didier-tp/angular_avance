import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ZippopotamResponse } from '../common/data/Zippopotam';
import { ZipService } from '../common/service/zip.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeoCoord } from '../common/data/geoCoord';
import { WeatherService } from '../common/service/weather.service';
import { Weather } from '../common/data/weather';

@Component({
  selector: 'app-zip',
  imports: [FormsModule , JsonPipe],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.css',
})
export class ZipComponent {
   zipService = inject(ZipService);
   weatherService = inject(WeatherService);

  changeDetector = inject(ChangeDetectorRef);
  zip:string = "75001";
  zippopotamData! : ZippopotamResponse ;
  geoCoord! : GeoCoord;
  weather! : Weather;

  onZipData(){
    this.zipService.getZippopotamData$(this.zip).subscribe({
      next: (zipResp : ZippopotamResponse)=>{this.zippopotamData = zipResp ; this.changeDetector.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err)) ; this.changeDetector.markForCheck();}
    });

     this.zipService.getGeoCoord$(this.zip).subscribe({
      next: (geoCoord : GeoCoord)=>{this.geoCoord=geoCoord; 
             console.log("geoCoord="+ JSON.stringify(geoCoord));
             this.changeDetector.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err) + " -- " + err) ; this.changeDetector.markForCheck();}
    });

    let geoCoordParis = new GeoCoord("2.3522219","48.856614");
     this.weatherService.getWheatherFromGeoCoord$(geoCoordParis).subscribe({
      next: (weather : Weather)=>{ this.weather = weather; console.log("weather_paris="+ JSON.stringify(weather)); this.changeDetector.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err) + " -- " + err) ; this.changeDetector.markForCheck();}
    });

      this.weatherService.getWheatherFromZip$(this.zip).subscribe({
      next: (weather : Weather)=>{console.log("weather_from_zip="+ JSON.stringify(weather)); this.changeDetector.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err) + " -- " + err) ; this.changeDetector.markForCheck();}
    });
  }

  constructor(){
    console.log("ZipComponent (constructor)")
  }
}
