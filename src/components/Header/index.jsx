import {useHistory} from 'react-router-dom'
import s from './style.module.css';
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {plusAction, selectCount} from "../../store/counter";

const Header = ({title, descr}) => {

  const count = useSelector(selectCount);
  console.log(count);
  const dispatch = useDispatch();

  const history = useHistory();
  const handleClick = () => {
    // history.push('/game');

    dispatch(plusAction(1));
  };

  return (
    <header className={s.root}>
      <div className={s.forest}/>
      <div className={s.silhouette}/>
      <div className={s.moon}/>
      <div className={s.container}>
        {title && <h1>{title}</h1>}
        {descr && <p>{descr}</p>}
        <Button title="Start Game" onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
