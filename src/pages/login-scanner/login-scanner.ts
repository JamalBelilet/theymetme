import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';

/**
 * Generated class for the LoginScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-scanner',
  templateUrl: 'login-scanner.html',
})
export class LoginScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginScannerPage');
  }

  goToLogin() {
    console.log('go to login !');
    this.navCtrl.push(LoginPage);
  }


}
