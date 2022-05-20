import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vd05-built-in-directives',
  templateUrl: './vd05-built-in-directives.component.html',
  styleUrls: ['./vd05-built-in-directives.component.scss']
})
export class Vd05BuiltInDirectivesComponent {

  canShow = true;

  listPage = ['A', 'B', 'C'];

  inputValue!: string;

  myContext = { $implicit: 'World', locakVie: 'Bạn' };

}
