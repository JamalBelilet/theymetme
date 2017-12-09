import { Component } from '@angular/core';
import {AlertCmp, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from '../login/login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {TabsPage} from '../tabs/tabs';
import { FirebaseProvider } from '../../providers/firebase/firebase';


/**
 * Generated class for the LoginScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-scanner',
  templateUrl: 'login-scanner.html',
})
export class LoginScannerPage {
  isLoggedIn: any;
  scannedCode = null;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,private barCodeScanner: BarcodeScanner, public firebaseProvider: FirebaseProvider) {
    this.isLoggedIn = navParams.get('isLoggedIn') || false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginScannerPage');
  }

  goToLogin() {
    console.log('go to login !');
    this.navCtrl.push(LoginPage);
  }

  goTologscanner() {
    this.navCtrl.push(LoginScannerPage, {isLoggedIn: false});
  }

  scanCode(){
      this.barCodeScanner.scan().then(barcodeScanResult => {

        let event = {
          name: (JSON.parse(barcodeScanResult.text)).name,
          address: (JSON.parse(barcodeScanResult.text)).address,
          dates: {
            startDate: (JSON.parse(barcodeScanResult.text)).dates.startDate,
            endDate: (JSON.parse(barcodeScanResult.text)).dates.endDate
          }
        };
        let alert = this.alertCtrl.create();
        alert.setTitle(event.name);
        alert.setSubTitle(event.address)
        alert.setMessage('de :  '+ event.dates.startDate + ' a : ' + event.dates.endDate );
        let company = "my Company";
        let mail = "email@eamil.email";
        let phone = "0673477797";

        alert.addInput({
          id: "company",
          type: 'checkbox',
          label: 'company',
          name: 'company',
          value: JSON.stringify({"company":company}),
        });

        alert.addInput({
          type: 'checkbox',
          label: 'phone number',
          name: 'phone number',
          value: JSON.stringify({"phone":phone}),
        });

        alert.addInput({
          type: 'checkbox',
          label: 'email',
          name: 'email',
          value: JSON.stringify({"email":mail}),
          checked: true

        });

        alert.addButton('Cancel');
        alert.addButton({
          text: 'obtenir le badge',
          handler: data => {
            console.log('Checkbox data:', data);
            this.firebaseProvider.addNewEvent(JSON.parse(barcodeScanResult.text),data);
            // this.testCheckboxOpen = false;
            // this.testCheckboxResult = data;
          }
        });
        alert.present();





        this.scannedCode = barcodeScanResult.text;
      })
  }

  goToProfile() {
    this.navCtrl.setRoot(TabsPage);

  }




}
