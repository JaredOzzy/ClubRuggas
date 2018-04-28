import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ClubsPage } from '../pages/clubs/clubs';
import { FavouritesPage } from '../pages/favourites/favourites';
import { LogsPage } from '../pages/logs/logs';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { ResultsPage } from '../pages/results/results';
import { FixturesPage } from '../pages/fixtures/fixtures';
import { EventsPage } from '../pages/events/events';
import { ClubDetailPage } from '../pages/club-detail/club-detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage = HomePage;
  pages: Array<{
    title: string,
    component: any,
    icon: string,
    color: any,
  }>;
  sideMenuPages: Array<{
    title: string,
    component: any,
    icon: string,
    color: any,
  }>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
  ) {
    this.initializeApp();


    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage , icon: 'md-home', color: 'dark'},
      { title: 'Clubs', component: ClubsPage, icon: 'ios-american-football', color: ''},
      { title: 'Logs', component: LogsPage, icon: 'ios-podium', color: ''},
      { title: 'Favourites', component: FavouritesPage, icon: 'md-heart', color: ''},
      { title: 'Settings', component: SettingsPage, icon: 'md-cog', color: ''},
      { title: 'Login/Register', component: LoginPage, icon: 'md-log-in', color: ''},
      { title: 'Results', component: ResultsPage, icon: 'md-log-in', color: ''},
      { title: 'Fixtures', component: FixturesPage, icon: 'md-log-in', color: ''},
      { title: 'Events', component: EventsPage, icon: 'md-log-in', color: ''},
      { title: 'ClubDetail', component: ClubDetailPage, icon: 'md-log-in', color: ''},
    ];

    this.sideMenuPages = [
      { title: 'Home', component: HomePage , icon: 'md-home', color: 'dark'},
      { title: 'Clubs', component: ClubsPage, icon: 'ios-american-football', color: ''},
      { title: 'Logs', component: LogsPage, icon: 'ios-podium', color: ''},
      { title: 'Favourites', component: FavouritesPage, icon: 'md-heart', color: ''},
      { title: 'Settings', component: SettingsPage, icon: 'md-cog', color: ''},
      { title: 'Login/Register', component: LoginPage, icon: 'md-log-in', color: ''},
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page 
    this.nav.setRoot(page.component);
    // Color for the active item
    page.color='dark';

    for (let p of this.sideMenuPages) {

      if(p.title==page.title){
        p.color='dark';
      }else{
        p.color='';
      }
    
    }
 
  }
}
