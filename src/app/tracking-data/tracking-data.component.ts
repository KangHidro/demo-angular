import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../vd25-interaction-components/data-storage.service';

@Component({
  selector: 'app-tracking-data',
  templateUrl: './tracking-data.component.html',
  styleUrls: ['./tracking-data.component.scss']
})
export class TrackingDataComponent implements OnInit {

  recievedData = '';

  constructor(private storageSvc: DataStorageService) { }

  ngOnInit(): void {
    this.storageSvc.startTracking()
      .subscribe(data => this.recievedData = data);
  }

}

