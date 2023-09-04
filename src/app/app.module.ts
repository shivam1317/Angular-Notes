import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { GreetPipe } from './pipe/greet.pipe';
import { SummaryPipe } from './pipe/summary.pipe';
import { PostService } from './services/post.service';
import { SinglePostComponent } from './single-post/single-post.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostlistComponent,
    Task1Component,
    Task2Component,
    GreetPipe,
    SummaryPipe,
    SinglePostComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  // we are passing services here so that we dont have to create the separate instances for each component
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
