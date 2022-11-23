import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, UntypedFormArray, FormArray, FormControl } from '@angular/forms';
import { ICourseFormModel, ILessionFormModel } from './course.model';

@Component({
  selector: 'app-vd33-typed-form-array',
  templateUrl: './vd33-typed-form-array.component.html',
  styleUrls: ['./vd33-typed-form-array.component.scss']
})
export class Vd33TypedFormArrayComponent implements OnInit {

  form!: FormGroup<ICourseFormModel>;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.nonNullable.group({
      lessons: this.builder.nonNullable.array([])
    });
  }

  get lessons(): UntypedFormArray {
    return this.form.controls.lessons;
  }

  get lessonsControls(): FormGroup<ILessionFormModel>[] {
    return this.lessons.controls as FormGroup<ILessionFormModel>[];
  }

  addLesson() {
    const lessonForm = this.builder.nonNullable.group({
      title: [''],
      level: ['']
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  get valueOfLessions() {
    return this.lessons.controls.map(eachGroup => eachGroup.value);
  }

}
