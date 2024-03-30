import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Badge,
} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from "axios";
import PokeCard from "./PokeCard";
import { URL_POKEMON, URL_SPECIES } from "../Constants/endpoints";
import { useTranslation } from 'react-i18next'
import LoadGif from "../assets/pokeLoad.gif";
import 'animate.css';
import '../css/PokeView.css'

const PokemonView = () => {

  const [t, i18n] = useTranslation("global")

  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [species, setSpecies] = useState([]);
  const [habitat, setHabitat] = useState("Unknown");
  const [description, setDescription] = useState([]);
  const [skills, setSkills] = useState([])
  const [image, setImage] = useState([]);
  const [type, setType] = useState([]);
  const [stats, setStats] = useState([]);
  const [evolutions, setEvolutions] = useState([]);
  const [listEvolutions, setListEvolutions] = useState([]);
  const [cardClass, setcardClass] = useState("d-none");
  const [loadClass, setloadClass] = useState("");

  const getPokemon = async () => {
    const url = `${URL_POKEMON}${id}`;
    axios.get(url).then(async(res) => {
      const response = res.data;
      setPokemon(response);
      if (response.sprites.other.dream_world.front_default != null) {
        setImage(response.sprites.other.dream_world.front_default);
      } else {
        setImage(response.sprites.other["official-artwork"].front_default);
      }
      await getType(response.types)
      await getSkills(response.abilities)
      await getStats(response.stats)
      await getSpecies(response.species.name)
      setcardClass("");
      setloadClass("d-none");
    });
  };

  const getType = async (types) => {
    let listType = [];
    types.forEach( (t) => {
        axios.get(t.type.url).then(async(res) => {
           listType.push(res.data.names[7].name)
           setType(listType)
        })
    })
  }

  const getSkills = async (skill) => {
    let listSkills = [];
    skill.forEach( (sk) => {
        axios.get(sk.ability.url).then(async(res) => {
          listSkills.push(res.data.names[t("pokeview.lang")].name)
           setSkills(listSkills)
        })
    })
  }

  const getStats = async (stats) => {
    let listStats = [];
    stats.forEach( (s) => {
        axios.get(s.stat.url).then(async(res) => {
          listStats.push({'nombre': res.data.names[t("pokeview.lang")].name, 'valor':s.base_stat})
           setStats(listStats)
        })
    })
  }

  const getSpecies = async (spe) => {
    const url = `${URL_SPECIES}${spe}`;
    axios.get(url).then(async(res) => {
      const response = res.data;
      setSpecies(response);
      if (response.habitat != null) {
       await getHabitat(response.habitat.url);
      }
      await getDescription(response.flavor_text_entries);
      await getEvolutions(response.evolution_chain.url);
    });
  };

  
  const getHabitat = async (hab) => {
    axios.get(hab).then(async(res) => {
       setHabitat(res.data.names[t("pokeview.habitat")].name)
    })
  }

  const getEvolutions = async (evo) => {
    axios.get(evo).then(async(res) => {
       const response = res.data;
       let list = response.chain.species.url.replace('-species','')
       list += processEvolutions(response.chain)
       setEvolutions(list);
       let support = list.split(' ');
       let value = [];
      support.forEach(sp => {
        if(sp != "") {
          value.push({url:sp})
        }
      })
      setListEvolutions(value)
    })
  }

  const processEvolutions = (data) => {
    let res = ' ';
    if(data.evolves_to.length > 0) {
      res += data.evolves_to[0].species.url.replace('-species','')
      return res+' '+processEvolutions(data.evolves_to[0]);
    } else {
      return res;
    }
  }

  const getDescription = async (desc) => {
    let text = '';
    desc.forEach( (d) => {
        if(d.language.name == t("pokeview.desc")) {
            text = d.flavor_text;
        }
        if(text == '' && desc.length > 0) {
            text = desc[0].flavor_text;
        }
    })
    setDescription(text)
  }

  useEffect(() => {
    getPokemon();
  }, [id]);

  return (
    <div className="p-3">
      <Container className="borderView">
        <Row>
          <Col>
            <Card id="ViewStyle" className="shadow mt-3 mb-3">
              <CardBody className="mt-3">
                <Row>
                  <Col className="text-end">
                    <Link to={"/pokemones"} className="btn btn-danger">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i> {t("pokeview.home")}
                    </Link>
                  </Col>
                </Row>
                <Row className={loadClass}>
                  <Col md="12">
                    <img src={LoadGif} className="w-100"></img>
                  </Col>
                </Row>
                <Row className={cardClass}>
                  <Col md="6">
                    <CardText className="TitleCard text-capitalize">
                      {pokemon.name}
                    </CardText>
                    <CardText className="DescriptionCard fs-3">{description}</CardText>
                    <CardText className="fs-5">
                      {t("pokeview.height")} <b>{pokemon.height / 10} m</b>
                      <br />
                      {t("pokeview.weight")} <b>{pokemon.weight / 10} kg</b>
                    </CardText>
                    <CardText className="TextStyle fs-5">
                    <i className="fa-solid fa-tag"></i> {t("pokeview.text-type")} { type.map( (t,i) => (
                            <Badge pill className="me-1 bg-primary" key={i}>
                                {t}
                            </Badge>
                        ) ) }
                    </CardText>
                    <CardText className="TextStyle fs-5">
                    <i className="fa-solid fa-book"></i> {t("pokeview.text-skills")} { skills.map( (skill,i) => (
                            <Badge pill className="me-1 bg-primary" key={i}>
                                {skill}
                            </Badge>
                        ) ) }
                    </CardText>
                    <CardText className="TextStyle fs-5 text-capitalize">
                    <i className="fa-solid fa-location-dot"></i> Habitat: <b>{habitat}</b>
                    </CardText>
                  </Col>
                  <Col md="6">
                    <img src={image} className="img-fluid animate__animated animate__bounceInRight"></img>
                  </Col>
                  <Col md='12 mt-3'>
                    <CardText className="fs-4 text-center"><b>{t("pokeview.stats")}</b></CardText>
                  </Col>
                  {stats.map( (st,i) => (
                    <Row key={i}>
                      <Col xs='6' md='3'><b>{st.nombre}</b></Col>
                      <Col xs='6' md='8'>
                        <ProgressBar className="h-50 w-100 my-2" variant="info" now={st.valor} label={`${st.valor}%`} />
                      </Col>
                    </Row>
                  ))}
                  <Col md='12 mt-3'>
                  <CardText className="fs-4 text-center"><b>{t("pokeview.evolution")}</b></CardText>
                  <br />
                  </Col>
                  <div className="evoluciones">
                  {listEvolutions.map( (evo,i) => (
                    <PokeCard poke={evo} key={i} />
                  ))}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};

export default PokemonView;
