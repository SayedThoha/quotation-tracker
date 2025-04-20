import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse, IUserModel, Login, Register } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/RfqTracker/';
  loggedUserData?: IUserModel;

  constructor(private http: HttpClient) {
    this.setLoggedUser()
  }

  setLoggedUser() {
    const loggedUser = sessionStorage.getItem('RfqUser');
    if (loggedUser !== null) {
      this.loggedUserData = JSON.parse(loggedUser);
    }
  }

  onRegister(obj: Register): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${this.apiUrl}Register`, obj);
  }

  onLogin(obj: Login): Observable<IApiResponse> {
    return this.http.post<IApiResponse>(`${this.apiUrl}login`, obj);
  }
}
