import { Component, OnInit } from '@angular/core';
import { Link } from '../Link';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  readonly tabLinks: Link[] = [{path: 'about', name: 'about' } , {path: 'code/postlist', name: 'code'} ];
  banner: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleBanner(){
    this.banner = !this.banner;
    console.log(this.banner);
  }
}
