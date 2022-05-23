import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-vd12-built-in-pipes',
  templateUrl: './vd12-built-in-pipes.component.html',
  styleUrls: ['./vd12-built-in-pipes.component.scss']
})
export class Vd12BuiltInPipesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  today = new Date();

  longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a convallis mauris, et consectetur justo. Proin ut aliquam tellus, non iaculis arcu';

  listAuthor!: Observable<any>;

  ngOnInit(): void {
    this.listAuthor = this.http.get<any>('https://openlibrary.org/search/authors.json?q=Rowling&limit=3')
      .pipe(map(x => x.docs));
  }

}
