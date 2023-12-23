export interface StoreState {
  logar: boolean;
}

export interface StoreActions {
  insertLogar: () => void;
  resetLogar: () => void;
}