import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../components/PokemonCard";

import s from "./style.module.css";

import {POKEMONS} from "../../mocks/pokemons";

const GamePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  const [pokemons, setPokemons] = useState(() => {
    return (
      POKEMONS.map(item => {
        return {
          ...item,
          isActive: false,
        }
      })
    );
  });

  const handlePokemonCardClick = (id) => {
    setPokemons((prevState) => {
      return (
        prevState.map(item => {
          return({
            ...item,
            isActive: (item.id === id) ? !item.isActive : item.isActive
          });
        })
      );
    });
  };

  return (
    <>
      <div>
        <h1>This is GamePage!</h1>
        <button onClick={handleClick}>
          to Home
        </button>
      </div>
      <div className={s.flex}>
        {
          pokemons.map(item =>
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
