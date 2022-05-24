import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd23DomSanitizerComponent } from './vd23-dom-sanitizer.component';

describe('Vd23DomSanitizerComponent', () => {
  let component: Vd23DomSanitizerComponent;
  let fixture: ComponentFixture<Vd23DomSanitizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd23DomSanitizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd23DomSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
