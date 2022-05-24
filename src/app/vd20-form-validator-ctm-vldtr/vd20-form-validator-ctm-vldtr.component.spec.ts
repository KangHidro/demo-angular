import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd20FormValidatorCtmVldtrComponent } from './vd20-form-validator-ctm-vldtr.component';

describe('Vd20FormValidatorCtmVldtrComponent', () => {
  let component: Vd20FormValidatorCtmVldtrComponent;
  let fixture: ComponentFixture<Vd20FormValidatorCtmVldtrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd20FormValidatorCtmVldtrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd20FormValidatorCtmVldtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
