import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { customEmailValidator } from './email.validator';

@Component({
  selector: 'app-vd20-form-validator-ctm-vldtr',
  templateUrl: './vd20-form-validator-ctm-vldtr.component.html',
  styleUrls: ['./vd20-form-validator-ctm-vldtr.component.scss']
})
export class Vd20FormValidatorCtmVldtrComponent implements OnInit {

  formBuild!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormBuild();
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      yourName: ['', [Validators.required]],
      age: ['', [Validators.min(10)]],
      point: ['', [Validators.min(0), Validators.max(10), Validators.required]],
      email: ['', [customEmailValidator]],
    });
  }

  makeFieldRequired() {
    this.formBuild.get('yourName')?.setValidators([Validators.required]);
    this.formBuild.get('yourName')?.updateValueAndValidity();
  }

  makeFieldOptional() {
    this.formBuild.get('yourName')?.setValidators(null);
    this.formBuild.get('yourName')?.updateValueAndValidity();
  }

}
