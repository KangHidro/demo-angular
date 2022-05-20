import { Attribute, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent implements OnInit {

  @Input() firstName: string = '';

  lastName = '';

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.lastName = this.elementRef.nativeElement.getAttribute('last-name');
  }

}
