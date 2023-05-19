import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { ConfirmLeaveService } from './confirm-leave.service';

export const canActiveChildGuard: CanActivateChildFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
  const confirmSvc = inject(ConfirmLeaveService);

  if (localStorage.getItem('login')) {
    return of(true);
  }
  confirmSvc.alert('Unauthorized!!!');
  return of(false);

};
