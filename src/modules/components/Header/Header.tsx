import { NavLink } from 'react-router-dom';
import './Header.scss';
import { ContactIcons } from '../shared/ContactIcons/ContactIcons';

type Props = {
  setIsNavOpen: (elem: boolean) => void;
};

export const Header: React.FC<Props> = ({ setIsNavOpen }) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          <li className="header__elem">
            <NavLink
              to="/"
              className={({ isActive }) =>
                'header__link' + (isActive ? '  header__link--active' : '')
              }
            >
              Home
            </NavLink>
          </li>
          <li className="header__elem">
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                'header__link' + (isActive ? '  header__link--active' : '')
              }
            >
              Menu
            </NavLink>
          </li>
          <li className="header__logo">
            <NavLink to="/" className="header__link">
              <h1>Selve Restaurant</h1>
            </NavLink>
          </li>
          <li className="header__elem">
            <a href="#footer" className="header__link">
              Contacts
            </a>
          </li>
          <li className="header__elem">
            <ContactIcons gap={20} />
          </li>
          <li className="header__menu-wrapper">
            <button
              className="header__menu"
              onClick={() => setIsNavOpen(true)}
            ></button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
