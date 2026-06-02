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
import { firstValueFrom, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-zip-currency',
  imports: [FormsModule,JsonPipe,RouterLink,RouterOutlet],
  templateUrl: './zipCurrency.component.html',
  styleUrl: './zipCurrency.component.css',
})
export class ZipCurrencyComponent {
 
  //private changeDetectorRef = inject(ChangeDetectorRef);

  

  

}
