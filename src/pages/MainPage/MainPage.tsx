import * as React from "react";
import { TopBlock } from "./TopBlock";
import { PizzaListBlock } from "./PizzaListBlock";

const MainPage: React.FC = () => {
  return (
    <div className="mainPage">
      <div className="container">
        <TopBlock />
        <PizzaListBlock />
      </div>
    </div>
  );
};

export { MainPage };
