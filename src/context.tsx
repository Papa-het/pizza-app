import * as React from "react";

const initialState: IState = {
  currentType: 0,
};

const initialContext: IContext = {
  ...initialState,
  setCurrentType: () => {},
};

const Store = React.createContext<IContext>(initialContext);

const StoreProvider: React.FC = ({ children }) => {
  const [currentType, setCurrentType] = React.useState(0);

  const contextProps: IContext = {
    currentType,
    setCurrentType,
  };

  return <Store.Provider value={contextProps}>{children}</Store.Provider>;
};

interface IState {
  currentType: number;
}

interface IContext extends IState {
  setCurrentType: (type: number) => void;
}

export { StoreProvider, Store };
