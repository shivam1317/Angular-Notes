import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent {
  postId: any = '';
  posts: Array<any> = [];
  // Getting the param value from the url
  constructor(private route: ActivatedRoute, postService: PostService) {
    // paramMap returns an observable on which we have to use subscribe method
    // Observable is a part of rxjs and it continuously observes the data and automatically updates the data whenever something changes
    // Subscribe method takes an callback function as a param and returns the value with several methods like get, getAll, keys etc.
    route.paramMap.subscribe((value) => {
      console.log(value.get('id'));
      this.postId = value.get('id');
    });
    this.posts = postService.posts;
  }
}
