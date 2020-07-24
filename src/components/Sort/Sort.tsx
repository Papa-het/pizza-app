import * as React from "react";

const SortComponent: React.FC = () => {
  return (
    <div className="sortBlock">
      Сортировать по: <span className="sortBlock-selected">популярности</span>
    </div>
  );
};

const Sort = React.memo(SortComponent);

export { Sort };
