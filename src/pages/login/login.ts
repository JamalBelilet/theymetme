import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventsPage} from '../events/events';
import {TabsPage} from '../tabs/tabs';
import {LoginScannerPage} from '../login-scanner/login-scanner';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentials: {
    mail:string,
    password:string
  } = {
    mail: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login() {
    this.navCtrl.setRoot(LoginScannerPage, {isLoggedIn: true});

  }
  getSignUpPage() {}
}
