import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-enterprise-profile',
  templateUrl: './enterprise-profile.component.html',
  styleUrls: ['./enterprise-profile.component.css']
})
export class EnterpriseProfileComponent implements OnInit{

  enterpriseInfo:any;
  jwt:string="Bearer "+localStorage.getItem('jwt') || '{}';
  httpHeaders = new HttpHeaders({"Authorization":this.jwt})
  enterpriseId: any;
  
  constructor(private router:Router,private httpClient:HttpClient,private route: ActivatedRoute,private dataService:DataService){}

  

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.enterpriseId = params['id'];
    });

    this.dataService.getDataEnterprise(this.enterpriseId).subscribe(data => {
      this.enterpriseInfo = data;
      console.log(data);
     
    });


      
    
    console.log(this.enterpriseInfo)
  }

 

}
