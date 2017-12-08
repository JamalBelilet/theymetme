import { Component,Input } from '@angular/core';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { ViewController } from 'ionic-angular';
import { ContactMoreComponent } from '../contact-more/contact-more';

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

  
  constructor(private popoverCtrl:PopoverController) {
  
  }

  
  presentPopover(myEvent){
    let popover = this.popoverCtrl.create(ContactMoreComponent,this.contact);
    popover.present({
      ev: myEvent
    });
  }
}

