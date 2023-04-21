import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vd34Service } from './vd34.service';

@Component({
  selector: 'app-vd34-unit-test',
  templateUrl: './vd34-unit-test.component.html',
  styleUrls: ['./vd34-unit-test.component.scss']
})
export class Vd34UnitTestComponent implements OnInit {

  noti = '';
  formBuild!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private vd34Svc: Vd34Service,
  ) { }

  ngOnInit(): void {
    this.createFormBuild();
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      name: ['', [Validators.required]],
      age: [0, [Validators.required]],
      color: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.formBuild.valid) {
      this.vd34Svc.createUser2(this.formBuild.value)
        .subscribe(() => {
          this.noti = `Tạo thành công!`;
          this.formBuild.reset();
        });
    } else {
      this.noti = `Có lỗi validate!`;
    }
  }

  isFieldError(fieldname: string): string {
    return (this.formBuild.get(fieldname)?.touched &&
      this.formBuild.get(fieldname)?.errors) ? 'field-error' : '';
  }

}
