import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacebookLogin} from '../../util/facebook-login'
import {Fire} from '../../util/fire';
import {MenuPage} from '../menu/menu';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private fire: Fire) {

  }

  onLogin() {
    FacebookLogin.login(response => {
      this.fire.login(response.accessToken.toString(), () => {
        this.navCtrl.setRoot(MenuPage);
      }, (error) => {
        alert(error.errorMessage);
      })
    }, error => {
      alert(error.errorMessage);
    });
  }
}
