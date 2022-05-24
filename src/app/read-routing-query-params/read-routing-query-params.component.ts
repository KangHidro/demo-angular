import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-routing-query-params',
  templateUrl: './read-routing-query-params.component.html',
  styleUrls: ['./read-routing-query-params.component.scss']
})
export class ReadRoutingQueryParamsComponent implements OnInit {

  name1 = '';
  name2 = '';
  name3 = '';
  name4 = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name1 = this.activatedRoute.snapshot.queryParamMap.get('name') ?? '';
    this.name2 = this.activatedRoute.snapshot.queryParams.name ?? '';

    this.activatedRoute.queryParamMap.subscribe(p => this.name3 = p.get('name') ?? '');
    this.activatedRoute.queryParams.subscribe(p => this.name4 = p.name ?? '');
  }

}

