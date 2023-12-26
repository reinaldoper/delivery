import { create } from 'zustand';
import { StoreActions, StoreState } from '../types/TTypes';
import { TIdCervejs } from '../services/Types';



export const useStore = create<StoreState & StoreActions>((set) => ({
  logar: false,
  insertLogar: () => set({ logar:true}),
  resetLogar: () => set({ logar: false }),
  add: [],
  setAdd: (payload: TIdCervejs[]) => set(() => ({ add: payload })),

}));