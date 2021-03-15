import {useState} from 'react';
import {NotificationManager} from 'react-notifications';

import Menu from "../Menu";
import Navbar from "../Navbar";
import Modal from "../Modal";
import LoginForm from "../LoginForm";

const signinSingupUser = async ({email, password,type}) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      retunSecurityToken: true,
    })
  };

  switch (type) {
    case 'signin':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXTTR5uk2qfCOOjNs96kT3xboVdJxxMKM', requestOptions)
        .then(res => res.json());
    case 'signup':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXTTR5uk2qfCOOjNs96kT3xboVdJxxMKM', requestOptions)
        .then(res => res.json());
    default:
      return 'I cannot login user';
  }
};

const MenuHeader = ({bgActive}) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState);
  };
  const handleClickLogin = () => {
    setOpenModal(prevState => !prevState);
  };
  const handleSubmitLoginForm = async ({email, password, type}) => {
    const response = await signinSingupUser({email, password, type});

    console.log('login auth: ', response);

    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.massage, 'wrong...');
    } else {
      localStorage.setItem('idToken', response.idToken);
      NotificationManager.success('success');
      handleClickLogin();
    }
  };

  return (
    <>
      <Menu
        isOpen={isOpen}
        onClickHamburg={handleClickHamburg}
      />
      <Navbar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburg={handleClickHamburg}
        onClickLogin={handleClickLogin}
      />
      <Modal
        isOpen={isOpenModal}
        title="Auth..."
        onCloseModal={handleClickLogin}
      >
        <LoginForm
          isResetField={!isOpenModal}
          onSubmit={handleSubmitLoginForm}
        />
      </Modal>
    </>
  );
};

export default MenuHeader;
