import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Post} from '../Post';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post$: Observable<Post>;
  post: Post;
  id: number;
  postList$: Post[];

  constructor(
    private svc: PostService,
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit() {
    console.log("help");
    this.id = 0;
    this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>

       this.svc.getPost(+params.get('id'))

      )
    )
    this.post$.subscribe(data => this.post = data);
  }

  offInit(){
    this.svc.getPostList().subscribe(data => this.postList$ = data);
    console.log(this.postList$[1]);
  }
}
