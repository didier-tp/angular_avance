import { Component, inputBinding, outputBinding, signal, twoWayBinding, viewChild, ViewContainerRef } from '@angular/core';
import {SelectorComponent} from '@my-nx-workspace/my-lib';

@Component({
  selector: 'app-dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css',
})
export class DynamicComponent {

message=signal("")  

container = viewChild.required("container", {read: ViewContainerRef});

  createDynamic() {
    //OK (avec signaux en input & output depuis angular 20) 
    this.container().createComponent(
      SelectorComponent,
      {bindings: [
          inputBinding("titre", () => "choix_couleur"),
          inputBinding("choixPossibles", () => ["rouge" , "vert" , "bleu" ]) /*
          outputBinding("choix", (selection:string) => {this.message.set(selection)}),*/
          ,twoWayBinding("choix",this.message)
      ]}
    );
  }

   closeDynamic(){
       this.container().clear();
   }
}
