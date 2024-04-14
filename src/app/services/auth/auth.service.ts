import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_URL } from 'src/app/config/backeEndRoutes';
import { API_URL } from 'src/app/config/config';

export interface AuthRequest {
  username?: string | null;
  password?: string | null;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(
  public http: HttpClient,
    public router: Router
) { }

public login(username: string, password: string){
    const url = `${API_URL}${LOGIN_URL}`;
    const body: AuthRequest = {
      username: username,
      password: password
    };
    return this.http.post(url, body);
  
  }
}
