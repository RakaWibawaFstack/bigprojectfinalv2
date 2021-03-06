import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
<BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/" >App Ecommerce</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Keranjang</a>
            {
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/signin">Sign In</Link>
            }
      </div>
    </header>
    <aside className="sidebar">
      <h3>Kategori</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Baju</a>
        </li>

        <li>
          <a href="index.html">Celana</a>
        </li>

        <li>
          <a href="index.html">Makanan & Minuman</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/products" component={ProductsScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
        
      </div>

    </main>
    <footer className="footer">
     By Raka & Cilsy Fullstack. All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
