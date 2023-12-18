import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useContext(UserContext);

  const handleClick = () => {
    logout()
  }

  return (
    <nav>
      <ul>
        <li>Welcome to Book Review, {user ? user : 'Guest'}</li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            </>
        )}
        {user && (
          <>
            <li>
              <button onClick={handleClick} className="logout-button">logout</button>
            </li>
          </>
        )}
      </ul>
      <input type="text" placeholder="Search.." />
    </nav>
  );
};

export default Navbar;
