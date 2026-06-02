import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GeoCoord } from '../../common/data/geoCoord';
import { Weather } from '../../common/data/weather';
import { ZippopotamResponse } from '../../common/data/zippopotam';
import { WeatherService } from '../../common/service/weather.service';
import { ZipService } from '../../common/service/zip.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zip',
  imports: [FormsModule,JsonPipe],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.css',
})
export class ZipComponent {
  private changeDetectorRef = inject(ChangeDetectorRef);
  //************* partie zip ***************/

   private zipService=inject(ZipService);
  zip : string = "75001";
  zippopotamData : ZippopotamResponse | null=null;

  /*
  zippopotamDataParis$ : Observable<ZippopotamResponse>=this.zipService.getZipppotamData$("75001");
  sZippopotamDataParis = toSignal(this.zippopotamDataParis$);
  */

  onGetZippotpotamData(){
      this.zipService.getZipppotamData$(this.zip).subscribe({
        next:(data)=>{this.zippopotamData=data; this.changeDetectorRef.markForCheck();},
        error:(err)=>{console.log(err);}
      })

      this.onGeoCoordAndwheather();
      this.onGeoCoordAndwheatherViaAsyncAwait();
  }

  /******** partie geoCoord & wheater ******/

  geoCoord! : GeoCoord;
  weather! : Weather;

    weatherService = inject(WeatherService);

  onGeoCoordAndwheather(){
    this.zipService.getGeoCoord$(this.zip).subscribe({
      next: (geoCoord : GeoCoord)=>{this.geoCoord=geoCoord; 
             console.log("geoCoord="+ JSON.stringify(geoCoord));
             this.changeDetectorRef.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err) + " -- " + err) ; this.changeDetectorRef.markForCheck();}
    });

    /*
    let geoCoordParis = new GeoCoord("2.3522219","48.856614");
     this.weatherService.getWheatherFromGeoCoord$(geoCoordParis).subscribe({
      next: (weather : Weather)=>{ this.weather = weather; console.log("weather_paris="+ JSON.stringify(weather)); this.changeDetectorRef.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err) + " -- " + err) ; this.changeDetectorRef.markForCheck();}
    });*/

      this.weatherService.getWheatherFromZip$(this.zip).subscribe({
      next: (weather : Weather)=>{console.log("weather_from_zip="+ JSON.stringify(weather)); this.weather = weather;this.changeDetectorRef.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err) + " -- " + err) ; this.changeDetectorRef.markForCheck();}
    });
  }

  weatherViaAsyncAwait! : Weather;

  async onGeoCoordAndwheatherViaAsyncAwait(){
    try{
          const  localGeoCoord = await firstValueFrom(this.zipService.getGeoCoord$(this.zip));
          console.log("1)localGeoCoord="+JSON.stringify(localGeoCoord));
          this.weatherViaAsyncAwait=await firstValueFrom(this.weatherService.getWheatherFromGeoCoord$(localGeoCoord));
          console.log("1)weatherViaAsyncAwait="+JSON.stringify(this.weatherViaAsyncAwait));
          this.changeDetectorRef.markForCheck();
    }catch(ex){
      console.log(ex);
    }
  }
}
