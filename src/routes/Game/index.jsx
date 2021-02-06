import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../components/PokemonCard";
import Button from "../../components/Button";

import database from "../../service/firebase.js";
import {random} from "../../service/utils.js";

import s from "./style.module.css";

import {POKEMONS} from "../../mocks/pokemons.js";
import {RANDOM_ID_MIN_MAX} from "../../const.js";

const GamePage = () => {
  const history = useHistory();
  const handleToHomeClick = () => {
    history.push('/');
  };

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const handlePokemonCardClick = (id) => {
    setPokemons(prevState => {
      const state = Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.isActive = (pokemon.isActive) ? !pokemon.isActive : true;
          database.ref('pokemons/' + item[0]).set(pokemon);
        };

        acc[item[0]] = pokemon;

        return acc;
      }, {});

      return state;
    });
  };

  const handleAddPokemonClick = () => {
    const newPokemon = {
      ...POKEMONS[0],
      id: random(RANDOM_ID_MIN_MAX.MIN, RANDOM_ID_MIN_MAX.MAX)
    };

    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(newPokemon);
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
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
              key={item.id}
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
