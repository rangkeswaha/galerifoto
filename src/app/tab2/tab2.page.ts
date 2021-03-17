import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  random = 0;
  answer = false;
  answerangka : number;
  guide = "";

  ngOnInit(){
    this.random = Math.floor(Math.random() * (10 - 1) + 1);
    this.answer = false;
  }

  cekangka(){
    if (this.answerangka == this.random){
      this.answer = true;
      this.guide = "Tebakan Betul";
    } 
    else if (this.answerangka > this.random){
      this.guide = "Angka Terlalu Besar";
    }
    else if (this.answerangka < this.random){
      this.guide = "Angka Terlalu Kecil";
    }
  }

}
