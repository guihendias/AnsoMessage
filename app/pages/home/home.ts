import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Messages} from '../../util/messages';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  messagesList: any = [];
  constructor(public navCtrl: NavController, private messages : Messages) {
    this.initPage();
  }

  initPage(){
    this.messages.get(message => {
      this.messagesList.push(message);
    })
  }
}
