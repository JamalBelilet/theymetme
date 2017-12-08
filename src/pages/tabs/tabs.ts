import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {MyeventsPage} from '../myevents/myevents';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  isBusiness = true;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MyeventsPage;

  constructor() {

  }
}
