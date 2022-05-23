import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vd08-interaction-comp',
  templateUrl: './vd08-interaction-comp.component.html',
  styleUrls: ['./vd08-interaction-comp.component.scss']
})
export class Vd08InteractionCompComponent {

  inputData = '';
  listData: string[] = [];

  saveData(data: string) {
    if (data) {
      this.listData.push(data);
      this.inputData = '';
    }
  }

}
