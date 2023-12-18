import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { AuthService } from '../auth/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-announcements-form',
  templateUrl: './announcements-form.component.html',
  styleUrls: ['./announcements-form.component.css']
})
export class AnnouncementsFormComponent implements OnInit{
  fetchedData: any;
  

  constructor(private dataService: DataService,private authService:AuthService) { }

  ngOnInit(): void {
    
    
    // Fetch data when the component initializes
    this.dataService.getData().subscribe(data => {
      this.fetchedData = data;
      console.log(data);
      
      
     
    });
  }

}
