import {useState, useEffect, useRef} from 'react';

import Input from "../Input";
import Button from "../Button";

const LoginForm = ({onSubmit, isOpen}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formEl = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit && onSubmit({
      email,
      password
    });

    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (!isOpen) {
      setEmail('');
      setPassword('');

      formEl.current.reset();
    };
  }, [isOpen]);

  return (
    <form
      ref={formEl}
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

      <Button
        title="SignIn"
        disabled={false}
      />
    </form>
  );
}

export default LoginForm;
