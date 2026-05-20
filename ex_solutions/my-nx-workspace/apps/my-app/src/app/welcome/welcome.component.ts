import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {TogglePanelComponent , SelectorComponent, ConfirmDialogComponent} from '@my-nx-workspace/my-lib';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome',
  imports: [TogglePanelComponent,SelectorComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  couleurChoisie = "blue"; //par défaut


  readonly dialog = inject(MatDialog); 
  changeDetector = inject(ChangeDetectorRef);

 onDialogConfirmResetToBlue(){
    ConfirmDialogComponent.confirmDialog$(this.dialog,"reset couleurChoisie to blue ?")
    .subscribe( (isOk : boolean ) => {
      if(isOk) this.couleurChoisie="blue";
      console.log("couleurChoisie="+this.couleurChoisie);
      this.changeDetector.markForCheck();
    });
  }
}
