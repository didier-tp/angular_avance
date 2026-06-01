import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZipCurrencyComponent } from './zipCurrency.component';

describe('ZipCurrencyComponent', () => {
  let component: ZipCurrencyComponent;
  let fixture: ComponentFixture<ZipCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipCurrencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZipCurrencyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
