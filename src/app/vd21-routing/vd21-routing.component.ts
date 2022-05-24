import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vd21-routing',
  templateUrl: './vd21-routing.component.html',
  styleUrls: ['./vd21-routing.component.scss']
})
export class Vd21RoutingComponent {

  constructor(private router: Router) { }

  routerItem() {
    this.router.navigate(['/vd20']);
  }

  routerSegments() {
    this.router.navigate(['/', 'vd20']);
  }

  routerUrl() {
    this.router.navigateByUrl('/vd20');
  }

}
