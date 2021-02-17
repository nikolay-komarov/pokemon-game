import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../../../components/PokemonCard";
import Button from "../../../../components/Button";

import {PokemonContext} from "../../../../context/pokemonContext";

import {useDispatch, useSelector} from "react-redux";
import {getPokemonAsync, selectPokemonsData} from "../../../../store/pokemons";

import s from "./style.module.css";



const StartPage = () => {
  const history = useHistory();
  const handleStartGameClick = () => {
    history.push('/game/board');
  };

  const pokemonsContext = useContext(PokemonContext);

  // todo: add isLoading...
  // const isLoading = useSelector(selectPokemonsIsLoading);
  const pokemonsRedux = useSelector(selectPokemonsData);
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    dispatch(getPokemonAsync());
  }, []);

  useEffect(() => {
    setPokemons(pokemonsRedux);
  }, [pokemonsRedux])

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
                  handleActiveSelected(key);
                }
              }}
            />)
        }
        </div>
    </>
  );
};

export default StartPage;
