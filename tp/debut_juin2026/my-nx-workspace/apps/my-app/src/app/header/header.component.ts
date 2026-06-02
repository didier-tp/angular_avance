import { Component, input, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
   titre = input("titre_par_defaut"); 

   ngOnChanges(changes: SimpleChanges){
      // console.log("changes="+ changes.value)
      console.log("dans ngOnChanges(): titre="+this.titre)
   }
   
   constructor(){
    console.log("dans constructor(): titre="+this.titre)
   }

   ngOnInit(){
    console.log("dans ngOnInit(): titre="+this.titre)
   }
}
