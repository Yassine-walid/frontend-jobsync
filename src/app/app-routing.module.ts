import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsFormComponent } from './announcements-form/announcements-form.component';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  {path:"announcments",component:AnnouncementsFormComponent},
  {path:"login",component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
