import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../../../components/PokemonCard";
import Button from "../../../../components/Button";

import {FirebaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

import s from "./style.module.css";

const StartPage = () => {
  const history = useHistory();
  const handleToStartGameClick = () => {
    history.push('/game/board');
  };

  const firebaseContext = useContext(FirebaseContext);
  const pokemonsContext = useContext(PokemonContext);

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebaseContext.getPokemonsSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const handlePokemonCardClick = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          // pokemon.isActive = (pokemon.isActive) ? !pokemon.isActive : true;
          pokemon.isSelected = (pokemon.isSelected) ? !pokemon.isSelected : true;
          pokemonsContext.onSelectPokemon(pokemon);
        };

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  return (
    <>
      <div className={s.buttonWrap}>
        <Button
          title="Start Game"
          onClick={handleToStartGameClick} />
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
              isActive={true}
              isSelected={item.isSelected}
              minimize={false}
              onPokemonCardClick={handlePokemonCardClick}
            />)
        }
        </div>
    </>
  );
};

export default StartPage;
