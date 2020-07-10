import * as React from "react";
import { Header } from "../Header/Header";

interface IProps {
  component: React.ReactElement;
}

const Layout: React.FC<IProps> = ({ component }) => {
  return (
    <div className="layout">
      <Header />
      <div className="content">{component}</div>
    </div>
  );
};

export { Layout };
