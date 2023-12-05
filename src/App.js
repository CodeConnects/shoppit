import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/Navbar/Navbar.jsx';
import Home from './routes/Home/Home.jsx';

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
        <Route index element={ <Home /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="about" element={ <About /> } />
      </Route>
    </Routes>
  );
};

export default App;