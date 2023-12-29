import { Component } from '@angular/core';
import {AuthService} from '../auth/auth.service'
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { UserModel } from '../models/user.model';


@Component({
  selector: 'app-register-form',
  
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  constructor(private authService : AuthService,private router:Router){}
  user:UserModel = new UserModel();
  register(){
    this.authService.register(this.user).subscribe({
      next:(data:HttpResponse<UserModel>) =>{
        this.router.navigate(['/login'])
      },
      error: (error:any)=>{
        error=1
      }
    })
  }
}
