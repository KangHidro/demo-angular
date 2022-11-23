import { FormControl } from "@angular/forms";

export interface IUserModel {
  username: string;
  password: string;
  fullname: string;
  age: number;
}

export interface IUserFormModel {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  fullname: FormControl<string | null>;
  age: FormControl<number | null>;
}
