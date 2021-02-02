import {useState} from 'react';
import Menu from "../Menu";
import Navbar from "../Navbar";

const MenuHeader = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const handleMenuButtonClick = () => {
    setMenuActive(prevState => !prevState);
  };

  return (
    <>
      <Menu isActive={isMenuActive}/>
      <Navbar
        isMenuActive={isMenuActive}
        changeMenuActive={handleMenuButtonClick}
      />
    </>
  );
};

export default MenuHeader;
