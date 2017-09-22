import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
      , public formBuilder: FormBuilder,
       public nav: NavController) {

      this.loginForm = formBuilder.group({
          email: [''],
          password: ['']
      });

  }

  loginUser(): void {
      if (!this.loginForm.valid) {
          console.log(this.loginForm.value);
      } else {
         

          this.loading.present();
      }
  }

 
}
