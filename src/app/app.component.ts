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

  name = '';
  post: Post | undefined;
  pocetParu = 0;

  constructor(httpClient: HttpClient) {
    httpClient.get<Post>('https://webhook.site/4ddb7fd6-3032-4162-b9a7-f0e9f922106d')
      .subscribe(p => this.post = p );
  }

  print(aaa: string): void {
    console.log(aaa);
  }
}


