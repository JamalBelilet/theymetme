import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {DatePicker} from '@ionic-native/date-picker';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker';

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
  };
  eventQrCodeData = {
    name: 'Algeria2.0',
    address: 'CyberParc de Sidi Abdellah, Alger',
    dates: {
      startDate: 'select start date',
      endDate: 'select end date'
    }
  };

  __ev = 'fdsafweofnasdofjasdlf'


  _eventQrCodeData = JSON.stringify(this.eventQrCodeData);

  constructor(private platform: Platform,private imagePicker: ImagePicker, private datePicker: DatePicker, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventpagePage');
  }

  generateQrCodePDF() {
    setTimeout(() => {
      window.open(`http://krep.000webhostapp.com?val=${encodeURI(JSON.stringify(this.eventQrCodeData))}`, '_system');
    }, 100);
  }

  chooseImage() {


    this.platform.ready().then(() => {

      this.imagePicker.getPictures({maximumImagesCount: 1}).then((imageURIsArray) => {
        console.log('Image URI: ' + imageURIsArray[0]);
      }, (err) => {
      });

    });


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
      date => {
        this.eventQrCodeData.dates.startDate = date.toDateString()
        this._eventQrCodeData = JSON.stringify(this.eventQrCodeData);

      },
      err => console.log('no date was selected !')
    );
  }

  getEndDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.eventQrCodeData.dates.endDate = date.toDateString()
        this._eventQrCodeData = JSON.stringify(this.eventQrCodeData);

      },
      err => console.log('no date was selected !')
    );
  }
}
