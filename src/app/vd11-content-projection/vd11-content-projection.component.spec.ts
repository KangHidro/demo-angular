import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd11ContentProjectionComponent } from './vd11-content-projection.component';

describe('Vd11ContentProjectionComponent', () => {
  let component: Vd11ContentProjectionComponent;
  let fixture: ComponentFixture<Vd11ContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd11ContentProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd11ContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
