import React, { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import { TIdCervejs } from "../services/Types";

interface IAppContext {
  add: TIdCervejs[];
  setAdd: Dispatch<SetStateAction<TIdCervejs[]>>;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [add, setAdd] = useState<TIdCervejs[]>(() => {
    try {
      const storedData: string | null = localStorage.getItem('carrinho');
      
      
  
      if (storedData && typeof storedData === 'string') {
        return JSON.parse(storedData);
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erro ao fazer parse dos dados do localStorage:', error);
      return [];
    }
  });

  return (
    <AppContext.Provider value={{ add, setAdd }}>
      {children}
    </AppContext.Provider>
  );
};
