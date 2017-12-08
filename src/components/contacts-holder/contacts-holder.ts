import { Component,Input } from '@angular/core';

/**
 * Generated class for the ContactsHolderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'contacts-holder',
  templateUrl: 'contacts-holder.html'
})

export class ContactsHolderComponent {
  @Input() contact: {
    username: string,
    company: string,
    phone: string,
    email: string
  };

  constructor() {
  
  }

}