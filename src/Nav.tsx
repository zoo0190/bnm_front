import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' replace end>
            Nav
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
