import DetailsBeer from "../pages/DetailsBeer"
import Itens from "../pages/Itens"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Logar from "../pages/Logar"
import { AppContextProvider } from '../components/AppContext';
import FinishPage from "../pages/FinishPage";

import {
  ChakraProvider
} from '@chakra-ui/react'

const Beers = () => {
  return (
    <Router>
      <AppContextProvider>
        <ChakraProvider>
          <Routes>
            <Route path='/' element={<Logar />} />
            <Route path='/itens' element={<Itens />} />
            <Route path='/beer/:id' element={<DetailsBeer />} />
            <Route path='/finished' element={<FinishPage />} />
          </Routes>
        </ChakraProvider>
      </AppContextProvider>
    </Router>
  )
}

export default Beers
