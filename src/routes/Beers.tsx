import DetailsBeer from "../pages/DetailsBeer"
import Itens from "../pages/Itens"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Logar from "../pages/Logar"
import { AppContextProvider } from '../components/AppContext';
import FinishPage from "../pages/FinishPage";
import { useStore } from "../store/state";

import {
  ChakraProvider
} from '@chakra-ui/react'

const Beers = () => {
  const login = useStore((state) => state.logar)
  console.log("login: ", login);
  
  
  return (
    <Router>
      <AppContextProvider>
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Logar />} />
            <Route path='/itens' element={ login ? <Itens />: <Logar />} />
            <Route path='/beer/:id' element={ login ? <DetailsBeer />: <Logar />} />
            <Route path='/finished' element={ login ? <FinishPage />: <Logar />} />
          </Routes>
        </ChakraProvider>
      </AppContextProvider>
    </Router>
  )
}

export default Beers
