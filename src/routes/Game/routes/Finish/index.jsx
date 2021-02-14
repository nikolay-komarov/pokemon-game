// import {useHistory} from 'react-router-dom';
import {useContext, useState} from 'react';
import Button from "../../../../components/Button";
import PlayerBoard from "../../../../components/PlayerBoard";

import s from './style.module.css';
import cn from 'classnames';

// import {FirebaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";

const FinishPage = () => {
  // const history = useHistory();

  // const firebaseContext = useContext(FirebaseContext);
  const pokemonsContext = useContext(PokemonContext);

  const player1 = Object.values(pokemonsContext.pokemons1).map(item => ({...item}));
  const player2 = pokemonsContext.pokemons2.map(item => ({...item}));

  // , isSelected: false}));

  // const [player2, setPlayer2] = useState(() => {
  //   pokemonsContext.pokemons2.map(item => ({...item, isSelected: false}))
  // });

  // const handleSelectedCard = (card) => {
  //   setPlayer2(prevState => (
  //     prevState.map(item => ({
  //       ...item,
  //       isSelected: item.id === card.id
  //   }))));
  // }

  console.log('pokes1: ', player1);
  console.log('pokes2: ', player2);

  return (
    <div className={s.root}>
      <div className={s.playerCardWrapper}>
        {
          player1.map(item =>
            <PokemonCard
              key={item.id}
              name={item.name}
              img={item.img}
              id={item.id}
              type={item.type}
              values={item.values}
              isActive={true}
              isSelected={false}
              classsName={s.card}
              minimize={false}
              onPokemonCardClick={() => {
                console.log('click');
              }}
            />
          )
        }
      </div>
      <div className={s.buttonWrapper}>
        <Button
          title="END GAME"
          onClick={() => console.log('end game')}
        />
      </div>
      <div className={s.playerCardWrapper}>
        {
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
              minimize={false}
              onPokemonCardClick={() => {
                console.log('click');
                // handleSelectedCard(item);
              }}
            />
          )
        }
      </div>
    </div>
  );
};

export default FinishPage;
