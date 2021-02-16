import {useHistory} from 'react-router-dom';
import {useContext, useState} from 'react';
import Button from "../../../../components/Button";
import PokemonCard from "../../../../components/PokemonCard";

import s from './style.module.css';
import cn from 'classnames';

import {FirebaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

const FinishPage = () => {
  const history = useHistory();

  const firebaseContext = useContext(FirebaseContext);
  const pokemonsContext = useContext(PokemonContext);

  const player1 = Object.values(pokemonsContext.pokemons1).map(item => ({...item}));

  const [player2, setPlayer2] = useState(() => pokemonsContext.pokemons2.map(item => ({...item, isSelected: false})));
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectedCard = (card) => {
    setPlayer2(prevState => (
      prevState.map(item => ({
        ...item,
        isSelected: item.id === card.id
    }))));
    setSelectedCard(card);
  };

  const handleEndGameClick = () => {
    firebaseContext.addPokemon(selectedCard);
    history.replace('/game');
  };

  if (player1.length === 0) {
    history.replace('/game');
  };

  return (
    <div className={s.root}>
      <div className={s.playerCardWrapper}>
        {
          player1 &&
          player1.map(item =>
            <PokemonCard
              key={item.id}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
              isActive
              classsName={s.card}
            />
          )
        }
      </div>
      <div className={s.buttonWrapper}>
        <Button
          title="END GAME"
          onClick={handleEndGameClick}
        />
      </div>
      <div className={s.playerCardWrapper}>
        {
          player2 &&
          player2.map(item =>
            <PokemonCard
              key={item.id}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
              isActive
              classsName={cn(s.card, {[s.selected]: item.isSelected})}
              onPokemonCardClick={() => {
                handleSelectedCard(item);
              }}
            />
          )
        }
      </div>
    </div>
  );
};

export default FinishPage;
