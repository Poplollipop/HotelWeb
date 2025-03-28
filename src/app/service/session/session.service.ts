import { Injectable } from '@angular/core';

const TOKEN = 'token';
const USER = 'user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  static saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  static saveUser(user: any): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken() {
    return localStorage.getItem(TOKEN);
  }

  static getUser() {
    return JSON.parse(localStorage.getItem(USER));
  }

  static getUserId() {
    const user = this.getUser();
    if (user == null) { return ''; }
    return user.id;
  }

  static getUserRole() {
    const user = this.getUser();
    if (user == null) { return ''; }
    return user.role;
  }

  static isAdmin(): boolean {
    if (this.getToken == null) {
      return false
    }
    const role : string = this.getUserRole();
    return role == 'ADMIN';
  }

  static isCustomer(): boolean {
    if (this.getToken == null) {
      return false
    }
    const role : string = this.getUserRole();
    return role == 'CUSTOMER';
  }

  static loggout(){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }

}
