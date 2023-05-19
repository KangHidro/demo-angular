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

  getAuth = () => localStorage.getItem('login');

  addAuth = () => localStorage.setItem('login', '1');

  removeAuth = () => localStorage.removeItem('login');

  getRole = () => localStorage.getItem('role');

  addRole = (role: string) => localStorage.setItem('role', role);

  removeRole = () => localStorage.removeItem('role');

}
