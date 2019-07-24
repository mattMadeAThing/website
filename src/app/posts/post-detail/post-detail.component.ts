import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params} from '@angular/router';
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
  category: string;
  dat;
  postList$: Observable< Post[]>;

  constructor(
    private svc: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private httpGet: HttpClient) { }


    ngOnInit() {
      this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          this.category = params.category;
        }
      );

      this.post$ = this.svc.getPost(this.category, this.id);

      }

  offInit() {

  }
}
