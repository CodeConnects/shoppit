import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as HomeLogo } from '../../assets/blue-house.svg';
// import { ReactComponent as HomeLogo } from '../../assets/red-house.svg';

import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        
        <Link className='home-link' to="/">
          <HomeLogo className='home-logo' />
        </Link>
        
        <div className='page-links'>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
        </div>

      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;