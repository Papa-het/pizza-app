import * as React from "react";
import cn from "classnames";

import { StateActive } from "./PizzaCard";

const topList = [
  { label: "тонкое", value: 0 },
  { label: "традиционное", value: 1 },
];
const secondList = [
  { label: "26 см.", value: 0 },
  { label: "30 см.", value: 1 },
  { label: "40 см.", value: 2 },
];

interface IProps {
  active: StateActive;
  shake: boolean;
  handleClick: (value: number, isTop: boolean) => void;
}

const ControlsComponent: React.FC<IProps> = ({
  active,
  handleClick,
  shake,
}) => {
  return (
    <div className={cn("pizzaCard-controls", { shake })}>
      <div className="pizzaCard-controls--top">
        {topList.map((el, i) => (
          <span
            key={i}
            onClick={() => handleClick(el.value, true)}
            className={cn({ active: active.type === el.value })}
          >
            {el.label}
          </span>
        ))}
      </div>

      <div className="pizzaCard-controls--second">
        {secondList.map((el, i) => (
          <span
            key={i}
            onClick={() => handleClick(el.value, false)}
            className={cn({ active: active.size === el.value })}
          >
            {el.label}
          </span>
        ))}
      </div>
    </div>
  );
};

const Controls = React.memo(ControlsComponent);

export { Controls };
