import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CurrencyOrder, Currency } from '../../common/data/currency';
import { CurrencyService } from '../../common/service/currency.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency',
  imports: [FormsModule,JsonPipe],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
  private changeDetectorRef = inject(ChangeDetectorRef);

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
