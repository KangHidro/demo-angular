import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd07InputOutputComponent } from './vd07-input-output.component';

describe('Vd07InputOutputComponent', () => {
  let component: Vd07InputOutputComponent;
  let fixture: ComponentFixture<Vd07InputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd07InputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd07InputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
