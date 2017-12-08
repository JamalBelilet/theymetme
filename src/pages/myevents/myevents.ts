import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {EventDetailPage} from '../event-detail/event-detail';
import {LoginPage} from '../login/login';
import {ProfilePage} from '../profile/profile';
import {LoginScannerPage} from '../login-scanner/login-scanner';
import {AddeventpagePage} from '../addeventpage/addeventpage';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
/**
 * Generated class for the MyeventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myevents',
  templateUrl: 'myevents.html',
})
export class MyeventsPage {
  eventDetail =EventDetailPage;
  events: FirebaseListObservable<any[]>;  

  user: any = {
    name: 'Searious Peace',
    company: 'Be Small'
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App,public firebaseProvider: FirebaseProvider) {
    this.events = this.firebaseProvider.getMyBadges();        
  }

  ionViewDidLoad() {

  }

  goToLogin() {
    console.log('go to login !');
    this.navCtrl.push(LoginPage);
  }

  getProfileSettings() {
    this.navCtrl.push(ProfilePage, {'user': this.user});
  }

  goBack() {

    this.app.getRootNav().setRoot(LoginScannerPage, {isLoggedIn: true});
    // this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  addEvent() {
    this.navCtrl.push(AddeventpagePage);
  }

}
