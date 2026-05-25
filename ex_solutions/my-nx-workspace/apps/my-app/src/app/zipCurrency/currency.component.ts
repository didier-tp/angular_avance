import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CurrencyService } from '../common/service/currency.service';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency',
  imports: [FormsModule , JsonPipe],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
   curencyService = inject(CurrencyService);
    changeDetector = inject(ChangeDetectorRef);
   data : any = "";

   onRetreiveCurrencies(){
    // this.curencyService.getCurrentCurrencies$().subscribe({
    const filteringCurrencyCodeList = [ "EUR" , "USD"];
    this.curencyService.getCurrentCurrencies$("byValue" , filteringCurrencyCodeList).subscribe({
      next: (data : any)=>{this.data = data ; this.changeDetector.markForCheck();},
      error: (err )=>{console.log("erreur:" + JSON.stringify(err)) ; this.changeDetector.markForCheck();}
    });
   }

}
