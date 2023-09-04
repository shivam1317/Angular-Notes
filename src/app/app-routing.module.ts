import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'task1',
    component: Task1Component,
  },
  // Dynamic route
  {
    path: 'post/:id',
    component: SinglePostComponent,
  },
  // 404 error page (wildcard route)
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
