import cardBackSide from './assets/card-back-side.jpg';
import s from './style.module.css';

const PokemonCard = () => {
  return (
    <div className={s.root}>
      <div className={s.pokemonCard}>
        <div className={s.cardFront}>
          <div className={`${s.wrap} ${s.front}`}>
            <div className={`${s.pokemon}`}> {/*TODO: add <-- Type Pokemon -->*/}
              <div className={s.values}>
                <div className={`${s.count} ${s.top}`}>Count Value</div>
                <div className={`${s.count} ${s.right}`}>Count Value</div>
                <div className={`${s.count} ${s.bottom}`}>Count Value</div>
                <div className={`${s.count} ${s.left}`}>Count Value</div>
              </div>
              <div className={s.imgContainer}>
                <img src="" alt="" />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{}</span>
                <h3 className={s.name}>Name</h3>
                <small className={s.type}>Type: <span /></small>
              </div>
            </div>
          </div>
        </div>
        <div className={s.cardBack}>
          <div className={`${s.wrap} ${s.back}`}>
            <img src={cardBackSide} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
