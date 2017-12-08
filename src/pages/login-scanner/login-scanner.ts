import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {TabsPage} from '../tabs/tabs';
import {AddeventpagePage} from '../addeventpage/addeventpage';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private barCodeScanner: BarcodeScanner) {
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
        this.scannedCode = barcodeScanResult.text;
      })
  }

  goToProfile() {
    this.navCtrl.setRoot(TabsPage);

  }




}
