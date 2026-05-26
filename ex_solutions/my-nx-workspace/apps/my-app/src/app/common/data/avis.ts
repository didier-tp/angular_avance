export interface Avis {
  commentaire: string;
  note: number;  /* entre 1 et 5*/
}

export interface AvisWithNum extends Avis {
  num: number;
}

export interface AvisState {
  lastId: number;
  listeAvis : ReadonlyArray<AvisWithNum>;
}
