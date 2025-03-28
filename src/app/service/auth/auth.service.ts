import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(signReq: any): Observable<any> {
    return this.http.post(URL + "api/auth/signup", signReq);
  }

  login(loginReq: any): Observable<any> {
    return this.http.post(URL + "api/auth/login", loginReq);
  }

}
