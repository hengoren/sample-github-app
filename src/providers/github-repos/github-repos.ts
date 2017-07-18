import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { Repo } from '../../models/repo';

/*
  Generated class for the GithubReposProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubRepos {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
    console.log('Hello GithubReposProvider Provider');
  }

  load(): Observable<Repo[]> {
  	return this.http.get(`${this.githubApiUrl}/repositories`)
  	  .map(res => <Repo[]>res.json())
  }

  load_users_repos(owner: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/users/${owner}/repos`)
      .map(res => <Repo[]>res.json())
  }




  load_single(owner: string, name: string): Observable<Repo> {
    console.log(owner, name)
    return this.http.get(`${this.githubApiUrl}/repos/${owner}/${name}`)
      .map(res => <Repo>res.json())
  }

  searchRepos(searchParam: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repositories?q=${searchParam}`)
      .map(res => <Repo[]>res.json().items)
  }




}
