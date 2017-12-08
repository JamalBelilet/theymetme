import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts: any [] = [
    {
      username:"Contact 1",
      company: "company 1",
      phone: "067341444554",
      address: "Adress one of one in on st"
    },
    {
      username:"Contact 2",
      company: "company 2",
      phone: "067341444554",
      address: "Adress one of one in on st"
    },
    {
      username:"Contact 3",
      company: "company 3",
      phone: "067341444554",
      address: "Adress one of one in on st"
    },
    {
      username:"Contact 4",
      company: "company 4",
      phone: "067341444554",
      address: "Adress one of one in on st"
    }
  ]
  constructor(public navCtrl: NavController) {

  }

}
