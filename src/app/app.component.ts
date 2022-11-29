import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idomunka';
  length !: number;
  lengthfreq !: number;
  freq !: number;
  
  time !: number;

  calcArea():void {
    
    console.log('jo')
  }
}
