import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisComponent } from './avis.component';

describe('AvisComponent', () => {
  let component: AvisComponent;
  let fixture: ComponentFixture<AvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
