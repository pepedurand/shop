import { createContext, useContext, useReducer } from "react";

type CartState = {
  isDrawerOpen: boolean;
  cartItems: CartItem[];
};

interface CartItem {
  title: string;
  image: string;
  price: number;
  amount: number;
}

const initialState: CartState = {
  isDrawerOpen: false,
  cartItems: [],
};

interface CartContext {
  state: CartState;
  dispatch: React.Dispatch<Actions>;
}

const CartContext = createContext<CartContext>({
  state: initialState,
  dispatch: () => {},
});

type ToggleDrawerAction = {
  type: "TOGGLE_DRAWER";
  payload: {
    isOpen: boolean;
  };
};

type AddItemToCartAction = {
  type: "ADD_ITEM_TO_CART";
  payload: {
    item: CartItem;
  };
};

type Actions = ToggleDrawerAction | AddItemToCartAction;

const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const cartReducer = (state: CartState, action: Actions): CartState => {
    switch (action.type) {
      case "TOGGLE_DRAWER": {
        return {
          ...state,
          isDrawerOpen: action.payload.isOpen,
        };
      }

      case "ADD_ITEM_TO_CART": {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.item],
        };
      }

      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart() {
  return useContext<CartContext>(CartContext);
}

export { useCart, CartContextProvider };
