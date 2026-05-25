import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatFactComponent } from './catFact.component';

describe('CatFactComponent', () => {
  let component: CatFactComponent;
  let fixture: ComponentFixture<CatFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatFactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatFactComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
