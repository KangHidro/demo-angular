import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

  @Input() data = '';
  @Output() returnData = new EventEmitter<string>();

  processData() {
    this.returnData.emit(this.data.toUpperCase());
    this.data = '';
  }

}


