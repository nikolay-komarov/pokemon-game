import {useContext} from 'react';

import {PokemonContext} from "../../../../context/pokemonContext";

import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";


const BoardPage = () => {
  const pokemonsContext = useContext(PokemonContext);
  const pokemons = pokemonsContext.pokemonsForGame;

  const handlePokemonCardClick = (id) => {
    console.log('click');
  }

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {
          pokemons.map(item => (
            <PokemonCard
              key={item.id}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
              isActive={true}
              isSelected={false}
              minimize={true}
              onPokemonCardClick={handlePokemonCardClick}
            />
          ))
        }

      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  )
};

export default BoardPage;
