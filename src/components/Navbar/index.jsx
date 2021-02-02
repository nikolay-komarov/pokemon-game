import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({isMenuActive, changeMenuActive}) => {
  const handleMenuButtonClick = () => {
    changeMenuActive && changeMenuActive();
  }
  return (
    <nav id={s.navbar} className={cn({[s.bgActive]: isMenuActive})}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a
          className={cn(s.menuButton, {[s.active]: isMenuActive})}
          onClick={handleMenuButtonClick}
        >
          <span/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
