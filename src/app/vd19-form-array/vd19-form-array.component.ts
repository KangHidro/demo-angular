import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vd19-form-array',
  templateUrl: './vd19-form-array.component.html',
  styleUrls: ['./vd19-form-array.component.scss']
})
export class Vd19FormArrayComponent implements OnInit {

  form!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      lessons: this.builder.array([])
    });
  }

  get lessons() {
    return this.form.controls['lessons'] as FormArray;
  }

  get lessonsControls(): FormGroup[] {
    return this.lessons.controls as FormGroup[];
  }

  addLesson() {
    const lessonForm = this.builder.group({
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
