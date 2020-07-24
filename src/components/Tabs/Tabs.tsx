import * as React from "react";
import cn from "classnames";

import { Store } from "src/context";

const list = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const TabsComponent: React.FC = () => {
  const { currentType, setCurrentType } = React.useContext(Store);

  return (
    <ul className="tabs">
      {list.map((el, i) => (
        <li
          className={cn("tabs-item", { active: i === currentType })}
          key={i}
          onClick={() => setCurrentType(i)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

const Tabs = React.memo(TabsComponent);

export { Tabs };
