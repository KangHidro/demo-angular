import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd04BindingComponent } from './vd04-binding.component';

describe('Vd04BindingComponent', () => {
  let component: Vd04BindingComponent;
  let fixture: ComponentFixture<Vd04BindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd04BindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd04BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
