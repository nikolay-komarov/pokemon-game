import {useState} from 'react';
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
  const handleSubmitLoginForm = (values) => {
    console.log('set email: ', values);
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
