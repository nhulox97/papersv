import { Component, OnInit } from '@angular/core';
import { PostService } from "../../shared/services/post.service";
import { Post } from 'src/app/shared/services/post';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'
import { User } from 'src/app/shared/services/user';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  myDate = new Date();
  //user: Observable<any[]>;
  user: User;


  private userCollection: AngularFirestoreCollection<User>;
  private userDoc: AngularFirestoreDocument<User>;
  constructor(private pService: PostService,
    private auth: AuthService,
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore) {

  }

  ngOnInit() {
  }

  add(content) {

    this.getCurrentUser();
    console.log("Data: ",localStorage.getItem('user'));
    const postData: Post = {
      uid: this.afAuth.auth.currentUser.uid.toString(),
      uDisplayName: localStorage.getItem('displayName'),
      content: content,
      creationDate: this.myDate.getDate(),
      likes: 0
    }
    //this.pService.addPost(postData);

  }


  getCurrentUser() {

    //console.log(localStorage.getItem('uid'));

    this.userCollection = this.afs.collection<User>('users');

    //this.currentUser = this.userDoc.get()

    this.userCollection.doc(localStorage.getItem('uid')).ref.get().then(function (doc) {
      if (doc.exists) {
        //this.currentUser = doc.data();
        const data = doc.data();
        localStorage.setItem('displayName', data.displayName);
        console.log("Document Data: ", data.displayName);

      } else {
        console.log("No such document!");
      }

    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
    console.log("Nombre: ",localStorage.getItem('displayName'));
  }
}
