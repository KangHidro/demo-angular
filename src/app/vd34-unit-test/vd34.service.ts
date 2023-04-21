import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Vd34Service {
  // Access crudcrud.com for new free API (expired in 24h)
  apiLink = 'https://crudcrud.com/api/4826f87301f841a98d77c47cf0589130/unicorns';
  // Then click button: "Click to create a unicorn" to test this example
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiLink);
  }
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.apiLink + `/${id}`);
  }
  createUser(name: string, age: number, colour: string): Observable<User> {
    return this.http.post<User>(this.apiLink, { name, age, colour });
  }
  updateUser(id: string, name: string, age: number, colour: string): Observable<User> {
    return this.http.put<User>(this.apiLink + `/${id}`, { name, age, colour });
  }
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.apiLink + `/${id}`);
  }

  // A demo function for testing vd34 component
  createUser2(user: User): Observable<User> {
    return this.http.post<User>(this.apiLink, user);
  }
}


export class User {
  _id: string;
  name: string;
  age: number;
  colour: string;
  constructor(
    name = '', age = 0,
    colour = '', _id?: string
  ) {
    this.name = name;
    this.age = age;
    this.colour = colour;
    this._id = _id ?? '';
  }
}

