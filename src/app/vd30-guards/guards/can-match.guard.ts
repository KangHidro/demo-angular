import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { of } from 'rxjs';
import { ConfirmLeaveService } from './confirm-leave.service';

export const canMatchGuard: CanMatchFn = (_route: Route, _segments: UrlSegment[]) => {
  const confirmSvc = inject(ConfirmLeaveService);
  const role = _route.data?.role;

  if (localStorage.getItem('role') === role) {
    return of(true);
  }
  return of(false);

};
