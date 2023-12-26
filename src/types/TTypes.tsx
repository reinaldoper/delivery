
import { TIdCervejs } from '../services/Types';

export interface StoreState {
  logar: boolean;
  add: TIdCervejs[];
}

export interface StoreActions {
  insertLogar: () => void;
  resetLogar: () => void;
  setAdd: (payload: TIdCervejs[]) => void;
}