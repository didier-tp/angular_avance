import { Component, input, model, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-selector',
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
})
export class SelectorComponent {
   title=input("titre");
   backColor=input("lightgrey");
   width=input("100%");
    values=input<string[]>([]);
    //choix=output<string>(); // v1
    choix=model(""); //v2 

    selection="";//v1

    /*
    ngOnInit(){
      this.selection=this.choix(); //v2
    }*/

    ngOnChanges(changes: SimpleChanges){
      this.selection=this.choix(); 
      //v2 améliorée (ngOnInit() appelé qu'une seule fois au début , ngOnChanges() réappelé plusieurs fois si besoin)
    }
    

    onSelect(val:string){
      this.selection=val;
      //this.choix.emit(val);//v1
      this.choix.set(val); //v2
    }
}
