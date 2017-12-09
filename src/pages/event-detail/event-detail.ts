import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js'; 
/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  user: any = {
    name: 'Searious Peace',
    company: 'Be Small'
  };
  event;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = this.navParams.data;
  }

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      
                 type: 'line',
                 data: {
                     datasets: [
                         {
                             label: "My First dataset",
                             fill: false,
                             lineTension: 0.1,
                             backgroundColor: "rgba(75,192,192,0.4)",
                             borderColor: "rgba(75,192,192,1)",
                             borderCapStyle: 'butt',
                             borderDash: [],
                             borderDashOffset: 0.0,
                             borderJoinStyle: 'miter',
                             pointBorderColor: "rgba(75,192,192,1)",
                             pointBackgroundColor: "#fff",
                             pointBorderWidth: 1,
                             pointHoverRadius: 5,
                             pointHoverBackgroundColor: "rgba(75,192,192,1)",
                             pointHoverBorderColor: "rgba(220,220,220,1)",
                             pointHoverBorderWidth: 2,
                             pointRadius: 1,
                             pointHitRadius: 10,
                             data: [65, 59, 80, 81, 56, 55, 40],
                             spanGaps: false,
                         },   
                     ]
                 },
                 options: {
                  legend: {
                     display: false
                  },
                  tooltips: {
                     enabled: false
                  }
             }
      
             });  }

  goBack() {
    this.navCtrl.pop();
  }


}
