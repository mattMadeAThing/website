import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PostService } from '../post.service';
import { Post } from 'src/app/posts/Post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList$: Post[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService) { }

  ngOnInit() {
    this.service.getPostList('code').subscribe(data => this.postList$ = data);
  }
  getLink(){
  }

}
