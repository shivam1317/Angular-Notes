import { Component, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent {
  @Input() fromPostParent: string = '';
  childMessage: string = 'This is a message from postlist';
  postlist: Array<any> = [];
  posts: Array<any> = [];
  constructor(private postService: PostService) {
    this.postlist = postService.postlist;
    this.posts = postService.posts;
  }
  addPost() {
    let post: Post = {
      id: 101,
      data: 'This is new data!',
    };
    this.postService.addPost(post);
  }
}
