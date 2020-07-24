import * as React from "react";
import { Header } from "../Header/Header";
import { StoreProvider } from "src/context";

interface IProps {
  component: React.ReactElement;
}

const Layout: React.FC<IProps> = ({ component }) => {
  return (
    <StoreProvider>
      <div className="layout">
        <Header />
        <div className="content">{component}</div>
      </div>
    </StoreProvider>
  );
};

export { Layout };
