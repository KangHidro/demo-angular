import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-routing-params',
  templateUrl: './read-routing-params.component.html',
  styleUrls: ['./read-routing-params.component.scss']
})
export class ReadRoutingParamsComponent implements OnInit {

  id1 = '';
  id2 = '';
  id3 = '';
  id4 = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id1 = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    this.id2 = this.activatedRoute.snapshot.params.id ?? '';

    this.activatedRoute.paramMap.subscribe(p => this.id3 = p.get('id') ?? '');
    this.activatedRoute.params.subscribe(p => this.id4 = p.id ?? '');
  }

}



