import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent} from './posts/post-detail/post-detail.component';

const routes: Routes = [
  {path: 'postlist', component: PostListComponent},
  {path: 'post/:id', component: PostDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing: true}
    // debugging only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
