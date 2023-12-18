import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private helper:JwtHelperService = new JwtHelperService();
  token! : string;

  public loggedUser! :string;
  public isLogged :Boolean= false;
  public roles! : string[]

  constructor(private router:Router,private httpClient:HttpClient) { }

  login(user: UserModel):Observable<HttpResponse<UserModel>>{
    return this.httpClient.post<UserModel>('http://localhost:8080/login',user,{observe:'response'})
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt)
    this.token = jwt;
    this.isLogged = true;
    this.decodedJWT(this.token);
  }

  getToken():string{
    return "hel";
  }

  decodedJWT(token:string){
      const decodedToken = this.helper.decodeToken(this.token)
      this.roles=decodedToken.roles;
      this.loggedUser = decodedToken.sub;
      localStorage.setItem("username",this.loggedUser)
  }

}
