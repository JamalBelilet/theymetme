import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider  
{

  constructor(private afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getBadges() {
    return this.afd.list('/badges/');
  }
 
  getMyBadges() {
    return this.afd.list('/my-badges/');
  }

  addItem(name) {
    this.afd.list('/badges/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/badges/').remove(id);
  }

  getNotifications(){
    return this.afd.list('/notifications/');    
  }

  getContacts(){
    return this.afd.list('/contacts/');        
  }

  addNewEvent(event,data){
    this.afd.list('/badges/').push(event);
    this.afd.list('/badge-contact/'+event.name.replace('.','')+'/').push(data);    
  }
}
