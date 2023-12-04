import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Home from './routes/home/home.jsx';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

const Cart = () => {
  return (
    <div>
      <h1>Shopping Cart</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navbar /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/about" element={ <About /> } />
      </Route>
    </Routes>
  );
};

export default App;