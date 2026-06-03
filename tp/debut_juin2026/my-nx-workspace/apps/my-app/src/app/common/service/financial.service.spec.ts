import { TestBed } from '@angular/core/testing';

import { FinancialService } from './financial.service';

describe('FinancialService', () => {
  let service: FinancialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    console.log("FinancialService created");
  });

   test('pour amount=100000 , taux=2.5 , nbMonth=120 , mensualite = 943', () => {
      const mensualite = service.monthlyPaymentValue(120,100000,2.5);
      console.log("mensualite="+mensualite)
     expect(mensualite).toBeCloseTo(942.7,1)
  });

 
});

//ng test --include=**/financial.service.spec.ts
//nx test my-app --include=**/financial.service.spec.ts


