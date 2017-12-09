import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventsPage} from '../events/events';
import {TabsPage} from '../tabs/tabs';
import {LoginScannerPage} from '../login-scanner/login-scanner';
import {AuthenticationServiceProvider} from '../../providers/authentication-service/authentication-service';
import {SignUpPage} from '../sign-up/sign-up';

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

  constructor(private authService: AuthenticationServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }




  login() {

    const _ = this;
    this.authService
      .login(this.credentials)
      .then($ => {


        console.log('logget wald l8ram')

        this.navCtrl.setRoot(LoginScannerPage, {isLoggedIn: true});
      })
      .catch(error => {});



  }
  getSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }
}
