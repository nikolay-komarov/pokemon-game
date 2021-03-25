import s from './style.module.css';

const Input = ({value, label, type="text", name, onChange}) => {
  return (
    <div className={s.root}>
      <input
        className={s.input}
        value={value}
        type={type}
        name={name}
        required
        onChange={(evt) => onChange(evt.target.value)}
      />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label}>{label}</label>
    </div>
  );
};

export default Input;
