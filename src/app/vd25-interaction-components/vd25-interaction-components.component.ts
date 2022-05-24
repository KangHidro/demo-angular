import { Component } from '@angular/core';
import { DataStorageService } from './data-storage.service';

@Component({
  selector: 'app-vd25-interaction-components',
  templateUrl: './vd25-interaction-components.component.html',
  styleUrls: ['./vd25-interaction-components.component.scss']
})
export class Vd25InteractionComponentsComponent {

  constructor(private storageSvc: DataStorageService) { }

  sendData(value: string) {
    this.storageSvc.emitData(value);
  }

}

