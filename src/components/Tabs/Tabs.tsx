import * as React from "react";
import cn from "classnames";

const list = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <ul className="tabs">
      {list.map((el, i) => (
        <li
          className={cn("tabs-item", { active: i === activeTab })}
          key={i}
          onClick={() => setActiveTab(i)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export { Tabs };
