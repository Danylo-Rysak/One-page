import { FC } from 'react';
import logo from 'assets/images/Logo.webp';
import './index.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo header__logo">
          <a href="#main">
            <img src={logo} alt="main logo" />
          </a>
        </div>
        <div className="header__button-container">
          <a href="#workers" className="addUser__form-submit">
            Users
          </a>
          <a href="#singup" className="addUser__form-submit">
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
