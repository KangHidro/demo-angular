import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MakeForm } from './make-form.model';
import { IUserFormModel, IUserModel } from './user.model';

@Component({
  selector: 'app-vd32-typed-form',
  templateUrl: './vd32-typed-form.component.html',
  styleUrls: ['./vd32-typed-form.component.scss']
})
export class Vd32TypedFormComponent implements OnInit {

  form!: FormGroup<IUserFormModel>;
  formNonNull!: FormGroup<MakeForm<IUserModel>>;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormBuild();
  }

  createFormBuild() {
    this.form = this.builder.group({
      username: [''],
      password: [''],
      fullname: [''],
      age: [0]
    });

    this.formNonNull = this.builder.nonNullable.group({
      username: [''],
      password: [''],
      fullname: [''],
      age: [0]
    });
  }

  resetForm() {
    this.form.reset();
  }

  resetFormNonNull() {
    this.formNonNull.reset();
  }

}
