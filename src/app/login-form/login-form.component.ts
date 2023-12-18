import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user:UserModel = new UserModel();

  constructor(private authService : AuthService,private router:Router){}
  onLoggedin():void{
    this.authService.login(this.user).subscribe({
      next:(data:HttpResponse<UserModel>) =>{
        let jwtToken = data.headers.get("Authorization")!;
        this.authService.saveToken(jwtToken);
        this.router.navigate(['/announcments'])//announcments
      },
      error: (error:any)=>{
        error=1
      }
    })
  }
}
