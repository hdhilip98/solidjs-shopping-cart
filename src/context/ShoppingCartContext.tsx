import { Accessor, Component, createContext, createEffect, createSignal, useContext } from "solid-js";

type ShoppingCartProviderProps = {
  children: any;
};

type ShoppingCartContext = {
  items: Accessor<CartItem[]>;
  totalQuantity: Accessor<number>;
  addToCart: (id: number) => void;
};

type CartItem = {
  id: number;
  quantity: Accessor<number>;
  increment: () => void;
  decrement: () => void;
  remove: () => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider: Component<ShoppingCartProviderProps> = (props) => {
  const [items, setItems] = createSignal<CartItem[]>([]);

  const totalQuantity = () => items().reduce((quantity, item) => quantity + item.quantity(), 0);

  const addToCart = (id: number) => {
    const [quantity, setQuantity] = createSignal(1);

    const remove = () => setItems((prev) => prev.filter((item) => item.id !== id));
    const increment = () => setQuantity((q) => q + 1);
    const decrement = () => {
      if (quantity() === 1) return remove();
      setQuantity((q) => q - 1);
    };

    setItems((prev) => [...prev, { id, quantity, increment, decrement, remove }]);
  };

  const store = {
    items,
    addToCart,
    totalQuantity,
  };

  return <ShoppingCartContext.Provider value={store}>{props.children}</ShoppingCartContext.Provider>;
};

export default ShoppingCartProvider;
