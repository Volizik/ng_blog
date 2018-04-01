import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';

@Injectable()
export class DataService {

    items: Observable<any[]>;

    constructor(private db: AngularFirestore) {
        this.items = db.collection('/posts').valueChanges();
    }

    addPost(post: Post) {
        return this.db.collection('/posts').add(post);
    }

}
