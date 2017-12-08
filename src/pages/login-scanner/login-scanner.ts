import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
  scannedCode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private barCodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginScannerPage');
  }

  goToLogin() {
    console.log('go to login !');
    this.navCtrl.push(LoginPage);
  }

  scanCode(){
      this.barCodeScanner.scan().then(barcodeScanResult => {
        this.scannedCode = barcodeScanResult.text;
      })
  }


}
