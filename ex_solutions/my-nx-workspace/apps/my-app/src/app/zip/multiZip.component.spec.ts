import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiZipComponent } from './multiZip.component';

describe('MultiZipComponent', () => {
  let component: MultiZipComponent;
  let fixture: ComponentFixture<MultiZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiZipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultiZipComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
