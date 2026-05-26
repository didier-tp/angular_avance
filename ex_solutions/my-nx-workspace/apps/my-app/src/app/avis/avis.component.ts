import { Component } from '@angular/core';
import { Avis, AvisState, AvisWithNum } from '../common/data/avis';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AvisActions } from '../common/store/actions/avis.actions';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-avis',
  imports: [FormsModule,AsyncPipe,JsonPipe],
  templateUrl: './avis.component.html',
  styleUrl: './avis.component.css',
})
export class AvisComponent {
  cloneAvis(a: Avis):Avis{ 
  return JSON.parse(JSON.stringify(a));}

avisState$!: Observable<AvisState>;
avis : Avis =  {  commentaire: 'bien ou pas',  note: 3}

 constructor( private store: Store<any> ) {}

ngOnInit(): void { 
   this.avisState$ = this.store.pipe(select(state => state.avis_ngrx)); 
}

onAddAvis() {
      this.store.dispatch(AvisActions.addAvis(
              { avis: this.cloneAvis(this.avis) }));
    }

onDeleteAvis(num:number) { this.store.dispatch(AvisActions.deleteAvis({ num: num }));    }
}
