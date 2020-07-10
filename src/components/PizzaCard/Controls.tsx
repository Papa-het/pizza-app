import * as React from "react";
import cn from "classnames";

import { StateActive } from "./PizzaCard";

const topList = ["тонкое", "традиционное"];
const secondList = ["26 см.", "30 см.", "40 см."];

interface IProps {
  active: StateActive;
  handleClick: (str: string, isTop: boolean) => void;
}

const Controls: React.FC<IProps> = ({ active, handleClick }) => {
  return (
    <div className="pizzaCard-controls">
      <div className="pizzaCard-controls--top">
        {topList.map((el, i) => (
          <span
            key={i}
            onClick={() => handleClick(el, true)}
            className={cn({ active: active.type === el })}
          >
            {el}
          </span>
        ))}
      </div>

      <div className="pizzaCard-controls--second">
        {secondList.map((el, i) => (
          <span
            key={i}
            onClick={() => handleClick(el, false)}
            className={cn({ active: active.size === el })}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Controls };
