import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3BComponent } from './feature3-b.component';

describe('Feature3BComponent', () => {
  let component: Feature3BComponent;
  let fixture: ComponentFixture<Feature3BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feature3BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
