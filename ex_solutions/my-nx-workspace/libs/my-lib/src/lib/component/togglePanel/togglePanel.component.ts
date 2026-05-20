import { Component, input, model } from '@angular/core';

@Component({
  selector: 'lib-toggle-panel',
  imports: [],
  templateUrl: './togglePanel.component.html',
  styleUrl: './togglePanel.component.css',
})
export class TogglePanelComponent {
  panelOpenState=model(false); 
  title = input<string>( 'default panel title' );
  constructor() { }
}
