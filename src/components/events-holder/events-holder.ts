import {Component, Input} from '@angular/core';

/**
 * Generated class for the EventsHolderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'events-holder',
  templateUrl: 'events-holder.html'
})
export class EventsHolderComponent {
  @Input() event: {
    name: string,
    startTime: string,
    endTime: string,
    description: string,
    address: string
  };

  constructor() {
  }

}
