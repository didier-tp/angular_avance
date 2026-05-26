import { Component, inject , ChangeDetectorRef} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-zip-currency',
  imports: [RouterLink , RouterOutlet],
  templateUrl: './zipCurrency.component.html',
  styleUrl: './zipCurrency.component.css',
})
export class ZipCurrencyComponent {
 

  constructor(){
    console.log("ZipCurrencyComponent (constructor)")
  }


}
