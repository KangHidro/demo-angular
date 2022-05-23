import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-vd10-viewchild-viewchildren',
  templateUrl: './vd10-viewchild-viewchildren.component.html',
  styleUrls: ['./vd10-viewchild-viewchildren.component.scss']
})
export class Vd10ViewchildViewchildrenComponent {

  @ViewChild('uploadfile') uploadfile!: ElementRef;
  @ViewChildren('lineTpl') lineTpl!: QueryList<ElementRef>;

  selectFile() {
    this.uploadfile?.nativeElement.click();
  }

  makeAllRed() {
    this.lineTpl?.forEach(e => e.nativeElement.style.color = 'red');

  }

  makeFirstBlue() {
    this.lineTpl.first.nativeElement.style.color = 'blue';
  }

}
