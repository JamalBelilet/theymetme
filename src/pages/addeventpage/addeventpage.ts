import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DatePicker} from '@ionic-native/date-picker';

/**
 * Generated class for the AddeventpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addeventpage',
  templateUrl: 'addeventpage.html',
})
export class AddeventpagePage {

  dates = {
    startDate: 'select start date',
    endDate: 'select end date'
  }
  constructor(private datePicker: DatePicker, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventpagePage');
  }

  generateQrCode() {
    setTimeout(() => {
      window.open(`http://krep.000webhostapp.com?val=${encodeURI(this.navParams.data.phone)}`, '_system');
    }, 100);
  }

  showDatePicker() {

    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  getStartDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.dates.startDate = date.toDateString(),
      err => console.log('no date was selected !')
    );
  }
  getEndDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.dates.endDate = date.toDateString(),
      err => console.log('no date was selected !')
    );
  }
}
