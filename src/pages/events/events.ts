import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events: any[]  = [
    {
      name: 'Capio clemens gluten est.',
      startTime: '02-08-2016',
      endTime: '03-12-2017',
      description: 'Issue is not imminent in earth, the heavens of mind, or wonderland, but everywhere.'
    },
    {
      name: 'The karma witness.',
      startTime: '09-08-2016',
      endTime: '04-12-2017',
      description: 'Leek can be brushed with sour asparagus, also try varnishing the paste with coffee.'
    },
    {
      name: 'The cow witness. .',
      startTime: '09-08-2016',
      endTime: '04-12-2017',
      description: 'Real, weird parrots unlawfully love a coal-black, jolly pegleg. Death is a proud gibbet. .'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  goToLogin() {
    console.log('go to login !');
    this.navCtrl.push(LoginPage);
  }

}
