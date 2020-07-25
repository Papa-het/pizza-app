import * as React from "react";

import { Controls } from "./Controls";
import { Pizza } from "src/types";

export type StateActive = { type: string; size: string };

const PizzaCard: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  const [active, setActive] = React.useState<StateActive>({
    type: "",
    size: "",
  });
  const [shake, handleShake] = React.useState<boolean>(false);

  const handleClick = (str: string, isTop: boolean) => {
    if (shake) handleShake(false);
    setActive({
      type: isTop ? str : active.type,
      size: isTop ? active.size : str,
    });
  };

  const handleAdd = () => {
    if (!active.type && !active.size) {
      setTimeout(() => handleShake(false), 3000);
      handleShake(true);
    }
  };

  return (
    <div className="pizzaCard">
      <img
        className="pizzaCard-img lazyload"
        src="https://cdn.dodostatic.net/site-static/dist/0332f02a568137b99a7e.svg"
        data-src={pizza.imageUrl}
        alt={pizza.name}
        loading="lazy"
      />
      <h3 className="pizzaCard-title">{pizza.name}</h3>
      <Controls shake={shake} active={active} handleClick={handleClick} />
      <div className="pizzaCard-add">
        <h3>от {pizza.price} тг</h3>
        <button onClick={handleAdd}>Добавить</button>
      </div>
    </div>
  );
};

export { PizzaCard };
