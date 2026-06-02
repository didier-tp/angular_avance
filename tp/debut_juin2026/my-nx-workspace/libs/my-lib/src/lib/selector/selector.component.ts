import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-selector',
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
})
export class SelectorComponent {
    titre=input("selection de ...");
    choixPossibles=input<string[]>([]);
    selectionInterne:string|null=null;
    choix=output<string>();

    onSelection(c:string){
      this.selectionInterne=c;
      this.choix.emit(this.selectionInterne);
    }
}
