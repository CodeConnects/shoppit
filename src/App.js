import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/Navbar/Navbar.jsx';
import Home from './routes/Home/Home.jsx';
import SignIn from './routes/SignIn/SignIn.jsx';

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
        <Route path="about" element={ <About /> } />
        <Route path="sign-in" element={ <SignIn /> } />
        <Route path="cart" element={ <Cart /> } />
      </Route>
    </Routes>
  );
};

export default App;