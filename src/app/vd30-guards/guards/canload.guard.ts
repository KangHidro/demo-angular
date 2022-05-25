import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmLeaveService } from './confirm-leave.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(private confirmSvc: ConfirmLeaveService) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('route', route);
    console.log('segments', segments);
    if (localStorage.getItem('login')) {
      return of(true);
    }
    this.confirmSvc.alert('Unauthorized Load!!!');
    return of(false);
  }
}
