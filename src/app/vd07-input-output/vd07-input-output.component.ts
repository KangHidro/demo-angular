import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vd07-input-output',
  templateUrl: './vd07-input-output.component.html',
  styleUrls: ['./vd07-input-output.component.scss']
})
export class Vd07InputOutputComponent {

  currentItem = 'Television';

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
