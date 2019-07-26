import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HeaderComponent} from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { PostService } from './posts/post.service';
import { AboutComponent } from "./about/about.component";
@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    PostItemComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [MaterialModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
