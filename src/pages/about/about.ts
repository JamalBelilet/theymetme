import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  notifications = [
    {
      title: "A hermetic form of futility is the booda-hood.",
      img: "assets/imgs/fetured-img.png",
      content: "Not inward places or chaos, realize the definition.Be prime.Never absorb the therapist, for you cannot reject it.",
      date: "02-15-2019"
    },
    {
      title: "A shining form of truth is the art. .",
      img: "assets/imgs/fetured-img.png",
      content: "Life happens when you remember shame so balanced that whatsoever you are experimenting is your history. .",
      date: "02-15-2019"
    },
    {
      title: "The saint loves attraction which is not wonderful. .",
      img: "assets/imgs/fetured-img.png",
      content: "Torus de teres buxum, perdere bromium! Cum mortem ire, omnes vitaes imperium talis, castus habenaes.",
      date: "02-15-2019"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
