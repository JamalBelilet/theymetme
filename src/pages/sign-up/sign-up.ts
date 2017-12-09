import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {EventsPage} from '../events/events';
import {TabsPage} from '../tabs/tabs';
import {LoginScannerPage} from '../login-scanner/login-scanner';
import {AuthenticationServiceProvider} from '../../providers/authentication-service/authentication-service';
import {LoginPage} from '../login/login';
import { FirebaseProvider } from '../../providers/firebase/firebase';
// import {SignUpPage} from '../sign-up/sign-up';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  credentials: {
    fullname: string,
    company: string,
    mail: string,
    phone: string,
    password: string,
    linkedin: string,
    uid:string,

  } = {
    fullname: '',
    company: '',
    mail: '',
    phone: '',
    password: '',
    linkedin: '',
    uid: ''
  };

  constructor(private authService: AuthenticationServiceProvider, public navCtrl: NavController, public navParams: NavParams,private firebaseProvider:FirebaseProvider) {
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
      .catch(error => {
      });


  }

  signup() {
    console.log(JSON.stringify(this.credentials));
    this.authService.signup(this.credentials)
      .then( _ => {
        //TODO adds contact to database
        this.credentials.uid = _.uid;
        this.firebaseProvider.createContact(this.credentials);
        this.login();
      });
  }

  getLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
}

