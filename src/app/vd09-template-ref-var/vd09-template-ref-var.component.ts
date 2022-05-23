import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vd09-template-ref-var',
  templateUrl: './vd09-template-ref-var.component.html',
  styleUrls: ['./vd09-template-ref-var.component.scss']
})
export class Vd09TemplateRefVarComponent {

  saveName(name: string) {
    // Task: save name ...
    alert('Saved name: ' + name);
  }

  log(name: string, value: any) {
    console.log(name, value);
  }

}
