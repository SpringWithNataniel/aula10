import { Utils } from './../../entity/Utils';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: Http) {

  }

  public getPublicEndpoint() {
    return this.http.get(Utils.getUrlBackend() + "public");
  }

}
