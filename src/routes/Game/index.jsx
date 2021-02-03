import MenuHeader from "../../components/MenuHeader";
import s from './style.module.css';

const GamePage = ({onChangePage}) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  };

  return (
    <>
      <MenuHeader bgActive={true} />
      <div className={s.root}>
        This is GamePage!
        <button
        onClick={handleClick}>
          to Home
        </button>
      </div>
    </>
  );
};

export default GamePage;
