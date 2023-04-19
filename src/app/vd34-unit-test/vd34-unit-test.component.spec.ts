import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd34UnitTestComponent } from './vd34-unit-test.component';

describe('Vd34UnitTestComponent', () => {
  let component: Vd34UnitTestComponent;
  let fixture: ComponentFixture<Vd34UnitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd34UnitTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd34UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
