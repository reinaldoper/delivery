import { Dispatch } from "react";
export interface IReducer {
  reducerFetch: {
    update: boolean;
    // Adicione outras propriedades conforme necessário
  };
  // Adicione outros reducers e suas propriedades conforme necessário
}

export interface ArticleAction {
  type: string;
  payload: boolean;
}

export interface LoginProps {
  dispatch: Dispatch<boolean>;
  update: boolean; // Substitua isso pelo tipo correto para a propriedade 'update'
}

export type DispatchType = (args: ArticleAction) => ArticleAction;
