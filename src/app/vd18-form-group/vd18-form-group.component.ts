import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vd18-form-group',
  templateUrl: './vd18-form-group.component.html',
  styleUrls: ['./vd18-form-group.component.scss']
})
export class Vd18FormGroupComponent implements OnInit {

  formLegacy!: FormGroup;
  formBuild!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormLegacy();
    this.createFormBuild();
  }

  createFormLegacy() {
    this.formLegacy = new FormGroup({
      yourName: new FormControl(''),
    });
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      yourName: [''],
    });
  }

  patchValue() {
    this.formBuild.patchValue({
      yourName: 'Kang Hidro',
    });
  }

  setValue() {
    this.formBuild.get('yourName')?.setValue('Angular');
  }

  resetForm() {
    this.formBuild.reset();
  }

  updateValueAndVidity() {
    this.formBuild.get('yourName')?.updateValueAndValidity();
  }

}
