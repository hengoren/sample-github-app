import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

/*
  Generated class for the GithubUsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com'

  constructor(public http: Http) {

    console.log('Hello GithubUsersProvider Provider');
  }

  //load all github users
  load(): Observable<User[]> {
  	return this.http.get(`${this.githubApiUrl}/users`)
  	  .map(res => <User[]>res.json())
  }

  //load github user by specific username
  loadDetails(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
      .map(res => <User>res.json())
  }

  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
      .map(res => <User[]>res.json().items)
  }


}
