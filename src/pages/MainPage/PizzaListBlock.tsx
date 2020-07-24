import * as React from "react";
import { useRequest } from "src/utils/useRequest";
import { PizzaCard } from "src/components/PizzaCard/PizzaCard";
import { Store } from "src/context";

const PizzaListBlockComponent: React.FC = () => {
  const { loading, failed, data } = useRequest({ url: "/pizzas.json" });

  const { currentType } = React.useContext(Store);

  if (loading) return <h1>Loading...</h1>;
  else if (failed) return <h1>Not Found</h1>;

  return (
    <div className="pizzas">
      <h1 className="pizzas-title">Все пиццы</h1>
      <div className="pizzas-list">
        {data
          .filter((pizza) => pizza.types.includes(currentType))
          .map((pizza) => (
            <PizzaCard pizza={pizza} key={pizza.id} />
          ))}
      </div>
    </div>
  );
};

const PizzaListBlock = React.memo(PizzaListBlockComponent);

export { PizzaListBlock };
