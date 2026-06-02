import { Component, signal } from '@angular/core';
import {SelectorComponent} from '@my-nx-workspace/my-lib';

@Component({
  selector: 'app-welcome',
  imports: [SelectorComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  couleurChoisie = signal("?");
  couleursPossibles=["red","green" , "blue" , "orange"];
  onChoixCouleur(choix:string){
       this.couleurChoisie.set(choix);
  }
  
}
