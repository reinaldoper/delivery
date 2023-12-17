export interface TCervejas {
  id: number,
  image_url: string,
  brewers_tips: string,
  first_brewed: string,
  ingredients: {
    hops: [{
      name: string,
      attribute: string,
      amount: {
        unit: string,
        value: number,
      }
    }]
  },
  name: string,
  ph: number,
  volume: {
    unit: string,
    value: number,
  }
}

export interface TIdCervejs {
  id: number,
  name: string,
  tagline: string,
  first_brewed: string,
  description: string,
  image_url: string,
  abv: number,
  ibu: number,
  target_fg: number,
  target_og: number,
  ebc: number,
  srm: number,
  ph: number,
  attenuation_level: number,
  volume: {
    value: number,
    unit: string
  },
  boil_volume: {
    value: number,
    unit: string
  },
  method: {
    mash_temp: [
      {
        temp: {
          value: number,
          unit: string
        },
        duration: null
      }
    ],
    fermentation: {
      temp: {
        value: number,
        unit: string
      }
    },
    twist: null
  },
  ingredients: {
    malt: [
      {
        name: string,
        amount: {
          value: number,
          unit: string
        }
      }
    ],
    hops: [
      {
        name: string,
        amount: {
          value: number,
          unit: string
        },
        add: string,
        attribute: string
      },
    ],
    yeast: string
  },
  brewers_tips: string,
  contributed_by: string
}

export interface TLogar {
  email: string,
  password: string
}
