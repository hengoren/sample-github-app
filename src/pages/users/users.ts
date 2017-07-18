import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/user-details';


import { GithubUsers } from '../../providers/github-users/github-users';


/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
	users: User[]
  originalUsers: User[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
  	this.users = users;
    this.originalUsers = users;
    })
  }

  

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    let term = searchEvent.target.value
    console.log("The term:", term)
    

    if (term.trim() === '') {
      //load cached users
      this.users = this.originalUsers
    }
    else {
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users;
      })
    }
  }

  clear(clearEvent) {
    this.users = this.originalUsers;
    clearEvent.target.value = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
