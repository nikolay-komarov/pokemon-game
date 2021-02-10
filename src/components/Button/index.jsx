import s from './style.module.css';

const Button = ({title, disabled, onClick}) => {
  return (
    <button
      className={s.btn}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  )
};

export default Button;
