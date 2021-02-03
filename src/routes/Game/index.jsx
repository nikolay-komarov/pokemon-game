
const GamePage = ({onChangePage}) => {
  const handleClick = () => {
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
