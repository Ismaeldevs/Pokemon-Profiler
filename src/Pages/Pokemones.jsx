import Footer from "../Components/Footer"
import PokemonList from "../Components/PokemonList"
import { useThemeContext } from "../Context/ThemeContext"

const Pokemones = () => {
  const {Theme,setTheme} = useThemeContext()

  return (
    <>
      <PokemonList/>
      <Footer/>
    </>
  )
}

export default Pokemones
