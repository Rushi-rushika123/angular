import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  counter = 0;
  plus='+';
  minus='-';
  reset='0';
  fc(event:any){
    this.counter=event;
  }
  


  getTextColor() {
    if (this.counter < 0)
      return 'red'
    else if (this.counter > 0)
      return 'green'
    else return 'black'
  }
  
}
