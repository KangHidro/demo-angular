import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Vd34UnitTestComponent } from './vd34-unit-test.component';
import { Vd34Service } from './vd34.service';

describe('Vd34UnitTestComponent', () => {
  let component: Vd34UnitTestComponent;
  let fixture: ComponentFixture<Vd34UnitTestComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    // Create a fake Vd34Service object with a `createUser2()` spy
    const vd34Service = jasmine.createSpyObj('Vd34Service', ['createUser2']);
    // Make the spy return a synchronous Observable with the test data
    vd34Service.createUser2.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [Vd34UnitTestComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [
        { provide: Vd34Service, useValue: vd34Service },
        // { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Vd34UnitTestComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('Check view of "Name input"', () => {
    const formControl = component.formBuild.get('name');
    console.log('Init class: ', compiled.querySelector('input#name')?.getAttribute('class'));
    formControl?.markAsTouched();
    compiled.querySelector('input#name')?.dispatchEvent(new Event('input'));
    // No need to call fixture.detectChanges();
    console.log('New class: ', compiled.querySelector('input#name')?.getAttribute('class'));
    expect(compiled.querySelector('input#name')?.getAttribute('class')).toContain('field-error');
  });*/

  // Same for Check <input> age/color validator view
  it('Check <input> name validator view', () => {
    const formControl = component.formBuild.get('name');
    expect(formControl?.value)
      .withContext('Init form control with empty string')
      .toEqual('');

    expect(compiled.querySelector('input#name'))
      .withContext('Init form control dont have "field-error" class')
      .not.toHaveClass('field-error');

    // Make form control touched & detectChanges
    formControl?.markAsTouched();
    fixture.detectChanges();

    expect(compiled.querySelector('input#name'))
      .withContext('Touched form control with no value have "field-error" class')
      .toHaveClass('field-error');

    // Set value for form control & detectChanges
    formControl?.setValue('Demo');
    fixture.detectChanges();

    expect(formControl?.value)
      .withContext('Set value "Demo" to form control')
      .toEqual('Demo');

    expect(compiled.querySelector('input#name'))
      .withContext('Form control with a value dont have "field-error" class')
      .not.toHaveClass('field-error');
  });

  it('Show validator notification if FormGroup invalid', () => {
    const formGroup = component.formBuild;
    expect(formGroup?.value)
      .withContext('Init form group with default value')
      .toEqual({ name: '', age: 0, color: '' });

    expect(compiled.querySelector('h3')?.textContent)
      .withContext('No notification are showing')
      .toEqual('');

    // Submit form without enter any value & detectChanges
    component.onSubmit();
    fixture.detectChanges();

    expect(compiled.querySelector('h3')?.textContent)
      .withContext('Showing error notification')
      .toEqual('Có lỗi validate!');

    // Fill value to form group and submit, then detectChanges
    formGroup.patchValue({ name: 'Demo', age: 10, color: 'red' });
    component.onSubmit();

    fixture.detectChanges();

    expect(compiled.querySelector('h3')?.textContent)
      .withContext('Showing success notification')
      .toEqual('Tạo thành công!');
  });

});
