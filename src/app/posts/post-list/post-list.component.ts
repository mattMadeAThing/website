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
  }
  test(id: number){
    this.service.getPostList().subscribe(data => this.postList$ = data);
    console.log(this.postList$[0]);
  }

}
