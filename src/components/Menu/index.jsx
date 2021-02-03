import s from './style.module.css';
import cn from 'classnames';

const MENU = [
  {
    title: 'HOME',
    to: '#welcome'
  },
  {
    title: 'GAME',
    to: '#game'
  },
  {
    title: 'HOME',
    to: '#welcome'
  },
  {
    title: 'ABOUT',
    to: '#about'
  },
  {
    title: 'CONTACT',
    to: '#contact'
  }
];

const Menu = ({isOpen}) => {
  // TODO: add links for menuItems
  return (
    <div className={cn(s.menuContainer, {
      [s.active]: isOpen === true,
      [s.deactive]: isOpen === false
    })}>
      <div className={s.overlay} />
      <div>
        <ul>
          {
            MENU.map(({title, to}, index) => (
              <li key={index}>
                <a href={to}>
                  {title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Menu;
