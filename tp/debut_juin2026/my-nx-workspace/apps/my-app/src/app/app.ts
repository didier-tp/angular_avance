import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JsonPipe } from '@angular/common';


//standalone : true dans @Component de angular 18?,19,20,21+
@Component({
  imports: [ RouterOutlet , HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-app';

  /*
  onEssai(){
    this.title="my-app2";
  }
    */
}
