import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginScannerPage} from '../pages/login-scanner/login-scanner';
import {LoginPage} from '../pages/login/login';
import {EventsPage} from '../pages/events/events';
import {EventsHolderComponent} from '../components/events-holder/events-holder';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {ContactsHolderComponent} from '../components/contacts-holder/contacts-holder';
import {ProfilePage} from '../pages/profile/profile';
import {ContactMoreComponent} from '../components/contact-more/contact-more';
import {EventDetailPage} from '../pages/event-detail/event-detail';
import {AddeventpagePage} from '../pages/addeventpage/addeventpage';
import {MyeventsPage} from '../pages/myevents/myevents';
import {DatePicker} from '@ionic-native/date-picker';

import {FirebaseProvider} from '../providers/firebase/firebase';
import {HttpModule} from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AuthenticationServiceProvider} from '../providers/authentication-service/authentication-service';
import {AngularFireModule} from 'angularfire2/angularfire2';
import { AngularFireAuth} from 'angularfire2/auth';
import {SignUpPage} from '../pages/sign-up/sign-up';
import { ImagePicker } from '@ionic-native/image-picker';


const config = {
  apiKey: 'AIzaSyB7NZ4odUf_vBalWkW5tHeWNqwGOR7I958',
  authDomain: 'theymetme-be7fa.firebaseapp.com',
  databaseURL: 'https://theymetme-be7fa.firebaseio.com',
  projectId: 'theymetme-be7fa',
  storageBucket: 'theymetme-be7fa.appspot.com',
  messagingSenderId: '44686374750'
};

@NgModule({

  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginScannerPage,
    LoginPage,
    EventsPage,
    ProfilePage,
    EventDetailPage,
    EventsHolderComponent,
    ContactsHolderComponent,
    ContactMoreComponent,
    AddeventpagePage,
    MyeventsPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,   
    AngularFireModule.initializeApp(config), 
    NgxQRCodeModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginScannerPage,
    LoginPage,
    EventsPage,
    ContactMoreComponent,
    ProfilePage,
    EventDetailPage,
    AddeventpagePage,
    MyeventsPage,
    SignUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    DatePicker,
    ImagePicker,
    FirebaseProvider,
    AngularFireAuth,
    AuthenticationServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {
}
