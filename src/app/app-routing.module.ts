import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: ':category/postlist', component: PostListComponent},
  {path: ':category/:id', component: PostDetailComponent}
  // :category and :id are sent as parameters to post.service.ts.
  // :category is used to specify which JSON file to be ussed by PostList and PostDetail.
  // :id is used to specify the specific post for PostDetail.
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {enableTracing: true}
    // debugging only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
