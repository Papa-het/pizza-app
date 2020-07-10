import * as React from "react";
import { Tabs, Sort } from "src/components";

const TopBlock: React.FC = () => {
  return (
    <div className="topBlock">
      <Tabs />
      <Sort />
    </div>
  );
};

export { TopBlock };
