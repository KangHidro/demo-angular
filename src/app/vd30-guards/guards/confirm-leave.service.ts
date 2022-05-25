import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmLeaveService {

  constructor() { }

  confirmLeave(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message ?? 'Are you sure to leave?');
    return of(confirmation);
  };

  alert(message: string) {
    window.alert(message);
  }
}
