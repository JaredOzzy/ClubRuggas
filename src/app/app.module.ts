import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FavouritesPage } from '../pages/favourites/favourites';
import { ClubsPage } from '../pages/clubs/clubs';
import { LogsPage } from '../pages/logs/logs';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { ResultsPage } from '../pages/results/results';
import { FixturesPage } from '../pages/fixtures/fixtures';
import { EventsPage } from '../pages/events/events';
import { ClubDetailPage } from '../pages/club-detail/club-detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClubDataProvider } from '../providers/club-data/club-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavouritesPage,
    LogsPage,
    ClubsPage,
    SettingsPage,
    LoginPage,
    ResultsPage,
    FixturesPage,
    EventsPage,
    ClubDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavouritesPage,
    LogsPage,
    ClubsPage,
    SettingsPage,
    LoginPage,
    ResultsPage,
    FixturesPage,
    EventsPage,
    ClubDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClubDataProvider
  ]
})
export class AppModule {}
