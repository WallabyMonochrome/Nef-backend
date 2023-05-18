export enum NefturianAlignment {
  Cyberians = "Cyberians",
  Samurians = "Samurians"
}


export type Nefturian = {
  id: number
  name: string;
  alignment: NefturianAlignment;
  imageUrl: string;
  attributes: {
    str: number;
    char: number;
    mag: number;
    def: number;
  };
};

export type WarRecapData = {
  Cyberians: {
    quantity: number
  },
  Samurians: {
    quantity: number
  }
  FFA: {
    quantity: number
  }
}