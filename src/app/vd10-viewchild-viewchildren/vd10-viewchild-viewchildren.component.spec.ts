import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd10ViewchildViewchildrenComponent } from './vd10-viewchild-viewchildren.component';

describe('Vd10ViewchildViewchildrenComponent', () => {
  let component: Vd10ViewchildViewchildrenComponent;
  let fixture: ComponentFixture<Vd10ViewchildViewchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd10ViewchildViewchildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd10ViewchildViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
