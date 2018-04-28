import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';
import { FixturesPage } from '../fixtures/fixtures';
import { EventsPage } from '../events/events';
import { ClubDetailPage } from '../club-detail/club-detail';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  clubTab: any = ClubDetailPage;
  resultTab: any = ResultsPage;
  fixtureTab: any = FixturesPage;
  eventTab: any = EventsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
