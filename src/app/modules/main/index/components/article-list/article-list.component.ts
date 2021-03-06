import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../../core/post.model';
import {DataService} from '../../../../../core/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  posts: Post[];
  postsLength = 1;

  constructor(private dataService: DataService) {
    this.dataService.items.subscribe( data => {
      this.posts = data;
      this.postsLength = data.length;
    });
  }

  ngOnInit() {
  }
}
