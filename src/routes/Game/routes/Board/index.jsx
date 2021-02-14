import {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from "../../../../components/PokemonCard";

import {PokemonContext} from "../../../../context/pokemonContext";

import s from './style.module.css';

const BoardPage = () => {
  const [board, setBoard] = useState([]);
  const {pokemons} = useContext(PokemonContext);
  const history = useHistory();

  console.log(board);

  const handlePokemonCardClick = (id) => {
    console.log('click');
  };

  useEffect(async () => {
    const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardRequest = await boardResponse.json();

    setBoard(boardRequest.data);
  }, []);

  // if (Object.keys(pokemons).length === 0) {
  //   history.replace('/game');
  // };

  const handleClickBoardPlate = (position) => {
    console.log('click board plate: ', position);
  };

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
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
              minimize={true}
              onPokemonCardClick={handlePokemonCardClick}
            />)
        }
      </div>

      <div className={s.board}>
        {
          board.map(item => (
            <div
              key={item.position}
              className={s.boardPlate}
              onClick={() => !item.card && handleClickBoardPlate(item.position)}
            >
              {
                item.card
                ? <PokemonCard
                    {...item}
                    minimize
                  />
                : item.position
              }
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default BoardPage;
