/*
* File: app.component.ts
* Author: Balogh Csenge
* Copyright: 2022, Balogh Csenge
* Group: Szoft_II_N
* Date: 2022-11-29
* Github: https://github.com/csengekulker/
* Licenc: GNU GPL
*/

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

  calcTime():void {

    this.time = this.length / (this.lengthfreq * this.freq);
  
  }
}
