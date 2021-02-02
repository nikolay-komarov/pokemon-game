import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({isMenuActive, changeMenuActive}) => {
  const handleMenuButtonClick = () => {
    changeMenuActive();
  }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a
          className={cn(s.menuButton, isMenuActive ? s.active : '')}
          onClick={handleMenuButtonClick}
        >
          <span/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
