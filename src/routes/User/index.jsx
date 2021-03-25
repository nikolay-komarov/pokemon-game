import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user";
import s from "../User/style.module.css";
import PokemonCard from "../../components/PokemonCard";
import {getPokemonAsync, selectPokemonsData} from "../../store/pokemons";
import {useEffect} from "react";

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonAsync());
  }, []);

  const userData = useSelector(selectUser);
  const userPokemons = useSelector(selectPokemonsData);

  return (
    <>
      {/*todo: add styles*/}
      <h1>UserPage</h1>
      <h2>user info:</h2>
      <span>user email: ${userData.email}</span>
      <h2>user pokemons:</h2>

      <div className={s.flex}>
        {
          Object.entries(userPokemons).map(([key, item]) =>
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
            />)
        }
      </div>
    </>
  );
};

export default UserPage;
