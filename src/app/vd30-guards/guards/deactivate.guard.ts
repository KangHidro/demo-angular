import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  _component: CanComponentDeactivate,
  _currentRoute: ActivatedRouteSnapshot,
  _currentState: RouterStateSnapshot,
  _nextState: RouterStateSnapshot,
): Observable<boolean> | Promise<boolean> | boolean => {
  return _component.canDeactivate ? _component.canDeactivate() : of(true);
};

export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}
