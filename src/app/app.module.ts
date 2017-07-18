import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Clipboard } from '@ionic-native/clipboard'


import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';
import { UserReposPage } from '../pages/user-repos/user-repos';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsers } from '../providers/github-users/github-users';
import { GithubRepos } from '../providers/github-repos/github-repos';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    RepoDetailsPage,
    UserReposPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    RepoDetailsPage,
    UserReposPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers,
    GithubRepos,
    Clipboard
  ]
})
export class AppModule {}
