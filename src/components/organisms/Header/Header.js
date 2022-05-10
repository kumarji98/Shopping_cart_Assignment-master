import React, {useState, useContext } from "react";
import Logo from "../../atoms/Logo/Logo";
import "./Header.scss";
import { Link } from "react-router-dom";
import Cart from "../../molecules/Cart/Cart";
import { useHistory } from "react-router-dom";
import { userActions } from "../../../../src/reducers/userReducer";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.users);
  const userDispatch = useDispatch();

  const signOutHandler = () => {
    userDispatch(userActions.signOut());
  };
  
 
  return (
    <header className="header">
      <div className="header__sub-container">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="header__sub-container__nav-items">
          <Link to="/" className="header__sub-container__nav-items__link">
            Home
          </Link>
          <Link
            to="/products"
            className="header__sub-container__nav-items__link"
          >
            Products
          </Link>
        </nav>
        <div className="header__sub-container__nav-wrapper">
          <nav className="header__sub-container__nav-wrapper__login">
            
                {!isLoggedIn && <Link to="/signin" className="header__sub-container__nav-wrapper__login__link">SignIn</Link>}
                  {isLoggedIn && <span className="header__sub-container__nav-wrapper__login__link" onClick={signOutHandler}>SignOut</span>}
           
            <Link
              to="/register"
              className="header__sub-container__nav-wrapper__login__link"
            >
              Register
            </Link>
          </nav>
          <Cart />
        </div>
      </div>
    </header>
  );
}
