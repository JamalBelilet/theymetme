import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {AuthenticationServiceProvider} from '../authentication-service/authentication-service';
import 'rxjs/add/operator/switchMap';
/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider
{

  public userInfo$;
  constructor(private afd: AngularFireDatabase, private authService: AuthenticationServiceProvider) {
    console.log('Hello FirebaseProvider Provider');
    this.userInfo$ = this.getUserInfo();
  }

  getBadges() {
    return this.authService.authState$.switchMap(
      val => this.afd.list('/'+val.uid+'/badges/')
    );
  }
  getUserInfo() {
    return this.authService.authState$.switchMap(
      val => this.afd.object('/contacts/'+val.uid)
    );
  }
  getAllBadges() {
    return this.afd.list('/badges/');
  }

  getMyBadges() {
    return this.authService.authState$.switchMap(
      val => this.afd.list('/'+val.uid+'/my-badges/')
    );
  }
  addToMyBadges(event) {
    return this.authService.authState$.subscribe(
      val => this.afd.list('/'+val.uid+'/my-badges/').push(event)
    );
  }

  addItem(name) {
    return this.authService.authState$.subscribe(
      val => this.afd.list('/'+val.uid+'/badges/').push(name)
    );
  }

  removeItem(id) {
    return this.authService.authState$.subscribe(
      val => this.afd.list('/'+val.uid+'/badges/').remove(id)
    );
  }

  getNotifications(){
    // return this.afd.list('/'+this.id+'/notifications/');
    return this.authService.authState$.switchMap(
      val => this.afd.list('/'+val.uid+'/notifications/')
    );
    // return this.afd.list('/notifications/');
  }

  getContacts(){
    return this.authService.authState$.switchMap(
      val => this.afd.list('/'+val.uid+'/contacts/')
    );
  }

  addNewEvent(event,data){



    event.startTime = event.dates.startDate;
    event.endTime = event.dates.endDate;
    event.dates.startDate = null;
    event.dates.end = null;
    this.authService.authState$.subscribe(
      val => this.afd.list('/'+val.uid+'/badges/').push(event)
    );


    this.authService.authState$.subscribe(
      val => {

        this.afd.object(`/${val}`).subscribe(
          contact => {
            for (let d of data ){
              contact = Object.assign(contact,JSON.parse(d));
            }

            this.afd.list('/badge-contact/'+event.name.replace('.','')+'/').push(contact);
          }
        );


      }
    );
    //
    // let contact = {username:"Contact Name",img:"https://media.creativemornings.com/uploads/user/avatar/156068/small_Profile.jpg"};
    // for (let d of data ){
    //   contact = Object.assign(contact,JSON.parse(d));
    // }
    // this.afd.list('/badge-contact/'+event.name.replace('.','')+'/').push(contact);
  }

  getBadgeContacts(name){
    return this.afd.list('/badge-contact/'+name.replace('.','')+'/');
  }

  createContact(credentials){
    this.afd.list('/contacts/').push(credentials);
  }
}
