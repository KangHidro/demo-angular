import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone-form',
  templateUrl: './standalone-form.component.html',
  styleUrls: ['./standalone-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class StandaloneFormComponent implements OnInit {

  formBuild!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormBuild();
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
