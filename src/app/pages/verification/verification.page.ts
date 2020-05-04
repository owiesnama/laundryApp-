import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {


  public FN:number;
  public SN:number;
  public TN:number;
  public LN:number;

  constructor() { }

  ngOnInit() {
  }

  moveFocus(nextElement,number) {
    if(number !== undefined && number !== ''&& number !== null)
    nextElement.focus();


  }

  handleVirfy(){
    console.log(this.FN,this.SN,this.TN,this.LN);

  }
}
