import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd35DocumentationComponent } from './vd35-documentation.component';

describe('Vd35DocumentationComponent', () => {
  let component: Vd35DocumentationComponent;
  let fixture: ComponentFixture<Vd35DocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd35DocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd35DocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
