import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Post } from './post';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsCollections: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  private postDoc: AngularFirestoreDocument<Post>;

  constructor( private afs: AngularFirestore) { 
    this.postsCollections = afs.collection<Post>('posts');
    this.posts = this.postsCollections.snapshotChanges().pipe(
      map(actions => actions.map(a =>{
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getPosts(){
    return this.posts;
  }

  addPost(post){
    this.postsCollections.add(post);
  }

  updatePost(post){
    this.postDoc = this.afs.doc<Post>(`posts/${post.id}`);
    this.postDoc.update(post);
  }

  deletePost(post){
    this.postDoc = this.afs.doc<Post>(`posts/${post.id}`);
    this.postDoc.delete();
  }
}
