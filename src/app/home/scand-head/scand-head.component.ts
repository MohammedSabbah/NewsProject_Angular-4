import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scand-head',
  templateUrl: './scand-head.component.html',
  styleUrls: ['./scand-head.component.css']
})
export class ScandHeadComponent implements OnInit {

  private isBlock = 'none';
  private isBlock1 = 'none';
  private isBlock2 = 'none';
  private isBlock3 = 'none';
  private isBlock4 = 'none';
  

  constructor() { }

  ngOnInit() {
  }

  tempOn(){
    this.isBlock = 'block';        
    this.isBlock3 = 'block';
  }
  tempOut(){
    this.isBlock = 'none';            
    this.isBlock3 = 'none';
  }

  searchOn(){
    if(this.isBlock4 !== 'block'){
      this.isBlock = 'block';        
      this.isBlock4 = 'block';
    }else{
      this.isBlock = 'none';        
      this.isBlock4 = 'none';      
    }
  }

  prayOn(){
    this.isBlock = 'block';        
    this.isBlock2 = 'block';
  }
  prayOut(){
    this.isBlock = 'none';        
    this.isBlock2 = 'none';
  }

  currOn(){
    this.isBlock = 'block';        
    this.isBlock1 = 'block';
  }
  currOut(){
    this.isBlock = 'none';        
    this.isBlock1 = 'none';
  }

  display(){
    return this.isBlock;
  }

  isCurrency(){
     return this.isBlock1;
  }

  isPray(){
    return this.isBlock2;
  }

  isTemp(){
    return this.isBlock3;
  }

  isSearch(){
    return this.isBlock4;
  }

}
