import {useState} from 'react';
import Menu from "../Menu";
import Navbar from "../Navbar";

const MenuHeader = ({bgActive}) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(null);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState);
  };
  const handleClickLogin = () => {
    setOpenModal(prevState => !prevState);
    console.log('login click');
  }

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
    </>
  );
};

export default MenuHeader;
