import {Injectable} from '@angular/core';

declare var firebase: any;

@Injectable()
export class Fire {
  user: any = {};

  constructor() {
    var config = {
      apiKey: "AIzaSyBaciU0yZbveL2ScruoqmKdEZrgOmS1mTc",
      authDomain: "ansomessage-a298c.firebaseapp.com",
      databaseURL: "https://ansomessage-a298c.firebaseio.com",
      storageBucket: "",
    };

    firebase.initializeApp(config);
  }

  login(token: string, successCallback, errorCallback) {
    let credential = firebase.auth.FacebookAuthProvider.credential(token);

    firebase.auth().signInWithCredential(credential).then(response => {
      this.setUser(token, response.providerData[0]);
      successCallback();
    }, error => {
      errorCallback(error);
    })
  }

  getDB(){
    return firebase;
  }

  private setUser(token: string, authData: any){
    this.user.name = authData.displayName;
    this.user.photo = authData.photoURL;
    this.user.id = authData.uid;
    this.user.token = token;

    this.saveUser();
  }

  private saveUser(){
    firebase.database().ref('users').child(this.user.id).set({
      name: this.user.name,
      photo: this.user.photo
    })
  }
}
