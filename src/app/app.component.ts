import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'papersv';
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  aja() {
    var str = "Apples are round, and apples are juicy.";
    var splitted = str.split(" ", 3);
    for (var index = 0; index < splitted.length; index++) {
      console.log("Te value in the position " + index + " is: " + splitted[index]);
    }
  }

}
