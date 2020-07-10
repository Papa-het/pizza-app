import * as React from "react";
import { TopBlock } from "./TopBlock";

const MainPage: React.FC = () => {
  return (
    <div className="mainPage">
      <div className="container">
        <TopBlock />
      </div>
    </div>
  );
};

export { MainPage };
