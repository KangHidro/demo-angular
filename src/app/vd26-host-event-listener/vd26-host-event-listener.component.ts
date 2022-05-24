import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-vd26-host-event-listener',
  templateUrl: './vd26-host-event-listener.component.html',
  styleUrls: ['./vd26-host-event-listener.component.scss']
})
export class Vd26HostEventListenerComponent {

  cursorPositionX = 0;
  cursorPositionY = 0;

  @HostListener('click', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorPositionX = e.x;
    this.cursorPositionY = e.y;
  }

}
