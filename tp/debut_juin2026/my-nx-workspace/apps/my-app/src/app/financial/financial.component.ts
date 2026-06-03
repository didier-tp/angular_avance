import { Component, computed, effect, inject, signal } from '@angular/core';
import { FinancialService } from '../common/service/financial.service';
import { FormsModule } from '@angular/forms';
import { TogglePanelComponent } from '@my-nx-workspace/my-lib';
import { DecimalPipe } from '@angular/common';

class Loan {
  constructor(public amount:number=0,
              public nbMonth:number=0,
               public annualRate:number=0){}
}


@Component({
  selector: 'app-financial',
  imports: [FormsModule,TogglePanelComponent,DecimalPipe],
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.css',
})
export class FinancialComponent {
  financialService = inject(FinancialService);

  //loanOpenState = signal(false);
  loanOpenState = signal(true);
 
  nbMonth=signal(120);
  amount=signal<number>(100000);
  annualRate=signal<number>(2.5);

  loan = new Loan(this.amount() , this.nbMonth(), this.annualRate());
  sLoan = signal<Loan>(this.loan);

  logEffectAmount = effect(()=>{
    console.log("nouvelle valeur de amount=" + this.amount())
    this.loan.amount=this.amount();
    //this.sLoan.set(this.loan); //ne fonctionne pas  au sens signal sLoan considéré comme inchangé et pas de réactualisation
    this.sLoan.set(new Loan(this.amount(),this.nbMonth(), this.annualRate()))
  })

  logLoanAmount = effect(()=>{console.log("nouvelle valeur de loan=" + JSON.stringify(this.sLoan()))})

  monthlyPayment=computed(()=>this.financialService.monthlyPaymentValue(this.nbMonth(),this.amount(),this.annualRate()));


  /*
  onComputeMonthlyPayment(){
    this.monthlyPayment = this.financialService.monthlyPaymentValue(this.nbMonth(),this.amount(),this.annualRate());
  }*/

}
