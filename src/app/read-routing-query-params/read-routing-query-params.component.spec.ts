import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRoutingQueryParamsComponent } from './read-routing-query-params.component';

describe('ReadRoutingQueryParamsComponent', () => {
  let component: ReadRoutingQueryParamsComponent;
  let fixture: ComponentFixture<ReadRoutingQueryParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRoutingQueryParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRoutingQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
