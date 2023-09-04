import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

// we can use services to export the methods which are needed in every components regardless of their relation with other components
export class PostService {
  // we can write this also instead of adding PostService in Providers of app.modules.ts
  //   @Injectable({
  //     providedIn: 'root',
  //   })
  postlist: Array<Post> = [
    { id: 1, data: 'This is post 1' },
    { id: 2, data: 'This is post 2' },
    { id: 3, data: 'This is post 3' },
    { id: 4, data: 'This is post 4' },
    { id: 5, data: 'This is post 5' },
    { id: 6, data: 'This is post 6' },
    { id: 7, data: 'This is post 7' },
  ];
  posts: Array<object> = [
    {
      id: 1,
      title: 'Post 1',
      description: 'This is the description of post 1',
    },
    {
      id: 2,
      title: 'Post 2',
      description: 'This is the description of post 2',
    },
    {
      id: 3,
      title: 'Post 3',
      description: 'This is the description of post 3',
    },
    {
      id: 4,
      title: 'Post 4',
      description: 'This is the description of post 4',
    },
    {
      id: 5,
      title: 'Post 5',
      description: 'This is the description of post 5',
    },
  ];
  addPost(data: Post) {
    this.postlist.push(data);
  }
}
