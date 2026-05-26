import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, mergeMap, Observable, tap } from 'rxjs';
import { Currency, CurrencyMap, CurrencyOrder, FixerIoResponse } from '../data/currency';




@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  private http = inject(HttpClient);

  apiKey = "26ca93ee7fc19cbe0a423aaa27cab235";//ici avec apiKey de didier

  private ratesMapToCurrencyArray(ratesMap : CurrencyMap) : Currency[]{
       let currencies :Currency[]= [];
       for(let code in ratesMap){
          currencies.push(new Currency(code , ratesMap[code] ))
       }
       return currencies;
  }

  public getCurrentCurrencies$( order : CurrencyOrder = "byCode" , currencyCodeList : string []|null = null): Observable<Currency[]>{
     let  wsUrl = `http://data.fixer.io/api/latest?access_key=${this.apiKey}` 
    return this.http.get<FixerIoResponse>(wsUrl).pipe(
      tap( (response : FixerIoResponse) => { console.log("raw FixerIoResponse="+JSON.stringify(response))}),
      map( (response : FixerIoResponse) => this.ratesMapToCurrencyArray(response.rates)),
      map( (currencies) => currencyCodeList==null?currencies:currencies.filter(c=> currencyCodeList.includes(c.code))),
      map( (unorderedCurrencies ) => order=="byCode"?unorderedCurrencies.sort((c1,c2) => c1.code.localeCompare(c2.code)):unorderedCurrencies.sort((c1,c2) => c1.value -c2.value ))
    );
  }

  public getCurrentUSDChange$(): Observable<number>{
     let  wsUrl = `http://data.fixer.io/api/latest?access_key=${this.apiKey}` 
    return this.http.get<FixerIoResponse>(wsUrl).pipe(
      map( (response : FixerIoResponse) => response.rates['USD'])
    );
  }

  
  
}
