import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3AComponent } from './feature3-a.component';

describe('Feature3AComponent', () => {
  let component: Feature3AComponent;
  let fixture: ComponentFixture<Feature3AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Feature3AComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
