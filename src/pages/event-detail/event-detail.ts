import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';
/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  contacts: FirebaseListObservable<any[]>;
  user: any = {
    name: 'Searious Peace',
    company: 'Be Small'
  };
  event;

  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider:FirebaseProvider) {
    this.event = this.navParams.data;
    this.contacts = this.firebaseProvider.getBadgeContacts(this.event.name);        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailPage');
    
      
  }

  goBack() {
    this.navCtrl.pop();
  }


}
