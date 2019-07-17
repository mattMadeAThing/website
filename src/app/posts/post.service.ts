import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, subscribeOn } from 'rxjs/operators';
import { Post } from './Post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList$: Post;
  post$: Observable<Post>;
  post: Post;
  constructor(private httpGet: HttpClient) {}

  getPostList(){
    return this.httpGet.get<Post[]>('/assets/posts.json');
  }
  getPost(id: number){
    console.log(id+ "insvc");
    this.httpGet.get<any>('/assets/posts.json').pipe(map(
      (data =>  this.post$ = data[0])));
    console.log(this.post$.subscribe());
    return this.post$;


    return this.post$;


  }
}
