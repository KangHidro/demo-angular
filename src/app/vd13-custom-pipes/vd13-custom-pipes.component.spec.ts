import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd13CustomPipesComponent } from './vd13-custom-pipes.component';

describe('Vd13CustomPipesComponent', () => {
  let component: Vd13CustomPipesComponent;
  let fixture: ComponentFixture<Vd13CustomPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd13CustomPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd13CustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
