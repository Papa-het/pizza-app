import * as React from "react";

import { OrderPizza } from "src/types";

const initialState: IState = {
  currentType: 0,
  orderList: [],
};

const initialContext: IContext = {
  ...initialState,
  setCurrentType: () => {},
  setOrderList: () => {},
};

const Store = React.createContext<IContext>(initialContext);

const StoreProvider: React.FC = ({ children }) => {
  const [currentType, setCurrentType] = React.useState(0);
  const [orderList, setOrderList] = React.useState<OrderPizza[]>([]);

  const contextProps: IContext = {
    currentType,
    orderList,
    setCurrentType,
    setOrderList,
  };

  return <Store.Provider value={contextProps}>{children}</Store.Provider>;
};

interface IState {
  currentType: number;
  orderList: OrderPizza[];
}

interface IContext extends IState {
  setCurrentType: (type: number) => void;
  setOrderList: (pizza: OrderPizza[]) => void;
}

export { StoreProvider, Store };
