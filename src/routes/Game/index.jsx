import {useHistory} from 'react-router-dom';

const GamePage = ({onChangePage}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>This is GamePage!</h1>
      <button onClick={handleClick}>
        to Home
      </button>
    </div>
  );
};

export default GamePage;
