import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-vd16-handle-http-error',
  templateUrl: './vd16-handle-http-error.component.html',
  styleUrls: ['./vd16-handle-http-error.component.scss']
})
export class Vd16HandleHttpErrorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData() {
    this.http.get('https://weatherapi-com.p.rapidapi.com/ip.json?q=%3CREQUIRED%3E')
      .pipe(catchError(this.handleError))
      .subscribe();
  }

  handleError(err: HttpErrorResponse): Observable<never> {
    if (err.status === 401) {
      alert('401 Unauthorized!');
    } else {
      alert(`${err.status}: ${err.statusText}`);
    }
    throw err;
  }

}
