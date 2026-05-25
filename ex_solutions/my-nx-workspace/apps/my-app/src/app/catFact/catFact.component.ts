import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CatFactService } from '../common/service/cat-fact.service';
import { CatFact } from '../common/data/catFact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-fact',
  imports: [],
  templateUrl: './catFact.component.html',
  styleUrl: './catFact.component.css',
})
export class CatFactComponent {
  catFactService = inject(CatFactService);
  changeDetector = inject(ChangeDetectorRef);
  activatedRoute = inject(ActivatedRoute);

  catFact : CatFact | null = null;

  onRefreshCatFact(){
      this.catFactService.getCatFactWithDelay$(2000).subscribe({
           next: (catFact : CatFact)=>{this.catFact = catFact ; this.changeDetector.markForCheck();},
           error: (err )=>{console.log("erreur:" + JSON.stringify(err)) ; this.changeDetector.markForCheck();}
         });
  }

  ngOnInit(){

    //V1 (sans resolver): this.onRefreshCatFact();

    //V2 (avec resolver):
    this.activatedRoute.data.subscribe({
		next:( data ) => {
      const catFactResolverData = data as { catFact: CatFact};
			this.catFact=catFactResolverData.catFact;  //...
		  } ,
		 error: (error) => { console.log( " error : " + error ) ; }
    });
  }
}
