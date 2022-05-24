import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd26HostEventListenerComponent } from './vd26-host-event-listener.component';

describe('Vd26HostEventListenerComponent', () => {
  let component: Vd26HostEventListenerComponent;
  let fixture: ComponentFixture<Vd26HostEventListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd26HostEventListenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd26HostEventListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
