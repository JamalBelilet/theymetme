import { NgModule } from '@angular/core';
import { EventsHolderComponent } from './events-holder/events-holder';
import { ContactsHolderComponent } from './contacts-holder/contacts-holder';
@NgModule({
	declarations: [EventsHolderComponent,
    ContactsHolderComponent],
	imports: [],
	exports: [EventsHolderComponent,
    ContactsHolderComponent]
})
export class ComponentsModule {}
