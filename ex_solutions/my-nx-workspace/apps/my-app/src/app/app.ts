import { Component, inject } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, Event, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  imports: [HeaderComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-app';

  router = inject(Router);
  asyncLoadCount = 0;

  constructor(){
     this.router.events.subscribe(
			( event: Event ) : void => {
				if ( event instanceof RouteConfigLoadStart ) {
					this.asyncLoadCount++;
          console.log(">> start loading component or children routes: asyncLoadCount="+this.asyncLoadCount
           + " RouteConfigLoadStart event="+JSON.stringify(event)
          );
				} else if ( event instanceof RouteConfigLoadEnd ) {
					this.asyncLoadCount--;
          console.log("<< end loading component or children routes: asyncLoadCount="+this.asyncLoadCount);
				}
        
			});
  }

}
