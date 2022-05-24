import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vd17-interceptor',
  templateUrl: './vd17-interceptor.component.html',
  styleUrls: ['./vd17-interceptor.component.scss']
})
export class Vd17InterceptorComponent implements OnInit {

  errorReq: any;
  customReq: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeErrorReq() {
    this.http.get('https://weatherapi-com.p.rapidapi.com/ip.json?q=%3CREQUIRED%3E')
      .subscribe();
  }

  makeCustomReq() {
    this.http.get('https://catfact.ninja/fact')
      .subscribe();
  }

}
