import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from '../../providers/firebase/firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts:FirebaseListObservable<any[]>;
  //  any [] = [
  //   {
  //     username:"Contact 1",
  //     company: "company 1",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 2",
  //     company: "company 2",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 3",
  //     company: "company 3",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 4",
  //     company: "company 4",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 1",
  //     company: "company 1",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 2",
  //     company: "company 2",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 3",
  //     company: "company 3",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 4",
  //     company: "company 4",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 1",
  //     company: "company 1",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 2",
  //     company: "company 2",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 3",
  //     company: "company 3",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   },
  //   {
  //     username:"Contact 4",
  //     company: "company 4",
  //     phone: "067341444554",
  //     email: "address@email.com"
  //   }
  // ];

  user: any = {
    name: 'Searious Peace',
    company: 'Be Small'
  };

  constructor(public navCtrl: NavController,public firebaseProvider: FirebaseProvider) {
    this.contacts = this.firebaseProvider.getContacts();    
  }

}
