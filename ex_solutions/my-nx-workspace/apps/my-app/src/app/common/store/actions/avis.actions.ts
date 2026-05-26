import { createAction, createActionGroup, props } from '@ngrx/store';
import { Avis } from '../../data/avis';


export const AvisActions = createActionGroup({
  source: 'Avis',
  events: {
    'addAvis': props<{ avis: Avis }>(),
    'deleteAvis': props<{num: number }>(),
  },
});


