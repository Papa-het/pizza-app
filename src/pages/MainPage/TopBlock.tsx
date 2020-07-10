import * as React from "react";
import { Tabs } from "src/components";

const TopBlock: React.FC = () => {
  return (
    <div className="topBlock">
      <Tabs />
      <div className="topBlock-sort">Сортировка по:</div>
    </div>
  );
};

export { TopBlock };
