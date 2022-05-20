import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd02StringInterpolationComponent } from './vd02-string-interpolation.component';

describe('Vd02StringInterpolationComponent', () => {
  let component: Vd02StringInterpolationComponent;
  let fixture: ComponentFixture<Vd02StringInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd02StringInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd02StringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
