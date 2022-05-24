import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd16HandleHttpErrorComponent } from './vd16-handle-http-error.component';

describe('Vd16HandleHttpErrorComponent', () => {
  let component: Vd16HandleHttpErrorComponent;
  let fixture: ComponentFixture<Vd16HandleHttpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd16HandleHttpErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd16HandleHttpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
