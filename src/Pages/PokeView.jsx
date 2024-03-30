import Footer from '../Components/Footer'
import PokemonView from '../Components/PokemonView'
import { useThemeContext } from '../Context/ThemeContext'

const PokeView = () => {

  const {Theme,setTheme} = useThemeContext()

  return (
    <div>
      <PokemonView/>
      <Footer/>
    </div>
  )
}

export default PokeView
