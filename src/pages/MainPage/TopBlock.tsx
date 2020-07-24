import * as React from "react";
import { Tabs, Sort } from "src/components";

const TopBlockComponent: React.FC = () => {
  return (
    <div className="topBlock">
      <Tabs />
      <Sort />
    </div>
  );
};

const TopBlock = React.memo(TopBlockComponent);

export { TopBlock };
