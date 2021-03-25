import {useState} from 'react';
import {NotificationManager} from 'react-notifications';

import Menu from "../Menu";
import Navbar from "../Navbar";
import Modal from "../Modal";
import LoginForm from "../LoginForm";
import {useDispatch} from "react-redux";
import {getUserUpdateAsync} from "../../store/user";

const signinSingupUser = async ({email, password, type}) => {
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
  const dispatch = useDispatch();

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState);
  };
  const handleClickLogin = () => {
    setOpenModal(prevState => !prevState);
  };
  const handleSubmitLoginForm = async ({email, password, type}) => {
    const response = await signinSingupUser({email, password, type});

    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.massage, 'wrong...');
    } else {
      if (type === 'signup') {
        const pokemonsStart = await fetch('https://reactmarathon-api.herokuapp.com/api/pokemons/starter')
          .then(res => res.json());

        for (const item of pokemonsStart.data) {
          await fetch(`https://pokemon-game-f1cd5-default-rtdb.firebaseio.com/${response.localId}/pokemons.json?auth=${response.idToken}`, {
            method: 'POST',
            body: JSON.stringify(item),
          });
        }
      }

      localStorage.setItem('idToken', response.idToken);
      dispatch(getUserUpdateAsync());
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
