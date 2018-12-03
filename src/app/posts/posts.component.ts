import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PostData } from '../PostData';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : PostData[];
  constructor(private service: PostService) {
    
   }

  ngOnInit() {
    this.service.getPosts()
          .subscribe( posts => this.posts = posts );
  }

}
