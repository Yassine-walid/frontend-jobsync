import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  jwt:string="Bearer "+localStorage.getItem('jwt') || '{}';
  httpHeaders = new HttpHeaders({"Authorization":this.jwt})
  username :string=localStorage.getItem('username') || '{}';

  private apiUrl = `http://localhost:8080/api/user/${this.username}`; 

  userData:any;

  constructor(private http: HttpClient,private authService:AuthService) { }
  ngOnInit(): void {
    this.getData().subscribe(data =>{
      console.log("User data",data);
      this.userData=data
    })
  }

  getData() :Observable<any>{
    
    return this.http.get<any>(this.apiUrl,{headers:this.httpHeaders})
  }
}
