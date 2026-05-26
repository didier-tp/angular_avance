import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CurrencyService } from '../common/service/currency.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Currency, CurrencyOrder } from '../common/data/currency';

@Component({
  selector: 'app-currency',
  imports: [FormsModule , JsonPipe],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
   curencyService = inject(CurrencyService);
   changeDetector = inject(ChangeDetectorRef);
   currencyOrder : CurrencyOrder = "byCode"; //or "byValue"
   currencies : Currency[] = [];
   filteringCurrencyCodeString = "EUR,USD,GBP,JPY,CNY,DKK,KRW";

   onRetreiveCurrencies(){
    let filteringCurrencyCodeList : string[]|null = null;
    if(this.filteringCurrencyCodeString.trim().length > 0)
      filteringCurrencyCodeList = this.filteringCurrencyCodeString.split(",");
    this.curencyService.getCurrentCurrencies$(this.currencyOrder, filteringCurrencyCodeList).subscribe({
      next: (currencies : Currency[])=>{this.currencies = currencies ; this.changeDetector.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err)) ; this.changeDetector.markForCheck();}
    });
   }

}
