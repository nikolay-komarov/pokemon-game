import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../components/PokemonCard";

import database from "../../service/firebase.js";
import {random} from "../../service/utils";

import s from "./style.module.css";

import {POKEMONS} from "../../mocks/pokemons";
import Button from "../../components/Button";

const GamePage = () => {
  const history = useHistory();
  const handleClick = () => {
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
      id: random(200,100)
    };

    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(newPokemon);
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  };

  return (
    <>
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
