import * as React from "react";

import { Controls } from "./Controls";
import { Pizza } from "src/types";

export type StateActive = { type: string; size: string };

const PizzaCard: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  const [active, setActive] = React.useState<StateActive>({
    type: "",
    size: "",
  });

  const handleClick = (str: string, isTop: boolean) =>
    setActive({
      type: isTop ? str : active.type,
      size: isTop ? active.size : str,
    });

  return (
    <div className="pizzaCard">
      <img className="pizzaCard-img" src={pizza.imageUrl} alt={pizza.name} />
      <h3 className="pizzaCard-title">{pizza.name}</h3>
      <Controls active={active} handleClick={handleClick} />
      <div className="pizzaCard-add">
        <h3>от {pizza.price} тг</h3>
        <button>Добавить</button>
      </div>
    </div>
  );
};

export { PizzaCard };