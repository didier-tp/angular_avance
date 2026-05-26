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
  listeAvis : initialSubState
};

export const avisReducer = createReducer(
  initialState,
  on(AvisActions.addAvis, (state, { avis }) => { 
    const newLastId = state.lastId +1;
    let newAvis : AvisWithNum = { num: newLastId, commentaire:avis.commentaire , note: avis.note  }; 
    return { lastId:newLastId,  listeAvis : [...state.listeAvis, newAvis] }
  }),
  on(AvisActions.deleteAvis, (state, { num }) => { 
    let newSubState:AvisWithNum[]=[];
    for(let a of state.listeAvis){
       if(a.num != num)
          newSubState.push(a);
    }
    return { lastId:state.lastId,  listeAvis :newSubState }
  })
);
