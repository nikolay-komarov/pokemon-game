import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../components/PokemonCard";
import Button from "../../components/Button";

import {FirebaseContext} from "../../context/firebaseContext";

import {random} from "../../service/utils.js";
import {RANDOM_ID_MIN_MAX} from "../../const.js";

import s from "./style.module.css";

import {POKEMONS} from "../../mocks/pokemons.js";

const GamePage = () => {
  const history = useHistory();
  const handleToHomeClick = () => {
    history.push('/');
  };

  const firebase = useContext(FirebaseContext);

  const [pokemons, setPokemons] = useState({});

  const getPokemons = async () => {
    const response = await firebase.getPokemonsOnce();
    setPokemons(response);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handlePokemonCardClick = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.isActive = (pokemon.isActive) ? !pokemon.isActive : true;
          firebase.postPokemon(item[0], pokemon);
        };

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  const handleAddPokemonClick = () => {
    const newPokemon = {
      ...POKEMONS[0],
      id: random(RANDOM_ID_MIN_MAX.MIN, RANDOM_ID_MIN_MAX.MAX)
    };

    firebase.addPokemon(newPokemon, async () => {
      await getPokemons();
    });
  };

  return (
    <>
      <div>
        <h1>This is GamePage!</h1>
        <Button title="to Home" onClick={handleToHomeClick} />
      </div>
      <div className={s.buttonWrap}>
        <Button title="Add New Pokemon" onClick={handleAddPokemonClick} />
      </div>
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, item]) =>
            <PokemonCard
              key={key}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
              isActive={item.isActive}
              onPokemonCardClick={handlePokemonCardClick}
            />)
        }
        </div>
    </>
  );
};

export default GamePage;
