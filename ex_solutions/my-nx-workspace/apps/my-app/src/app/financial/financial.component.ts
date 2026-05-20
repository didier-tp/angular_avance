import { Component, computed, inject, signal } from '@angular/core';
import { FinancialService } from '../common/service/financial.service';
import { FormsModule } from '@angular/forms';
import {TogglePanelComponent} from '@my-nx-workspace/my-lib';

@Component({
  selector: 'app-financial',
  imports: [FormsModule,TogglePanelComponent],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.css',
})
export class FinancialComponent {
  financialService = inject(FinancialService);
  nbMonth=signal<number>(120);
  amount=signal<number>(100000);
  annualRate=signal<number>(2.5);

  monthlyPayment=computed(()=>this.financialService.monthlyPaymentValue(this.nbMonth(),this.amount(),this.annualRate()));

  loanPanelOpen = true; //by default

  /*
  onComputeMonthlyPayment(){
    this.monthlyPayment = this.financialService.monthlyPaymentValue(this.nbMonth(),this.amount(),this.annualRate());
  }*/

}
