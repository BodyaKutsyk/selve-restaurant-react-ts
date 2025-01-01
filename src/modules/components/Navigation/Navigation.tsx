import { NavLink } from 'react-router-dom';
import { ContactIcons } from '../shared/ContactIcons/ContactIcons';
import cn from 'classnames';

import './Navigation.scss';

type Props = {
  setIsNavOpen: (elem: boolean) => void;
  isNavOpen: boolean;
};

export const Navigation: React.FC<Props> = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <nav
      className={cn('navigation', {
        'navigation--open': isNavOpen,
      })}
    >
      <div className="navigation__top">
        <button
          className="navigation__close"
          onClick={() => setIsNavOpen(false)}
        >
          <img src="./img/icons/close.svg" alt="Close icon" />
        </button>
        <ul className="navigation__list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
        </ul>
      </div>
      <div className="navigation__bottom">
        <p className="navigation__info">Contacts</p>
        <a className="navigation__info" href="tel:+380777777777">
          +380 (77) 77 77 777
        </a>
        <ContactIcons gap={40} />
      </div>
    </nav>
  );
};
