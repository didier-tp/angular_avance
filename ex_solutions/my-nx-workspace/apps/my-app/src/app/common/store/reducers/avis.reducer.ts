import { createReducer, on } from '@ngrx/store';
import { Avis, AvisState, AvisWithNum } from '../../data/avis';
import { AvisActions } from '../actions/avis.actions';


export const initialSubState: ReadonlyArray<AvisWithNum> = [
  {
    num: 1,
    commentaire: 'bien',
    note: 4
  },
];

export const initialState: AvisState= {
  lastId: 1,
  listeAvis : initialSubState,
  moyenne : 4
};

function calculerMoyenne( listeAvis: ReadonlyArray<AvisWithNum>):number{
   let somme=0;
   let n = 0;
   for(const a of listeAvis){
    somme+=Number(a.note);
    n++;
   }
   return somme/n;
}

export const avisReducer = createReducer(
  initialState,
  on(AvisActions.addAvis, (state, { avis }) => { 
    const newLastId = state.lastId +1;
    let newAvis : AvisWithNum = { num: newLastId, commentaire:avis.commentaire , note: avis.note  }; 
    let newListeAvis = [...state.listeAvis, newAvis];
    return { lastId : newLastId,  listeAvis : newListeAvis , moyenne : calculerMoyenne(newListeAvis)}
  }),
  on(AvisActions.deleteAvis, (state, { num }) => { 
    let newListeAvis:AvisWithNum[]=[];
    for(let a of state.listeAvis){
       if(a.num != num)
          newListeAvis.push(a);
    }
    return { lastId : state.lastId,  listeAvis : newListeAvis , moyenne: calculerMoyenne(newListeAvis)}
  })
);
