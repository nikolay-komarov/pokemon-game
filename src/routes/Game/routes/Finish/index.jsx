import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from "react-redux";

import Button from "../../../../components/Button";
import PokemonCard from "../../../../components/PokemonCard";

import {selectPokemons2Data} from "../../../../store/pokemons2";
import {selectPokemons1Data} from "../../../../store/pokemons1";

import s from './style.module.css';
import cn from 'classnames';
import {selectLocalID} from "../../../../store/user";

const FinishPage = () => {
  const history = useHistory();

  const pokemons1Redux = useSelector(selectPokemons1Data);
  const pokemons2Redux = useSelector(selectPokemons2Data);

  const player1 = Object.values(pokemons1Redux).map(item => ({...item}));
  const [player2, setPlayer2] = useState(() => pokemons2Redux.map(item => ({...item, isSelected: false})));
  const [selectedCard, setSelectedCard] = useState(null);

  const localId = useSelector(selectLocalID);

  const handleSelectedCard = (card) => {
    setPlayer2(prevState => (
      prevState.map(item => ({
        ...item,
        isSelected: item.id === card.id
    }))));
    setSelectedCard(card);
  };

  const handleEndGameClick = async () => {
    // todo ?auth=${response.idToken}
    await fetch(`https://pokemon-game-f1cd5-default-rtdb.firebaseio.com/${localId}/pokemons.json`, {
      method: 'POST',
      body: JSON.stringify(selectedCard),
    });

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
