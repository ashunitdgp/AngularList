import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'assets/data.json';
  constructor(private http: HttpClient) { }

  getUserDetail() {

    return this.http.get(this.rootUrl );
  }
}
