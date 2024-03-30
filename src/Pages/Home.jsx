import Footer from "../Components/Footer"
import MainHome from "../Components/MainHome"
import { useThemeContext } from "../Context/ThemeContext"

const Home = () => {

  const {Theme,setTheme} = useThemeContext()

  return (
    <>
     <MainHome/>
     <Footer />
    </>
  )
}

export default Home
