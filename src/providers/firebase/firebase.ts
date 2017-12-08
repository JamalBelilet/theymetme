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
}
