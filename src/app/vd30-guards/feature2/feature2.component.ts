import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmLeaveService } from '../guards/confirm-leave.service';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements OnInit {

  constructor(private comfirmLeaveSvc: ConfirmLeaveService) { }

  ngOnInit(): void {
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.comfirmLeaveSvc.confirmLeave('Discard changes and leave?');
  }

}
