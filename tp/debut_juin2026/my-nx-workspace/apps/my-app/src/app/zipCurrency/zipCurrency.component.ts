import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ZipService } from '../common/service/zip.service';
import { ZippopotamResponse } from '../common/data/zippopotam';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CurrencyOrder, Currency } from '../common/data/currency';
import { CurrencyService } from '../common/service/currency.service';
import { GeoCoord } from '../common/data/geoCoord';
import { Weather } from '../common/data/weather';
import { WeatherService } from '../common/service/weather.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-zip-currency',
  imports: [FormsModule,JsonPipe],
  templateUrl: './zipCurrency.component.html',
  styleUrl: './zipCurrency.component.css',
})
export class ZipCurrencyComponent {
 
  private changeDetectorRef = inject(ChangeDetectorRef);

  //************* partie zip ***************/

   private zipService=inject(ZipService);
  zip : string = "75001";
  zippopotamData : ZippopotamResponse | null=null;

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

  //******** partie currency ************* /

  curencyService = inject(CurrencyService);
   currencyOrder : CurrencyOrder = "byCode"; //or "byValue"
  // currencies : Currency[] = []; //v1 sans signal
  sCurrencies = signal<Currency[]>([]);
   filteringCurrencyCodeString = "EUR,USD,GBP,JPY,CNY,DKK,KRW";

   onRetreiveCurrencies(){
    let filteringCurrencyCodeList : string[]|null = null;
    if(this.filteringCurrencyCodeString.trim().length > 0)
      filteringCurrencyCodeList = this.filteringCurrencyCodeString.split(",");
    this.curencyService.getCurrentCurrencies$(this.currencyOrder, filteringCurrencyCodeList).subscribe({
      next: (currencies : Currency[])=>{/*this.currencies = currencies ; */
        this.sCurrencies.set(currencies);
        /* this.changeDetectorRef.markForCheck(); inutile si  avec signal */ },
      error: (err )=>{console.log("erreur:" + JSON.stringify(err)) ; this.changeDetectorRef.markForCheck();}
    });
   }

}
