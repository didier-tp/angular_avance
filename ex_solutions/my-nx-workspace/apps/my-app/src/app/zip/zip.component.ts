import { Component, inject , ChangeDetectorRef} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-zip',
  imports: [RouterLink , RouterOutlet],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.css',
})
export class ZipComponent {
 

  constructor(){
    console.log("ZipComponent (constructor)")
  }


}
