import * as React from "react";
import { TopBlock } from "./TopBlock";
import { PizzaListBlock } from "./PizzaListBlock";

const MainPageComponent: React.FC = () => {
  return (
    <div className="mainPage">
      <div className="container">
        <TopBlock />
        <PizzaListBlock />
      </div>
    </div>
  );
};

const MainPage = React.memo(MainPageComponent);

export { MainPage };
