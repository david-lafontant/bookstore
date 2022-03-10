import { NavLink } from 'react-router-dom';
import user from '../img/user.svg';

const Header = () => (
  <header className="cms-header">
    <nav>
      <ul className="menu-link">
        <li className="logo">
          <NavLink to="/bookstore">Bookstore CMS</NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/bookstore"
          >
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/Categories"
          >
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/bookstore"
      />
    </nav>

    <div>
      <img className="user-icon" alt="user-setting" src={user} />

    </div>
  </header>
);

export default Header;
