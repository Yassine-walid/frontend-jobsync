import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnnouncementsFormComponent } from './announcements-form/announcements-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EnterpriseProfileComponent } from './enterprise-profile/enterprise-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsFormComponent,
    NavbarComponent,
    SidebarComponent,
    HomeSliderComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UserProfileComponent,
    EnterpriseProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
