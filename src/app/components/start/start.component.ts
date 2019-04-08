import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.posts = db.collection('posts').valueChanges();
   }

  ngOnInit() {
  }

}
