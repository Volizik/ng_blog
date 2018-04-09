import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataService {

    items: Observable<any[]>;

    constructor(private db: AngularFireDatabase) {
        this.items = db.list('/posts').valueChanges();
    }

    addPost(post: Post) {
        return this.db.list('/posts').push(post);
    }

}
