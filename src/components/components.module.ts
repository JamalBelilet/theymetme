import { NgModule } from '@angular/core';
import { EventsHolderComponent } from './events-holder/events-holder';
import { ContactsHolderComponent } from './contacts-holder/contacts-holder';
import { ContactMoreComponent } from './contact-more/contact-more';
@NgModule({
	declarations: [EventsHolderComponent,
    ContactsHolderComponent,
    ContactMoreComponent],
	imports: [],
	exports: [EventsHolderComponent,
    ContactsHolderComponent,
    ContactMoreComponent]
})
export class ComponentsModule {}
