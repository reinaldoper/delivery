import DetailsBeer from "../pages/DetailsBeer"
import Itens from "../pages/Itens"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Logar from "../pages/Logar"
import { AppContextProvider } from '../components/AppContext';
import FinishPage from "../pages/FinishPage";
import { useSelector } from 'react-redux';
import { IReducer } from "../types/TTypes";

import {
  ChakraProvider
} from '@chakra-ui/react'

const Beers = () => {
  const update = useSelector((state: IReducer) => state.reducerFetch.update);
  console.log(update);
  
  return (
    <Router>
      <AppContextProvider>
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Logar />} />
            <Route path='/itens' element={ update ? <Itens />: <Logar />} />
            <Route path='/beer/:id' element={ update ? <DetailsBeer />: <Logar />} />
            <Route path='/finished' element={ update ? <FinishPage />: <Logar />} />
          </Routes>
        </ChakraProvider>
      </AppContextProvider>
    </Router>
  )
}

export default Beers
