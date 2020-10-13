import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewUpUEPage } from '../NewUpUE/NewUpUE';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  
  constructor(public navCtrl: NavController, public http: HttpClient) {
  }
  
// fonction qui utilise la méthode Push pour accéder à NewUpUEPage
  onGoToNewUpUE(){
    this.navCtrl.push(NewUpUEPage);
  }
}
