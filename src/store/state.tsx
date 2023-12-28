import { create } from 'zustand';
import { StoreActions, StoreState, defaultTIdCervejs } from '../types/TTypes';
import { TIdCervejs } from '../services/Types';



export const useStore = create<StoreState & StoreActions>((set) => ({
  logar: false,
  insertLogar: () => set({ logar:true}),
  resetLogar: () => set({ logar: false }),
  add: [],
  abv: { ...defaultTIdCervejs },
  setAdd: (payload: TIdCervejs[]) => set(() => ({ add: payload })),
  setAbv: (payload: TIdCervejs) => set(() => ({ abv: payload })),
}));