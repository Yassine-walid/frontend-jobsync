import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  jwt:string="Bearer "+localStorage.getItem('jwt') || '{}';
  httpHeaders = new HttpHeaders({"Authorization":this.jwt})

  private apiUrl = 'http://localhost:8080/announcement/all'; // Replace this with your API endpoint

  constructor(private http: HttpClient,private authService:AuthService) { }

  getData(): Observable<any> {
    console.log(this.jwt)
    console.log(this.httpHeaders)
    return this.http.get<any>(this.apiUrl,{headers:this.httpHeaders});
  }
}
