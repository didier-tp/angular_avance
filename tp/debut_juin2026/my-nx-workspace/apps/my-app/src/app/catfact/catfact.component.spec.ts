import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatfactComponent } from './catfact.component';

describe('CatfactComponent', () => {
  let component: CatfactComponent;
  let fixture: ComponentFixture<CatfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatfactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatfactComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
