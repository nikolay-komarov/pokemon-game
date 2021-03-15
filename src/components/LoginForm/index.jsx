import {useState, useEffect} from 'react';

import Input from "../Input";
import Button from "../Button";

import s from './style.module.css';

const LoginForm = ({onSubmit, isResetField = false}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setLogin] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit && onSubmit({
      type: isLogin ? 'signin' : 'signup',
      email,
      password
    });

    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [isResetField]);

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          type="text"
          name="email"
          value={email}
          label="email"
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="password"
          onChange={(evt) => setPassword(evt.target.value)}
        />
      </div>

      <div className={s.flex}>
        <Button
          title={isLogin ? "Login" : "SignUp"}
          disabled={false}
        />
        <div className={s.link}
          onClick={() => setLogin(prevState => !prevState)}
        >
          {!isLogin ? 'Login' : 'Register'}
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
