import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PostService } from '../post.service';
import { Post } from 'src/app/posts/Post';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList$: Observable<Post[]>;
  category: string = "code";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.category = params['category'];
        console.log(this.category);
        this.postList$ = this.service.getPostList(this.category);
      }
    );

  }
  getLink(){
  }

}
