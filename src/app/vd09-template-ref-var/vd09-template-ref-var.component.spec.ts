import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd09TemplateRefVarComponent } from './vd09-template-ref-var.component';

describe('Vd09TemplateRefVarComponent', () => {
  let component: Vd09TemplateRefVarComponent;
  let fixture: ComponentFixture<Vd09TemplateRefVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd09TemplateRefVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd09TemplateRefVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
