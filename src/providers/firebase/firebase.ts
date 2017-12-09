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
  id = 1;
  constructor(private afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getBadges() {
    return this.afd.list('/'+this.id+'/badges/');
  }
 
  getMyBadges() {
    return this.afd.list('/'+this.id+'/my-badges/');
  }

  addItem(name) {
    this.afd.list('/'+this.id+'/badges/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/'+this.id+'/badges/').remove(id);
  }

  getNotifications(){
    return this.afd.list('/'+this.id+'/notifications/');    
  }

  getContacts(){
    return this.afd.list('/'+this.id+'/contacts/');        
  }

  addNewEvent(event,data){
    event.startTime = event.dates.startDate;
    event.endTime = event.dates.endDate;
    event.dates.startDate = null;
    event.dates.end = null;
    this.afd.list('/'+this.id+'/badges/').push(event);
    let contact = {id:this.id,username:"Contact Name",img:"https://media.creativemornings.com/uploads/user/avatar/156068/small_Profile.jpg"};
    for (let d of data ){
      contact = Object.assign(contact,JSON.parse(d));
    }
    this.afd.list('/badge-contact/'+event.name.replace('.','')+'/').push(contact);    
  }

  getBadgeContacts(name){
    return this.afd.list('/badge-contact/'+name.replace('.','')+'/');            
  }
}
