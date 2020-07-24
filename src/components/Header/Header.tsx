import * as React from "react";

const HeaderComponent: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">
          <img src="/images/logo.svg" alt="" />
          <div className="header-logo--info">
            <h2>REACT PIZZA</h2>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header-shop">
          <span className="header-shop--price">520 ₽</span>
          <span className="header-shop--count">
            <img src="/images/icon-order.svg" alt="" />3
          </span>
        </div>
      </div>
    </div>
  );
};

const Header = React.memo(HeaderComponent);

export { Header };
