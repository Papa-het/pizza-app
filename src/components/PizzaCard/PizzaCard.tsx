import * as React from "react";

import { Controls } from "./Controls";

import { Store } from "src/context";
import { Pizza } from "src/types";

export type StateActive = {
  type: number;
  size: number;
};

const PizzaCard: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  const [active, setActive] = React.useState<StateActive>({
    type: 0,
    size: 0,
  });
  const [shake, handleShake] = React.useState<boolean>(false);
  const { orderList, setOrderList } = React.useContext(Store);

  const handleClick = (value: number, isTop: boolean) => {
    if (shake) handleShake(false);
    setActive({
      type: isTop ? value : active.type,
      size: isTop ? active.size : value,
    });
  };

  const handleAdd = () => {
    if (!active.type && !active.size) {
      setTimeout(() => handleShake(false), 3000);
      handleShake(true);
    }

    return setOrderList([
      ...orderList,
      {
        ...pizza,
        selectedSize: active.size,
        selectedType: active.type,
      },
    ]);
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
