import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd32TypedFormComponent } from './vd32-typed-form.component';

describe('Vd32TypedFormComponent', () => {
  let component: Vd32TypedFormComponent;
  let fixture: ComponentFixture<Vd32TypedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd32TypedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd32TypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
