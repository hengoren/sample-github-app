import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubRepos } from '../../providers/github-repos/github-repos';

import { Clipboard } from '@ionic-native/clipboard';


/**
 * Generated class for the RepoDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html',
})
export class RepoDetailsPage {
	owner: string;
	name: string;
	repo: Repo;

  /** TODO
  * 7/17/17 22:04
  *
  * Add in functionality for the clipboard bit.
  *
  */
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private githubRepos: GithubRepos, private clipboard: Clipboard) {
  	this.owner = navParams.get('owner')
  	this.name = navParams.get('name')

  	githubRepos.load_single(this.owner, this.name).subscribe(repo => {
  		console.log(repo)
  		this.repo = repo;
  		console.log(this.repo)
  	})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetailsPage');
  }

}
