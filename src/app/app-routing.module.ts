import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsFormComponent } from './announcements-form/announcements-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EnterpriseProfileComponent } from './enterprise-profile/enterprise-profile.component';


const routes: Routes = [
  {path:"announcments",component:AnnouncementsFormComponent},
  {path:"login",component:LoginFormComponent},
  {path:"register",component:RegisterFormComponent},
  {path:"user-profile",component:UserProfileComponent},
  {path:"enterprise-profile/:id",component:EnterpriseProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
