import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ModalController } from 'ionic-angular';

import { Hymn } from "../pages/hymnal/hymn/hymn";

@Injectable()
export class HymnalReader {
  public hymnalTypes = ["old", "new"];
  private hymnalUrl = 'assets/hymnals/';
  hymnals: any = {};

  constructor(
    private http: Http,
    private modalCtrl: ModalController,
  ) {}

  loadHymnal(type) {
    return new Promise((resolve, reject) => {
      if (this.hymnalTypes.indexOf(type) > -1){
          this.http.get(this.hymnalUrl+type+".json")
                   .map(res => res.json())
                   .subscribe(data => resolve(this.hymnals[type] = data),
                              err => reject(err));
      } else {
          reject("No hymnal of that type present");
      }
    });
  }

  //Open a hymn selected
  openHymn(hymn: any, hymnalType: string) {
    let modal = this.modalCtrl.create(Hymn, {hymn: hymn, from: hymnalType});
    modal.present();
  }

  //Open hymn using number
  openHymnByNumber(num: any, hymnalType: string){
    let hymn = this.findHymnNumber(num, hymnalType);
    //Open Hymn
    if (hymn){
      this.openHymn(hymn, hymnalType);
    } else {
      console.error("No hymn found with that number"); //ToDO: Use toast controller
    }
  }

  //Find hymn by number
  findHymnNumber(num: string, hymnalType: string) {
    let result = this.hymnals[hymnalType].filter(curr => {
      return curr.number == parseInt(num);
    });
    return result ? result[0] : false;
  }

}
