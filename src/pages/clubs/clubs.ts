import { Component } from '@angular/core';
import { IonicPage, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';


/**
 * Generated class for the ClubsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html',
})
export class ClubsPage {

  clubData: any;
 
  constructor(
  	public loadingController: LoadingController,
  	public http: Http) {
  	//Controls the loading during API call.
  	let loader = this.loadingController.create({
      content: "Strapping Ankles"
    });
	loader.present();
 	//gets enpoint of API and subscribes the data into a json field and ends loading spinner.
    this.http.get('https://demo7818584.mockable.io/clubs/get-all-small').subscribe(data => {
    	console.log(data.json())
        this.clubData = data.json();
        loader.dismiss();
    }, err => {
        console.log(err);
    });
 
  }
}
