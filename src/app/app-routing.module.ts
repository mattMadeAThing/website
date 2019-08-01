import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: ':category/postlist', component: PostListComponent},
  {path: ':category/:id', component: PostDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {enableTracing: true}
    // debugging only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
