import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ValidationErrors} from '@angular/forms';

interface Post {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'registrace';
  http: HttpClient;

  name = '';
  post: Post = {id: 2, title: 'howdy'};
  pocetParu = 0;

  constructor(httpClient: HttpClient) {
   this.http = httpClient;
  }

  print(aaa: string): void {
    console.log(aaa);
  }

  postRequest(): void{
    this.post.id = this.pocetParu;
    this.pocetParu++;

    this.http.post<Post>('https://webhook.site/4ddb7fd6-3032-4162-b9a7-f0e9f922106d', this.post)
      .subscribe(p => console.log(p) );
  }
}


