import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubRepos } from '../../providers/github-repos/github-repos';
import { RepoDetailsPage } from '../../pages/repo-details/repo-details';


/**
 * Generated class for the UserReposPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-repos',
  templateUrl: 'user-repos.html',
})
export class UserReposPage {
	owner: string
	repos: Repo[]
	originalRepos: Repo[]


  constructor(public navCtrl: NavController, public navParams: NavParams, private githubRepos: GithubRepos) {
  	this.owner = navParams.get('owner')
  	console.log(this.owner)
  	githubRepos.load_users_repos(this.owner).subscribe(repo => {
  		this.repos = repo
  		this.originalRepos = repo
  	})
  }

  goToDetails(owner: string, name: string) {
    console.log(owner, name)
    this.navCtrl.push(RepoDetailsPage, {owner, name})
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    console.log(term)

    if (term.trim() === '') {
      //load cached users
      this.repos = this.originalRepos
    }
    else {
      this.githubRepos.searchRepos(term).subscribe(repos => {
        this.repos = repos;
      })
    }
  }

  clear(clearEvent) {
    this.repos = this.originalRepos;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserReposPage');
  }

}
