import {useState} from 'react';
import {NotificationManager} from 'react-notifications';

import Menu from "../Menu";
import Navbar from "../Navbar";
import Modal from "../Modal";
import LoginForm from "../LoginForm";

const MenuHeader = ({bgActive}) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState);
  };
  const handleClickLogin = () => {
    setOpenModal(prevState => !prevState);
  };
  const handleSubmitLoginForm = async ({email, password}) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        retunSecurityToken: true,
      })
    };
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXTTR5uk2qfCOOjNs96kT3xboVdJxxMKM', requestOptions)
      .then(res => res.json());

    console.log('login auth: ', response);

    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.massage, 'wrong...');
    } else {
      NotificationManager.success('success');
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
        title="Login..."
        onCloseModal={handleClickLogin}
      >
        <LoginForm
          isOpen={isOpenModal}
          onSubmit={handleSubmitLoginForm}
        />
      </Modal>
    </>
  );
};

export default MenuHeader;
