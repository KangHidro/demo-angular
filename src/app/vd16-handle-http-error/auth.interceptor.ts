
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(this.setCustomHeader(request)).pipe(
      catchError(
        (err: HttpErrorResponse) =>
          new Observable<HttpEvent<unknown>>(observer => {
            this.handleError(err);
            observer.error(err);
            observer.complete();
          })
      )
    );
  }

  private setCustomHeader(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({
      setHeaders: {
        'custom-header': '----------------------CUSTOM-HEADER----------------------'
      }
    });
  }

  // Actually, this function should write in a new file (service)
  handleError(err: HttpErrorResponse): Observable<never> {
    if (err.status === 401) {
      alert('401 Unauthorized!');
    } else {
      alert(`${err.status}: ${err.statusText}`);
    }
    throw err;
  }

}
