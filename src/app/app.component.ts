import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fruitList: string[]; 

  constructor(){
    this.fruitList = ['Melon','Lemon', 'Apple', 'Bluberry', 'Banana', 'Pear']; 
  }
}
