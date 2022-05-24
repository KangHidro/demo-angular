import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd19FormArrayComponent } from './vd19-form-array.component';

describe('Vd19FormArrayComponent', () => {
  let component: Vd19FormArrayComponent;
  let fixture: ComponentFixture<Vd19FormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd19FormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd19FormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
