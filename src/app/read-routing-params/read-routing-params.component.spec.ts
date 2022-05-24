import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRoutingParamsComponent } from './read-routing-params.component';

describe('ReadRoutingParamsComponent', () => {
  let component: ReadRoutingParamsComponent;
  let fixture: ComponentFixture<ReadRoutingParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadRoutingParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRoutingParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
