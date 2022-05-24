import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private data = '';
  private dataStorage = new BehaviorSubject(this.data);

  startTracking(): Observable<string> {
    return this.dataStorage.asObservable();
  }

  emitData(data: string): void {
    this.data = data;
    this.dataStorage.next(this.data);
  }
}

