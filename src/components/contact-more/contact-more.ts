import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactMoreComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  template: `
  <ion-list>
    <button ion-item full (click)="callContact()"><ion-icon  name="call" clear >{{navParams.data.phone}}</ion-icon></button>
    <button ion-item full (click)="sendMail()"><ion-icon  name="mail" clear >{{navParams.data.email}}</ion-icon></button>
  </ion-list>
`
})
export class ContactMoreComponent {

  constructor(public viewCtrl: ViewController,private navParams:NavParams) {
  }
  callContact(){
    this.close();
    setTimeout(() => {
      window.open(`tel:${this.navParams.data.phone}`, '_system');
    },100);
  }

  sendMail(){
    this.close();
    setTimeout(() => {
      window.open(`mailto:${this.navParams.data.email}`, '_system');
    },100);
  }

    close() {
      this.viewCtrl.dismiss();
    }
}
