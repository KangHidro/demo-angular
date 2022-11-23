import { FormArray, FormControl, FormGroup, UntypedFormArray } from "@angular/forms";

export interface ICourseFormModel {
  lessons: UntypedFormArray;
}

export interface ILessionFormModel {
  title: FormControl<string>;
  level: FormControl<string>;
}
