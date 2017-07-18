import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';

import { GithubRepos } from '../../providers/github-repos/github-repos';
import { RepoDetailsPage } from '../repo-details/repo-details';


/**
 * Generated class for the ReposPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {
	repos : Repo[]
	originalRepos : Repo[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubRepos: GithubRepos) {
  	githubRepos.load().subscribe(repos => {
  		// console.log(repos)
  		this.repos = repos;
  		this.originalRepos = repos;
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
    console.log('ionViewDidLoad ReposPage');
  }

}
