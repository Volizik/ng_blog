import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Post } from '../../core/post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id: string;
  img: string;
  title: string;
  desc: string;
  post: Post;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  add() {
    this.post = {
      id: this.id,
      img: this.img,
      title: this.title,
      desc: this.desc
    };
    this.dataService.addPost(this.post)
  }

}
