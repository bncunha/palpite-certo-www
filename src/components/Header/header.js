import React from "react";
import './header.style.scss';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-xs-6">
          <h1 className="header__title">
            Bem-vindo ao <br />
            <strong>Soccer APP </strong>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
