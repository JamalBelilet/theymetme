import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {EventDetailPage} from '../event-detail/event-detail';
import {LoginPage} from '../login/login';
import {ProfilePage} from '../profile/profile';
import {LoginScannerPage} from '../login-scanner/login-scanner';
import {AddeventpagePage} from '../addeventpage/addeventpage';

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

  events: any[] = [
    {
      image: 'assets/imgs/algeria20.png',
      name: 'Capio clemens gluten est.',
      startTime: '02-08-2016',
      endTime: '03-12-2017',
      description: 'Issue is not imminent in earth, the heavens of mind, or wonderland, but everywhere.',
      contacts: [
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        }
      ]
    },
    {
      image: 'assets/imgs/algeria20.png',
      name: 'Capio clemens gluten est.',
      startTime: '02-08-2016',
      endTime: '03-12-2017',
      description: 'Issue is not imminent in earth, the heavens of mind, or wonderland, but everywhere.',
      contacts: [
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        }
      ]
    },
    {
      image: 'assets/imgs/algeria20.png',
      name: 'Capio clemens gluten est.',
      startTime: '02-08-2016',
      endTime: '03-12-2017',
      description: 'Issue is not imminent in earth, the heavens of mind, or wonderland, but everywhere.',
      contacts: [
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        }
      ]
    },
    {
      image: 'assets/imgs/evnetlogotest.jpg',
      name: 'The karma witness.',
      startTime: '09-08-2016',
      endTime: '04-12-2017',
      description: 'Leek can be brushed with sour asparagus, also try varnishing the paste with coffee.',
      contacts: [
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        }
      ]
    },
    {
      image: 'assets/imgs/algeria20.png',
      name: 'The cow witness. .',
      startTime: '09-08-2016',
      endTime: '04-12-2017',
      description: 'Real, weird parrots unlawfully love a coal-black, jolly pegleg. Death is a proud gibbet. .',
      contacts: [
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 1',
          company: 'company 1',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 2',
          company: 'company 2',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 3',
          company: 'company 3',
          phone: '067341444554',
          email: 'address@email.com'
        },
        {
          username: 'Contact 4',
          company: 'company 4',
          phone: '067341444554',
          email: 'address@email.com'
        }
      ]
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
