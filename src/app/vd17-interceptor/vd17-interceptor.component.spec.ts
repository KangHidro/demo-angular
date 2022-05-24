import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd17InterceptorComponent } from './vd17-interceptor.component';

describe('Vd17InterceptorComponent', () => {
  let component: Vd17InterceptorComponent;
  let fixture: ComponentFixture<Vd17InterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd17InterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd17InterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
