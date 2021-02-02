
const GamePage = ({onChangePage}) => {
  const handleClick = () => {
    console.log('<Game />');
    onChangePage && onChangePage('app');
  };

  return (
    <div>
      This is GamePage!
      <button
      onClick={handleClick}>
        to Home
      </button>
    </div>
  );
};

export default GamePage;
