import { NgModule } from "@angular/core";

import { AppComponent } from '../../app.component';
//users
import { LogInComponent } from '../../components/users/log-in/log-in.component';
import { SignInComponent } from '../../components/users/sign-in/sign-in.component';
import { ForgotPasswordComponent } from "../../components/users/forgot-password/forgot-password.component";
import { EditProfileComponent } from "../../components/users/edit-profile/edit-profile.component";
//Views of social media
import { HomeComponent } from '../../components/home/home.component'
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { ProfileComponent } from "../../components/profile/profile.component";
import { StartComponent } from "../../components/start/start.component";
import { PostComponent } from "../../components/post/post.component";
//Required services for navigation
import { RouterModule, Routes } from "@angular/router";


const routes: Routes =[
  {path: 'start', component: StartComponent},
  {path: 'post', component: PostComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'editProfile', component: EditProfileComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }