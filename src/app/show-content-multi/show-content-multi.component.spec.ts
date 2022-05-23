import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContentMultiComponent } from './show-content-multi.component';

describe('ShowContentMultiComponent', () => {
  let component: ShowContentMultiComponent;
  let fixture: ComponentFixture<ShowContentMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContentMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContentMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
