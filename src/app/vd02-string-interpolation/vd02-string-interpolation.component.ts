import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vd02-string-interpolation',
  templateUrl: './vd02-string-interpolation.component.html',
  styleUrls: ['./vd02-string-interpolation.component.scss']
})
export class Vd02StringInterpolationComponent {

  myName = '';

  getNum(): number {
    return 1;
  }

}
