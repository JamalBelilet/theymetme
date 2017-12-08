import {Component, ViewChild} from '@angular/core';
import {App, Nav, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {ProfilePage} from '../profile/profile';
import {LoginScannerPage} from '../login-scanner/login-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: any[]  = [
    {
      image: "assets/imgs/algeria20.png",
      name: 'Capio clemens gluten est.',
      startTime: '02-08-2016',
      endTime: '03-12-2017',
      description: 'Issue is not imminent in earth, the heavens of mind, or wonderland, but everywhere.'
    },
    {
      image: "assets/imgs/algeria20.png",
      name: 'Capio clemens gluten est.',
      startTime: '02-08-2016',
      endTime: '03-12-2017',
      description: 'Issue is not imminent in earth, the heavens of mind, or wonderland, but everywhere.'
    },
    {
      image: "assets/imgs/algeria20.png",
      name: 'Capio clemens gluten est.',
      startTime: '02-08-2016',
      endTime: '03-12-2017',
      description: 'Issue is not imminent in earth, the heavens of mind, or wonderland, but everywhere.'
    },
    {
      image: "assets/imgs/evnetlogotest.jpg",
      name: 'The karma witness.',
      startTime: '09-08-2016',
      endTime: '04-12-2017',
      description: 'Leek can be brushed with sour asparagus, also try varnishing the paste with coffee.'
    },
    {
      image: "assets/imgs/algeria20.png",
      name: 'The cow witness. .',
      startTime: '09-08-2016',
      endTime: '04-12-2017',
      description: 'Real, weird parrots unlawfully love a coal-black, jolly pegleg. Death is a proud gibbet. .'
    },
  ];
  user: any = {
    name: 'Searious Peace',
    company: 'Be Small'
  }




  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {

  }

  ionViewDidLoad() {

  }

  goToLogin() {
    console.log('go to login !');
    this.navCtrl.push(LoginPage);
  }

  getProfileSettings() {
    this.navCtrl.push(ProfilePage, {"user": this.user});
  }
  goBack() {

    this.app.getRootNav().setRoot(LoginScannerPage, {isLoggedIn: true});
    // this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
