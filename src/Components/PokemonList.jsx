import { useEffect, useState } from "react";
import ReactSwitch from 'react-switch'
import axios from "axios";
import { URL_ALL_POKEMONES } from "../Constants/endpoints";
import "../css/PokemonList.css";
import 'animate.css';
import { Container, Row, Col, InputGroup,NavDropdown } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import "bootstrap/dist/css/bootstrap.min.css";
import { PaginationControl } from "react-bootstrap-pagination-control";
import Pokeball from '../assets/pokeball.png'
import PokeCard from "./PokeCard";
import { useThemeContext } from "../Context/ThemeContext";
import { useTranslation } from 'react-i18next'

const PokemonList = () => {

  const {Theme, setTheme} = useThemeContext()
  const [t, i18n] = useTranslation("global")

  const [checked,setChecked] = useState(false)
  const [pokemones, setPokemones] = useState([]);
  const [allPokemones, setAllPokemones] = useState([]);
  const [list, setList] = useState([]);
  const [pokefilter, setPokeFilter] = useState("");
  const [offset, setOffSet] = useState(0);
  const [limit, setLimit] = useState(20);
  const [full, setFull] = useState(0);

  const handleSwitch = (nextChecked) => {
    setTheme( (state) => (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked)
    // console.log(nextChecked)
  
  }

  const getPokemones = async (offset) => {
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    axios.get(BASE_URL).then(async (res) => {
      const response = res.data;
      setPokemones(response.results);
      setList(response.results);
      setFull(response.count)
    });
  };

  const getAllPokemones = async () => {
    axios.get(URL_ALL_POKEMONES).then(async (res) => {
      const response = res.data;
      setAllPokemones(response.results);
    });
  };

  const search = async (e) => {

    if (e.keyCode == 13) {
      if (pokefilter.trim() != '') {
        setList([]);
        setTimeout(() => {
          setList(allPokemones.filter(p => p.name.includes(pokefilter)));
        }, 100);
      }
    } else if (pokefilter.trim() == '') {
      setList([]);
      setTimeout(() => {
        setList(pokemones);
      }, 100);
    }
  };

  const goPage = async (p) => {
    setList([]);
    await getPokemones(p == 1 ? 0 : (p - 1) * 20);
    setOffSet(p);
  };

  useEffect(() => {
    getPokemones(offset);
    getAllPokemones();
  }, []);

  return (
    <Container id={Theme} >
      <Row className="animate__animated animate__backInDown">
        <Col>
        <div className="pokeprofiler">
              <p>Pokemon Profiler </p>
              <img src={Pokeball} height={110} alt="" />
            </div>
            <div className="check-switch">
        <ReactSwitch 
            onChange={handleSwitch}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
            />
        </div>
          <InputGroup className="shadow mt-3">
            <InputGroupText>
              <i className="fa-solid fa-magnifying-glass"></i>
            </InputGroupText>
            <input
              value={pokefilter}
              onChange={(e) => {
                setPokeFilter(e.target.value.toLowerCase());
              }}
              onKeyUpCapture={search}
              placeholder={t("pokedex.search")}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        {list.map((pok, i) => (
          <PokeCard poke={pok} key={i} />
        ))}
        {list.length == 0 ? <Col className="text-center fs-2 mb-3">No hay concidencias</Col> : '' }
        <PaginationControl
          last={true}
          limit={limit}
          total={full}
          page={offset}
          changePage={page => goPage(page)}
        />
        <div className="settings">
        <i className="icon fa-solid fa-gear"></i> 
        <NavDropdown title={t("main.settings")} id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>Change to English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => i18n.changeLanguage("es")}>Cambiar a Español</NavDropdown.Item>
            </NavDropdown>
         </div>
         <br />
      </Row>
    </Container>
  );
};

export default PokemonList;
