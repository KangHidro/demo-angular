import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd18FormGroupComponent } from './vd18-form-group.component';

describe('Vd18FormGroupComponent', () => {
  let component: Vd18FormGroupComponent;
  let fixture: ComponentFixture<Vd18FormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd18FormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd18FormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
