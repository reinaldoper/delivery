import React, { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";
import { TIdCervejs } from "../services/Types";

interface IAppContext {
  add: TIdCervejs[];
  setAdd: Dispatch<SetStateAction<TIdCervejs[]>>;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [add, setAdd] = useState<TIdCervejs[]>(() => {
    const storedData = localStorage.getItem('carrinho');
    return storedData ? JSON.parse(storedData) : [];
  });

  return (
    <AppContext.Provider value={{ add, setAdd }}>
      {children}
    </AppContext.Provider>
  );
};
