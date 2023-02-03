import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() plus:string='';
  @Input() minus:string='';
  @Input() reset:string='';
  @Output() getval=new EventEmitter<number>(); 
  counter: number = 0;
  val : number=0;
 fun(a:string){
  if(a=='+') {
    this.counter++;
  }

  else if(a=='-') {
    this.counter--;
  }

  else {
    this.counter = 0;
  }
  this.getval.emit(this.counter);
 }


  


 
}
