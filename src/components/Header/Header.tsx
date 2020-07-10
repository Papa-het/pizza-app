import * as React from "react";

import logo from "./logo.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="logo-info">
          <h2>REACT PIZZA</h2>
        </div>
      </div>
    </div>
  );
};

export { Header };
