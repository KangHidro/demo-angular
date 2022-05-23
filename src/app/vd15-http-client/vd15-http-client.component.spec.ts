import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd15HttpClientComponent } from './vd15-http-client.component';

describe('Vd15HttpClientComponent', () => {
  let component: Vd15HttpClientComponent;
  let fixture: ComponentFixture<Vd15HttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vd15HttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd15HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
