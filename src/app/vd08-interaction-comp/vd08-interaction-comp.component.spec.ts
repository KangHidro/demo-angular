import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd08InteractionCompComponent } from './vd08-interaction-comp.component';

describe('Vd08InteractionCompComponent', () => {
  let component: Vd08InteractionCompComponent;
  let fixture: ComponentFixture<Vd08InteractionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd08InteractionCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd08InteractionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
