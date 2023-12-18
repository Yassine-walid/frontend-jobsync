import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private http: HttpClient,private authService:AuthService) { }

  jwt:string="Bearer "+localStorage.getItem('jwt') || '{}';
  httpHeaders = new HttpHeaders({"Authorization":this.jwt})
  username :string=localStorage.getItem('username') || '{}';

  private apiUrl = `http://localhost:8080/api/user/${this.username}`; 

  userData:any;

  ngOnInit(): void {
    this.getData().subscribe(data =>{
      console.log("User data",data);
      this.userData=data
    })
  }

  getData() :Observable<any>{
    console.log(this.jwt)
    console.log(this.httpHeaders)
    return this.http.get<any>(this.apiUrl,{headers:this.httpHeaders})
  }


}
