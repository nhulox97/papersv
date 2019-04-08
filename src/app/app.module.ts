
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./shared/routing/app-routing.module";
import { AuthService } from "./shared/services/auth.service";

import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/users/log-in/log-in.component';
import { SignInComponent } from './components/users/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StartComponent } from './components/start/start.component';
import { PostComponent } from './components/post/post.component';
import { ForgotPasswordComponent } from './components/users/forgot-password/forgot-password.component';
import { EditProfileComponent } from './components/users/edit-profile/edit-profile.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignInComponent,
    AboutUsComponent,
    ProfileComponent,
    StartComponent,
    PostComponent,
    ForgotPasswordComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
