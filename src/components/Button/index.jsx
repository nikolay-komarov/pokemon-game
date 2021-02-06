import s from './style.module.css';

const Button = ({title, onClick}) => {
  return (
    <button className={s.btn}
      onClick={onClick}>
      {title}
    </button>
  )
};

export default Button;
