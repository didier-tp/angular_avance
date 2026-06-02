import { Component, signal } from '@angular/core';
import {SelectorComponent} from '@my-nx-workspace/my-lib';

@Component({
  selector: 'app-welcome',
  imports: [SelectorComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  couleurChoisie = signal("green");
  couleursPossibles=["red","green" , "blue" , "orange"];

  /*
   // v1: avec output 
  onChoixCouleur(choix:string){
       this.couleurChoisie.set(choix);
  }
 */
  
}
