import { create } from 'zustand';
import { StoreActions, StoreState } from '../types/TTypes';



export const useStore = create<StoreState & StoreActions>((set) => ({
  logar: false,
  insertLogar: () => set({ logar:true}),
  resetLogar: () => set({ logar: false }),
}));