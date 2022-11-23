import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScComponent } from './list-sc.component';

describe('ListScComponent', () => {
  let component: ListScComponent;
  let fixture: ComponentFixture<ListScComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListScComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
