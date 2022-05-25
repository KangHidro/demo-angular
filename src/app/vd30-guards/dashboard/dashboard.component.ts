import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addAuth() {
    localStorage.setItem('login', '1');
  }

  removeAuth() {
    localStorage.removeItem('login');
  }

}
