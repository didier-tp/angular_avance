import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneZipComponent } from './oneZip.component';

describe('OneZipComponent', () => {
  let component: OneZipComponent;
  let fixture: ComponentFixture<OneZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneZipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OneZipComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
