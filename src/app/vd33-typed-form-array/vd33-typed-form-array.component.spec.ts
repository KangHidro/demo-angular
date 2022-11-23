import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd33TypedFormArrayComponent } from './vd33-typed-form-array.component';

describe('Vd33TypedFormArrayComponent', () => {
  let component: Vd33TypedFormArrayComponent;
  let fixture: ComponentFixture<Vd33TypedFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd33TypedFormArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd33TypedFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
