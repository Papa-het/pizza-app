import * as React from "react";
import { Header } from "../Header/Header";

import style from "./style.module.css";

interface IProps {
  component: React.ReactElement;
}

const Layout: React.FC<IProps> = ({ component }) => {
  return (
    <div className={style.layout}>
      <Header />
      <div className="content">{component}</div>
    </div>
  );
};

export { Layout };
