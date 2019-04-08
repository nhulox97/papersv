import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {AngularFireStorage }  from '@angular/fire/storage';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import {finalize} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/shared/services/user';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public user: User;


  constructor(private storage: AngularFireStorage, 
    private afAuth: AngularFireAuth) {

      this.user = {
        uid: localStorage.getItem('uid'),
        displayName: localStorage.getItem('displayName'),
        email: localStorage.getItem('email'), 
        emailVerified: false
      };

      this.currentuser();
  }

  @ViewChild('imgUser') imputimgUser : ElementRef;
  uploadPercent : Observable <number>;
  urlImage: Observable <String>;

  ngOnInit() {
  }

  currentuser(){
    
  }


  onUpload(e: { target: { files: any[]; }; }){
    //console.log('subir', e.target.files[0])
    const id = Math.random().toString(36).substring(2); 
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file); 
    
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => 
      this.urlImage = ref.getDownloadURL())).subscribe();
  }
}