import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import PokemonCard from "../../../../components/PokemonCard";
import Button from "../../../../components/Button";

import {getPokemonAsync, selectPokemonsData} from "../../../../store/pokemons";
import {setPokemons1} from "../../../../store/pokemons1";
import {selectPokemons1Data} from "../../../../store/pokemons1";

import s from "./style.module.css";

const StartPage = () => {
  const history = useHistory();
  const handleStartGameClick = () => {
    history.push('/game/board');
  };

  // todo: add isLoading...
  // const isLoading = useSelector(selectPokemonsIsLoading);
  const pokemonsRedux = useSelector(selectPokemonsData);
  const pokemons1Redux = useSelector(selectPokemons1Data);
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    dispatch(getPokemonAsync());
  }, []);

  useEffect(() => {
    setPokemons(pokemonsRedux);
  }, [pokemonsRedux]);

  const handleActiveSelected = (key) => {
    const pokemon = {...pokemons[key]};

    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }));

    dispatch(setPokemons1({key, pokemon}));
  };


  return (
    <>
      <div className={s.buttonWrap}>
        <Button
          title="Start Game"
          disabled={(Object.keys(pokemons1Redux).length < 5)}
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
              className={s.card}
              minimize={false}
              onPokemonCardClick={() => {
                if ((Object.keys(pokemons1Redux).length < 5) || item.selected) {
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
