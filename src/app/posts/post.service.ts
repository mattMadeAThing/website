import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of, pipe } from 'rxjs';
import { map, subscribeOn, filter } from 'rxjs/operators';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList$: Observable<Post[]>;
  post$: Observable<Post>;
  post: Post;
  constructor(private httpGet: HttpClient) { }

  getPostList(category: string) {
    this.postList$ = this.httpGet.get<Post[]>('assets/' + category + '-posts.json');
    return this.postList$;
  }

  getPost(category: string, id: number): Observable<Post> {
    this.post$ = this.httpGet
      .get<Post[]>('assets/' + category + '-posts.json')
      .pipe(
        map((res: Post[]) => {
          if (res === undefined) {
            console.log('novals');
          }
          return res[id];
        })
      );
    return this.post$;
  }
}
