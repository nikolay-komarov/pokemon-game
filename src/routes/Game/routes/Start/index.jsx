import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../../../components/PokemonCard";
import Button from "../../../../components/Button";

import {FirebaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

import s from "./style.module.css";

const StartPage = () => {
  const history = useHistory();
  const handleStartGameClick = () => {
    history.push('/game/board');
  };

  const firebaseContext = useContext(FirebaseContext);
  const pokemonsContext = useContext(PokemonContext);

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebaseContext.getPokemonsSoket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebaseContext.offPokemonsSoket();
  }, []);

  const handleActiveSelected = (key) => {
    const pokemon = {...pokemons[key]};
    pokemonsContext.onSelectedPokemons(key, pokemon);

    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }));
  };

  return (
    <>
      <div className={s.buttonWrap}>
        <Button
          title="Start Game"
          disabled={(Object.keys(pokemonsContext.pokemons1).length < 5)}
          onClick={handleStartGameClick}
        />
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
              isSelected={item.selected}
              classsName={s.card}
              minimize={false}
              onPokemonCardClick={() => {
                if ((Object.keys(pokemonsContext.pokemons1).length < 5) || item.selected) {
                  handleActiveSelected(key)
                }
              }}
            />)
        }
        </div>
    </>
  );
};

export default StartPage;
