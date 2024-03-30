import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import PokeView from './Pages/PokeView'
import Pokemones from './Pages/Pokemones'
import './App.css'
import { useThemeContext } from './Context/ThemeContext'

function App() {

  const {Theme,setTheme} = useThemeContext()

  return (
    <div id={Theme}>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pokemones' element={<Pokemones/>} />
      <Route path='pokemon/:id' element={<PokeView/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
