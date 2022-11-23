import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneFormComponent } from './standalone-form.component';

describe('StandaloneFormComponent', () => {
  let component: StandaloneFormComponent;
  let fixture: ComponentFixture<StandaloneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
