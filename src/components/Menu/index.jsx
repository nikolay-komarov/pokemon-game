import {Link} from "react-router-dom";

import s from './style.module.css';
import cn from 'classnames';

import {MENU} from "../../const";

const Menu = ({isOpen, onClickHamburg}) => {
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
                <Link to={to} onClick={onClickHamburg}>
                    {title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Menu;
