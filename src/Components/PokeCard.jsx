import {useState, useEffect} from 'react'
import axios from 'axios'
import {Col,Card,CardBody,CardFooter,CardImg} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LoadGif from '../assets/pokeLoad.gif'
import '../css/Cards.css'

const PokeCard = (params) => {

    const [t, i18n] = useTranslation("global")  

    const [pokemon,setPokemon] = useState([])
    const [imagen,setImagen] = useState('')
    const [cardClass,setcardClass] = useState('d-none')
    const [loadClass,setloadClass] = useState('')

    const getPokemones = () => {
        const data = params.poke.url;
        axios.get(data).then(async(res) => {
            const response = res.data;
            setPokemon(response);
            if(response.sprites.other.dream_world.front_default != null) {
                setImagen(response.sprites.other.dream_world.front_default)
            } else {
                setImagen(response.sprites.other['official-artwork'].front_default)
            }
            setcardClass('')
            setloadClass('d-none')
        })
    }

    useEffect(() => {
        getPokemones()
    }, [])

  return (
    <Col sm='4' lg='3' className='mb-3'>
        <Card className={'shadow border-4 border-warning '+loadClass}>
        <CardImg src={LoadGif} height='200' className='p-3' ></CardImg>
        </Card>
      <Card className='animate__animated animate__zoomIn card-hover'>
        <CardImg src={imagen} height='150' className='p-2' />
        <CardBody className='p-3'>
          <div className='container-pokeid'>
            <div className='PokeID'># {pokemon.id} </div>
            </div>
            <div className='text-center'>
            <label className='fs-4 text-capitalize'> {pokemon.name}</label>
            </div>
        </CardBody>
        <CardFooter className='footer bg-light'>
            <Link to={'/pokemon/'+pokemon.name} className='btn btn-light text-decoration-none'><i className="fa-solid fa-arrow-up-right-from-square"></i> {t("pokedex.details")}</Link>
        </CardFooter>
      </Card>
    </Col>
  )
}

export default PokeCard
