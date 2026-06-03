import { Component, inject, signal } from '@angular/core';
import { CatfactService } from '../common/service/catfact.service';
import { Catfact } from '../common/data/catfact';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catfact',
  imports: [JsonPipe],
  templateUrl: './catfact.component.html',
  styleUrl: './catfact.component.css',
})
export class CatfactComponent {

  catfactService = inject(CatfactService); //pour v1

   activatedRoute = inject(ActivatedRoute); //pour v2

  catFact = signal<Catfact|null>(null)

  /*
  //v1 sans resolver
  ngOnInit(){
    this.catfactService.getCatFactDataWithDelay$(2000).subscribe({
       next: (catFactData)=>{ this.catFact.set(catFactData)},
       error: (err)=>{console.log(err)}
    });
  }
  */

   //v2 avec resolver
  ngOnInit(){
     this.activatedRoute.data.subscribe({
               next :   ( data ) => {
                         const catfactResolverData = data as { catfactData : Catfact } 
                        this.catFact.set(catfactResolverData.catfactData)  //...
                    } ,
            error : (error) => { console.log( " error : " + error ) ; }
      });
  }
}
