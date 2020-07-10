import * as React from "react";
import { useRequest } from "src/utils/useRequest";
import { PizzaCard } from "src/components/PizzaCard/PizzaCard";

const PizzaListBlock: React.FC = () => {
  const { loading, failed, data } = useRequest({ url: "/pizzas.json" });

  if (loading) return <h1>Loading...</h1>;
  else if (failed) return <h1>Not Found</h1>;
  return (
    <div className="pizzas">
      <h1 className="pizzas-title">Все пиццы</h1>
      <div className="pizzas-list">
        {data.map((pizza) => (
          <PizzaCard pizza={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
};

export { PizzaListBlock };
