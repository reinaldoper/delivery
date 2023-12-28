
import { TIdCervejs } from '../services/Types';

export interface StoreState {
  logar: boolean;
  add: TIdCervejs[];
  abv: TIdCervejs;
}

export interface StoreActions {
  insertLogar: () => void;
  resetLogar: () => void;
  setAdd: (payload: TIdCervejs[]) => void;
  setAbv: (payload: TIdCervejs) => void;
}

export const defaultTIdCervejs: TIdCervejs = {
  id: 0,
  name: '',
  tagline: '',
  first_brewed: '',
  description: '',
  image_url: '',
  abv: 0,
  ibu: 0,
  target_fg: 0,
  target_og: 0,
  ebc: 0,
  srm: 0,
  ph: 0,
  attenuation_level: 0,
  volume: {
    value: 0,
    unit: '',
  },
  boil_volume: {
    value: 0,
    unit: '',
  },
  method: {
    mash_temp: [
      {
        temp: {
          value: 0,
          unit: '',
        },
        duration: null,
      },
    ],
    fermentation: {
      temp: {
        value: 0,
        unit: '',
      },
    },
    twist: null,
  },
  ingredients: {
    malt: [
      {
        name: '',
        amount: {
          value: 0,
          unit: '',
        },
      },
    ],
    hops: [
      {
        name: '',
        amount: {
          value: 0,
          unit: '',
        },
        add: '',
        attribute: '',
      },
    ],
    yeast: '',
  },
  brewers_tips: '',
  contributed_by: '',
};